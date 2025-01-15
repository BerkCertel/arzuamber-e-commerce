const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,  //Uzak sunucu ip adresi
    dialect: "mysql",
})

sequelize.authenticate()
.then(() => console.log("Veritabanı bağlantısı başarılı"))
.catch((err) => console.log(err));

module.exports = sequelize;