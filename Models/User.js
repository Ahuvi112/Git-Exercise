class User {

    constructor(id,name,phone,email){
        this.id=id;
        this.name=name;
        this.phone=phone;
        this.email=email;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getPhone(){
        return this.phone;
    }
   setId(id){
        this.id=id;
   }
   setName(name){
    this.name=name;
   }
   setPhone(phone){
    this.phone=phone;
   }
   setEmail(email){
    this.email=email;
   }
}

export default User;