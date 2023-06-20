// import userMoodel from "../Models/User.model.js";

const UsersController = {

    getUsers:  (req, res) => {
        let users=userMoodel.Get();
        res.json(users);
    },

    getById: (req,res)=>{
        try{
            const { id } = req.body;
            let user =  UserModel.getById(id);
            res.json(user);
        }
        catch(e){
            res.status(404).json({message:e.message});
        }
    },

    addUser:  (req, res) => {
    
    },

    deleteUser: async (req, res) => {
        
    },

    updateUser: async (req, res) => {
       
    }
}

export default UsersController;