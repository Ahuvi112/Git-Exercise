import userModel from '../Models/User.model.js';

const UsersController = {

    getUsers: async (req, res) => {
        try {
            let users = await userModel.get();
            res.json(users);
        } catch (e) {
            res.status(404).json({ message: e.message });
        }

    },

    getById: async (req, res) => {
        try {
            const { id } = req.query;
            console.log(id); // Add this line
            const user = await userModel.getUserById(id);
            res.json(user);
        } catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    addUser: async (req, res) => {
        try {
            const { id, name, email, phone, birthDate } = req.body;
            const newUser = await userModel.create(id, name, email, phone, birthDate);
            res.json(newUser);
        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const id = req.query;
            await userModel.deleteUser(id);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.query;
            const { name, email, phone, birthDate } = req.body;
            await userModel.update(id, name, email, phone, birthDate);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    }
}
export default UsersController;