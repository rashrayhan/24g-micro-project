const commentRouter = require('express').Router();
const commentController = require('../controllers/commentController');
const { parse_json } = require('../middlewares/parseBody');
const { validateComment } = require('../middlewares/helpers');

//get all comments for a video
commentRouter.get('/:videoId', commentController.getCommentByVideoId);

//post a comment
commentRouter.post('/', parse_json, validateComment, commentController.postComment);

module.exports = commentRouter;