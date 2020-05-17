
const Video = require('../model/video');

//get all videos
module.exports.getVideos = async (req, res) =>{
    try {
        const videos = await Video.find({});
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}

//get video by ID
module.exports.getVideoById = async (req, res)=>{
    try {
        const video = await Video.findByIdAndUpdate({_id: req.params.id}, { $inc: { views: 1 }});
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}
