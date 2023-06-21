
let users = [
    { id: 0, name: 'aa', email: '1@gmail.com', phone: '0556781234', birthDate: '06/21/23' },
];

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

function create(name, email, phone, birthDate) {
    const id=users.length;
    users.push({id,name,email,phone,birthDate});
}

function update(id, name,email,phone,birthDate) {
    const index = users.findIndex(user => user.id == id);
    const _id=parseInt(id);
    if(id>=0 && id<users.length)
        users[index] = {_id, name,email,phone,birthDate};
}

function deleteUser(id) {
    /*convert id from object to number*/
    const str = JSON.stringify(id);
    const numStr = str.replace(/\D/g, ''); // Remove non-numeric characters
    const _id = parseInt(numStr);
    users = users.filter(user => user.id != _id);
}

function getUserById(id) {
    const index = users.findIndex(user => user.id == id);
    return users[index];
}

const UserModel = {
    get,
    create,
    update,
    deleteUser,
    getUserById
};
export default UserModel;