// Contain routes - the homepage 
const router = require('express').Router();
const { Contact, Project } = require('../models');

router.get('/', async (req, res) => {
    try {
        const contactData = await Contact.findAll({
            attributes: ['id', 'name', 'email'],
        });
        // Serialize data for template
        const contact = contactData.map((contacts) => contacts.get({ plain: true }));
        console.log(contact);
        const projectData = await Project.findAll({
        });
        const projects = projectData.map((projects) => projects.get({ plain: true }));
        // Pass serialized data and session flag into template
        res.render('homepage', {
            contact, projects
        });
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/api', async (req, res) => {
    try {
        const projectData = await Project.findAll({
            attributes: ['project_id', 'title', 'description', 'tech'],
        });
        // Serialize data for template
        const project = projectData.map((projects) => projects.get({ plain: true }));
        console.log(project);
        // Pass serialized data and session flag into template
        res.render('homepage', {project});
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;





