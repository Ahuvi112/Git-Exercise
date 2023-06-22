
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
    new User(0,"racheli","racheli@gmauk.com","0548465284",new Date('2023-6-22')),
    new User(1,"shira","shira@gmauk.com","089547855",new Date('2002-12-7'))
];

const get =()=> {
    const hebcalusers=[]
    users.map(async u=>{
        const date = u.birthDate;
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const hebDate=await HebCal(formattedDate);
        console.log("hebDate",hebDate);
        hebcalusers.push(hebDate);
    });
    console.log("hebcalusers",hebcalusers);
    return users;
}

function getUserById(id) {
    const user = users.find((user) => user.id == id);
    return user;
}

async function create(id, name, email, phone, birthDate) {
    const emailValid = await ValidEmail(email);
    const phoneValid = await PhoneNumberValidation(phone);
    if (emailValid && phoneValid) {
        users.push({ id, name, email, phone, birthDate });
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