const router = require('express').Router();
const {
  getAllPost,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../../controllers/post-controller');

// /api/posts
router
  .route('/')
  .get(getAllPost)
  .post(createPost);

// /api/posts/:id
router
  .route('/:id')
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);

module.exports = router;
