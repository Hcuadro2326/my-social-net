const { Post } = require('../models');

const postController = {
  // get all postPosts
  getAllPost(req, res) {
    Post.find({})
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one postPost by id
  getPostById({ params }, res) {
    Post.findOne({ _id: params.id })
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },


  createPost({ body }, res) {
    Post.create(body)
      .then(dbPostData => res.json(dbPostData))
      .catch(err => res.json(err));
  },

  updatePost({ params, body }, res) {
    Post.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found!' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => res.json(err));
  },


  deletePost({ params }, res) {
    Post.findOneAndDelete({ _id: params.id })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => res.json(err));
  }
};

module.exports = postController;
