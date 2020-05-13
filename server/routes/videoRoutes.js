const videoRouter = require('express').Router();
const videoController = require('../controllers/videoController');

//get all videos
videoRouter.get('/', videoController.getVideos);

//get video by ID
videoRouter.get('/:id', videoController.getVideoById);

module.exports = videoRouter;