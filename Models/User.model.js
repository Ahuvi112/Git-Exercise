
const user = {
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
}

let users = [];

function Get() {
    return users;
}

function Add(user) {
    const newUser = user;
    users.push(newUser);
}

function Update(id, user) {
    const index = users.findIndex(user => user.id == id);
    users[index] = user;
}

function Delete(id) {
    users = users.filter(user => user.id != id)
}

function ValidEmail(email){
    //need to implement includes
    if(!email.includes('@') || email.includes(' '))
        return false;
    return true;
} 

export default userMoodel;