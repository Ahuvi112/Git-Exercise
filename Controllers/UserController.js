import {getUserById,get,update,deleteUser,User,create} from '../Models/User.model.js'
const UsersController = {

    getUsers:  (req, res) => {
        let users=get();
        res.json(users);
    },

    getById: (req, res) => {
        try {
            const { id } = req.body;
            let user =  getUserById(id);
            res.json(user);
        }
        catch(e){
            res.status(404).json({message:e.message});
        }
    },

    addUser:  (req, res) => {
        const { name, email, phone } = req.body;
        try {
            const newUser = create({ name, email, phone });
            res.json(newUser);
        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const id = req.body;
            deleteUser(id);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    updateUser: async (req, res) => { try {
        const { id, user } = req.body;
        update(id, user);
    }
    catch (e) {
        res.status(404).json({ message: e.message });
    }
    }
}
       

export default UsersController;