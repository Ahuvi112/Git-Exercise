const validationFunction = require('../Validation/validation.js');

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
];

function UserValidation(user){
    if(user.id<0 ||user.name==null ||user.phone==null||user.email==null)
        return false;
    return true;
}

function get() {
    return users;
}

function getUserById(id) {
    const user = users.find((user) => user.id == id);
    return user;
}

async function create(id, name, email, phone, birthDate) {
    const reultApiEmail = await validationFunction.ValidEmail(email);
    const resultApiPhone = await validationFunction.PhoneNumberValidation(phone);

    if (resultApiPhone?.valid || reultApiEmail?.is_valid_format?.value) {
        users.push({ id, name, email, phone, birthDate });
        console.log("we did it*****************");
    } else {
        console.log('Invalid email or phone number');
    }
}

function update(id, name, email, phone, birthDate) {
    const user = getUserById(id);
    if (user) {
        user.name = name || user.name;
        //user.email = (validationFunction.ValidEmail(email) && email) || user.email;
        user.email = email || user.email;
        user.phone = (validationFunction.PhoneNumberValidation(phone) && phone) || user.phone;
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

module.exports = {
    get,
    create,
    update,
    deleteUser,
    getUserById
};
