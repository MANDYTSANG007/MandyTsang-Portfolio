const router = require('express').Router();
const Comment = require('../../models');

// route to create/add a comment using async/await
router.post('/', async (req, res) => {
  try { 
    const commentData = await Comment.create({
    name: req.body.name,
    email: req.body.email,
    comment_text: req.body.comment_text,
  });
  // if the comment is successfully created, the new response will be returned as json
  res.status(200).json(commentData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;