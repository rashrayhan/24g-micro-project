const Comment = require('../model/comment');

//get all comments for a video
module.exports.getCommentByVideoId = async (req, res) =>{
    try {
        const comments = await Comment.find({ "commentTo": req.params.videoId })
        .sort({createdAt: -1})
        .populate('author');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}

//post a comment
module.exports.postComment = async (req, res) =>{
    const comment = new Comment(req.body);

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}