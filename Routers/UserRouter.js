const express = require('express');
const UsersController = require('../Controllers/UserController.js');

const UserRouter = express.Router();
UserRouter.delete("/deleteUser", UsersController.deleteUser)
UserRouter.post("/addUser", UsersController.addUser);
UserRouter.get("/getUsers", UsersController.getUsers);
UserRouter.put("/updateUser", UsersController.updateUser);
UserRouter.get("/getUserById", UsersController.getById);



module.exports = UserRouter;