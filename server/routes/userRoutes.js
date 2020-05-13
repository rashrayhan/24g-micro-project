const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const { parse_json } = require('../middlewares/parseBody');
const { validateUser } = require('../middlewares/helpers');

//get all users
userRouter.get('/us', userController.getUsers);

//get user by ID
userRouter.get('/:id', userController.getUserById);

//create user
userRouter.post('/', parse_json, validateUser, userController.createUser);

module.exports = userRouter;