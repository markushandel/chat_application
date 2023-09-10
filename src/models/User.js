const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database'); // Assuming your database configuration file is in the config folder

class User extends Model {
    // Model methods and associations go here
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize
    }
);

module.exports = User;
