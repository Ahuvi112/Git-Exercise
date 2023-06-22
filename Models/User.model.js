import axios from 'axios';

class User{
    constructor(id, name, email, phone, birthDate){
        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.birthDate=birthDate;
    }
}

let users =[
    new User(1,"racheli","racheli@gmauk.com","0548465284",new Date('2022-7-8'))
    // { id: 0, name: 'aa', email: '1@gmail.com', phone: '0556781234', birthDate: '06/21/23' },
];

// async function ValidEmail(email) {
//     return axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=2e17dc1705204211a9f56d23286e45c9&email=${email}`)
//         .then((response) => {
//             return response.data.is_valid_format.value;
//         })
//         .catch(() => {
//             return false;
//         });
// }

// async function PhoneNumberValidation(PhoneNumber) {
//     return axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=76ce3eacb8ff4fd79e87075ba8322cee&phone=+972${PhoneNumber}`)
//         .then((response) => {
//             return response.data.valid;
//         })
//         .catch(() => {
//             return false;
//         });
// }

//-------------------------------------------------------------------------
function UserValidation(user){
    if(user.id<0 ||user.name==null ||user.phone==null||user.email==null)
        return false;
    return true;
}
//-------------------------------------------------------------------------

function get() {
    return users;
}

function getUserById(id) {
    const user = users.find((user) => user.id == id);
    return user;
}

async function create(id, name, email, phone, birthDate) {
    const emailValid = await ValidEmail(email);
    const phoneValid = await PhoneNumberValidation(phone);
    console.log("emailValid", emailValid, "phoneValid", phoneValid);
    if (emailValid && phoneValid) {
        console.log("did it*******************************************");
        users.push({ id, name, email, phone, birthDate });
    } else {
        console.log('Invalid email or phone number');
    }
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
    /*convert id from object to number*/
    const str = JSON.stringify(id);
    const numStr = str.replace(/\D/g, ''); // Remove non-numeric characters
    const _id = parseInt(numStr);
    users = users.filter(user => user.id != _id);
}

const UserModel = {
    get,
    create,
    update,
    deleteUser,
    getUserById
};
export default UserModel;