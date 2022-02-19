const router = require('express').Router();
const {Project} = require('../../models');

router.get('/:id', async(req,res) =>{
    try {
        const projectData = await Project.findByPk(req.params.id);
        const project = projectData.get({ plain: true});
        res.render("homepage", project);
    } catch (error) {
        res.status(500).json(err);
    }
})

module.exports = router;