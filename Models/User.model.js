
let users = [
    { id: '0', name: 'aa', email: '1@gmail.com', phone: '0556781234', birthDate: '06/21/23' },
    { id: '1', name: 'aa', email: '1@gmail.com', phone: '0556781234', birthDate: '06/21/23' },
    { id: '2', name: 'aa', email: '1@gmail.com', phone: '0556781234', birthDate: '06/21/23' },
];

function ValidEmail(email) {
    const axios = require('axios');
    axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=2e17dc1705204211a9f56d23286e45c9&email=${email}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
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

function getUserById(id) {
    console.log(id);
    const user = users.find((user) => user.id == id);
    return user;
}

function create(name, email, phone, birthDate) {
    const id = users.length;
    users.push({ id, name, email, phone, birthDate });
}

function update(id, name, email, phone, birthDate) {
    const user = getUserById(id);
    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        user.birthDate = birthDate || user.birthDate;
    }
}

function deleteUser(id) {
    const index = users.findIndex((user) => user.id == id);
    if (index === -1) {
        throw new Error(`User with id ${id} not found`);
    }
    users.splice(index, 1);
    return { message: 'User deleted successfully' };
}

const UserModel = {
    get,
    create,
    update,
    deleteUser,
    getUserById,
};
export default UserModel;
