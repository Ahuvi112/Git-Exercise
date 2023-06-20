import express from 'express';
import UsersController from '../Controllers/UserController.js';

const UserRouter=express.Router();
UserRouter.delete("/deleteUser",UsersController.deleteUser)
UserRouter.post("/addUser", UsersController.addUser);
UserRouter.get("/getUsers", UsersController.getUsers);
UserRouter.put("/updateUser",UsersController.updateUser);

export default UserRouter;