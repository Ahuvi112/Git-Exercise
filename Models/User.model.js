
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

function ValidEmail(email) {
    const axios = require('axios');
    axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=2e17dc1705204211a9f56d23286e45c9&email=${email}`)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
}


function PhoneNumberValidation(PhoneNumber) {
    const axios = require('axios');
    axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=76ce3eacb8ff4fd79e87075ba8322cee&phone=+972https://phonevalidation.abstractapi.com/v1/?api_key=05700596a4cc481ba6db8a5c2316ce13&phone=+972${PhoneNumber}`)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });

}

function get() {
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



export default userMoodel;