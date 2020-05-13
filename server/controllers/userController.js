const User = require('../model/user');

//get all users
module.exports.getUsers = async (req, res) =>{
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}

//get user by ID
module.exports.getUserById = async (req, res)=>{
    try {
        const user = await User.findById({_id: req.params.id});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}

//create user
module.exports.createUser = async (req, res) =>{
    const user = new User(req.body);

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
