const User = {

    constructor(id, name, phone, email, biryhDate) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.biryhDate = biryhDate;
    },

    ValidEmail(email) {
        const axios = require('axios');
        axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=2e17dc1705204211a9f56d23286e45c9&email=${email}`)
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            });
    },

    PhoneNumberValidation(PhoneNumber) {
        const axios = require('axios');
        axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=76ce3eacb8ff4fd79e87075ba8322cee&phone=+972https://phonevalidation.abstractapi.com/v1/?api_key=05700596a4cc481ba6db8a5c2316ce13&phone=+972${PhoneNumber}`)
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            });

    }
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

function getUserById(id) {
    const index = users.findIndex(user => user.id == id);
    return users[index];
}

module.exports = {
    get,
    create,
    update,
    deleteUser,
    getUserById,
};
