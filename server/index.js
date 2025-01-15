const express = require('express');
require("dotenv").config();
const productRouter = require("./routers/productRouter");
const sequelize = require("./db/connection");

const app = express();

app.use("/products", productRouter)



const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log(`${process.env.PORT}. port dinleniyor`);
});

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