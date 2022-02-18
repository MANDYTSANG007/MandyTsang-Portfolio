const sequelize = require('../config/connection');
const {Project} = require('../models');

const projectData = require('./projectData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    await Project.bulkCreate(projectData, {
        individualHooks: true,
        returning: true,
    });
}

seedDatabase();