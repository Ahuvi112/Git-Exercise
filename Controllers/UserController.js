const userModel = require('../Models/User.model.js');
const UsersController = {

    getUsers: async (req, res) => {
        try {
            let users = await userModel.get();
            res.json(users);
        } catch (error) {
            res.status(404).json({ message: e.message });
        }

    },

    getById: async (req, res) => {
        try {
            const { id } = req.body;
            let user = await userModel.getUserById(id);
            res.json(user);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    addUser: async (req, res) => {
        const { name, email, phone, dateBirth } = req.body;
        try {
            const newUser = await userModel.create({ name, email, phone, dateBirth });
            res.json(newUser);
        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const id = req.body;
            await userModel.deleteUser(id);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id, user } = req.body;
            await userModel.update(id, user);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }

    }
}
export default UsersController;