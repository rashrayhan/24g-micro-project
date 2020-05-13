//validate create user
module.exports.validateUser = (req, res, next) =>{
    const data = req.body;
    if(data.name && data.email){
        next();
    }else{
        res.status(400).end('error occured', _=>{'one of the fields is empty'});
    }
}

//validate post comment
module.exports.validateComment = (req, res, next) =>{
    const data = req.body;
    if(data.commentTo && data.content){
        next();
    }else{
        res.status(400).end('error occured', _=>{'one of the fields is empty'});
    }
}