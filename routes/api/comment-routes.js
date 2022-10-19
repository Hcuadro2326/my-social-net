const router = require('express').Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controllers');


router.route('/:postsId').post(addComment);

router
  .route('/:postsId/:commentId')
  .put(addReply)
  .delete(removeComment);

router.route('/:postsId/:commentId/:replyId').delete(removeReply);

module.exports = router;
