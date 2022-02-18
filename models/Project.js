const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        tech: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'project',
    }
);

module.exports = Project;
