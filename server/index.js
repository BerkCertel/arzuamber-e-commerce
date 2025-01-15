const express = require('express');
require("dotenv").config();
const productRouter = require("./routers/productRouter");
const categoryRouter = require("./routers/categoryRouter");
const sequelize = require("./db/connection");
require("./models/category");
require("./models/product");

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use("/products", productRouter)
app.use("/categories", categoryRouter)

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log(`${process.env.PORT}. port dinleniyor`);
});

const syncTables = async () => {
    try {
      await sequelize.sync({ alter: false });
      console.log('Tüm tablolar başarıyla senkronize edildi.');
    } catch (error) {
      console.error('Tablolar senkronize edilirken bir hata oluştu:', error);
    }
  };
  
syncTables();

server.on("error", (err) => {
    if (err.code == "EADDRINUSE") {
        console.log(`Port ${port} zaten kullanılıyor. Farklı bir port denenecek...`);
        const newPort = Number(port) + 1;
        app.listen(newPort, () => {
            console.log(`${newPort}. port dinleniyor`);
        });
    } else {
        console.log(err);
    }
})