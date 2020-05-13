const sentimentRouter = require('express').Router();
const sentimentController = require('../controllers/sentimentController');

//get all likes for a video
sentimentRouter.get('/getlikes/:videoId', sentimentController.getLikeByVideoId);

//like a video
sentimentRouter.post('/savelike', sentimentController.likeAVideo);

//unlike a video
sentimentRouter.delete('/unlike/:userId/:videoId', sentimentController.unlikeAVideo);

//get all DISlikes for a video
sentimentRouter.get('/getdislikes/:videoId', sentimentController.getDislikesByVideoId);

//DISlike a video
sentimentRouter.post('/savedisike', sentimentController.dislikeAVideo);

//unDISlike a video
sentimentRouter.delete('/undislike/:userId/:videoId', sentimentController.undislikeAVideo);


module.exports = sentimentRouter;