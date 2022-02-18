const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unqiue: true,
            validate: {
                isEmail: true,
            }
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'comment',
    }
);

module.exports = Comment;