const sequelize = require('../config/connection');
const {Project , Contact} = require('../models');

const projectData = require('./projectData.json');
const contactData = require('./contactData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    await Project.bulkCreate(projectData, {
        individualHooks: true,
        returning: true,
    });

    await Contact.bulkCreate(contactData, {
        individualHooks: true,
        returning: true,
    });
}

seedDatabase();