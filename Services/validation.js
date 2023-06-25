const axios = require('axios');

const ValidEmail = async (email) => {
    try {
        const resp = await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=2e17dc1705204211a9f56d23286e45c9&email=${email}`)
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

const PhoneNumberValidation = async (PhoneNumber) => {
    try {
        const resp = await axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=76ce3eacb8ff4fd79e87075ba8322cee&phone=+972${PhoneNumber}`)
        return resp.data;
    } catch (err) {

        console.error(err);
    }
};

function UserValidation(user){
    if(user.id==null ||user.name==null ||user.phone==null||user.email==null||user.birthDate==null)
        return false;
    return true;
};

module.exports={
    ValidEmail,
    PhoneNumberValidation,
    UserValidation
}