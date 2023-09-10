const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database'); // Assuming your database configuration file is in the config folder
const User = require('./User');

class Message extends Model {
    // Model methods and associations go here
}

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize
    }
);

Message.belongsTo(User);

module.exports = Message;
