const User = {
    constructor(id,name,phone,email,biryhDate){
        this.id=id;
        this.name=name;
        this.phone=phone;
        this.email=email;
        this.biryhDate=biryhDate;
    },

    // const ValidEmail=(email)=>{
    //     //need to implement includes
    //     if(!email.includes('@') || email.includes(' '))
    //         return false;
    //     return true;
    // } 
}

let users = [];

function get() {
    return users;
}

function create(user) {
    const newUser = user;
    users.push(newUser);
}

function update(id, user) {
    const index = users.findIndex(user => user.id == id);
    users[index] = user;
}

function deleteUser(id) {
    users = users.filter(user => user.id != id)
}

function getUserById(id){
    const index = users.findIndex(user => user.id == id);
    return users[index]; 
}

module.exports = {
    get,
    create,
    update,
    deleteUser,
    getUserById,
    User
};