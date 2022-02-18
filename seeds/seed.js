const sequelize = require('../config/connection');
const {Project , Comment} = require('../models');

const projectData = require('./projectData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    await Project.bulkCreate(projectData, {
        individualHooks: true,
        returning: true,
    });

    await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });
}

seedDatabase();