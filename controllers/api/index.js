const router = require("express").Router();
const contactRoutes = require("./contact-routes");
const projectRoutes = require("./project-routes");

router.use("/contacts", contactRoutes);
router.use("/projects", projectRoutes);

module.exports = router;