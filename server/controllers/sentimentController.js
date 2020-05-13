const Like = require('../model/like');
const Dislike = require('../model/dislike');

//get all likes for a video
module.exports.getLikeByVideoId = async (req, res) =>{
    try {
        const likes = await Like.find({ videoId: req.params.videoId }).countDocuments();
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}

//like a video
module.exports.likeAVideo = async (req, res) =>{
    const like = new Like(req.body);

    try {
        const newLike = await like.save();
        res.status(201).json(newLike);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//unlike a video
module.exports.unlikeAVideo = async (req, res) =>{
    try {
        const like = await Like.deleteOne({ userId: req.params.userId, videoId: req.params.videoId });
        res.status(200).json({'deleted': like});
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}


//get all DISlikes for a video by video ID
module.exports.getDislikesByVideoId = async (req, res) =>{
    try {
        const dislikes = await Dislike.find({ videoId: req.params.videoId }).countDocuments();
        res.status(200).json(dislikes);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}

//DISlike a video
module.exports.dislikeAVideo = async (req, res) =>{
    const dislike = new Dislike(req.body);

    try {
        const newdislike = await dislike.save();
        res.status(201).json(newdislike);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//unDISlike a video
module.exports.undislikeAVideo = async (req, res) =>{
    try {
        const dislike = await Dislike.deleteOne({ userId: req.params.userId, videoId: req.params.videoId });
        res.status(200).json({'deleted': dislike});
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}