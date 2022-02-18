const router = require('express').Router();
const {Contact} = require('../../models');

// route to create/add a contact using async/await
router.post('/', async (req, res) => {
  try { 
    const contactData = await Contact.create({
    name: req.body.name,
    email: req.body.email,
    comment_text: req.body.comment_text,
  });
  // if the contact is successfully created, the new response will be returned as json
  res.status(200).json(contactData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;