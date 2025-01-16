const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");
const Category = require('./category');

const Product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories', 
            key: 'id',
        },
        allowNull: false,
    },
    images: {
        type: DataTypes.JSON,
        allowNull: false
    },
    discountPercent: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})


Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });


module.exports = Product;


