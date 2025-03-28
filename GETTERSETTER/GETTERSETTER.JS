
class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    //getter aur setter hr class m hote h kisi bhi property p lg jate h
get email(){
    //getter m return add krna hota hi h bhale hi empty wapas bhej do
    //pr bhejna padega
    return this._email.toUpperCase();
}
set email(value){
    //setter m jruri hi h return add kru
    this._email=value;
}
    get password(){
return `${this._password.toUpperCase()}hitesh`
//sirf value le paega pr set nhi krega
//interestingly hmne value li kcuh aur thi use set kr dia apne acc

    }
set password(value){
    this._password=value;
}
}

// const hitesh=new user("h@hitesh.ai","abc")
// console.log(hitesh.password);
// console.log(hitesh.email);

//NOTE : yha p hm const aur setter dono s value de rhe h to ek tarah ki race chlne lgti h
//islie call stack size exceed ho jaega

//NOTE: yha p hm jo y _ aur normal wala game khel rhe h isme alg alg field h aur _ wali
//el pvt property bn gayi h 

///note: we can alternatively do all the above work as this

Object.defineProperty(this,'email',{
    get:function(){
        return this._.email.toUpperCase()
    },
    set:function(value){
        this.email=value
    }
})

Object.defineProperty(this,'password',{
    get:function(){
        return this._password.toUpperCase();
    },
    set: function(value){
         this._password=value
    }
})
const chai=new user("chai@chai.com","chi")
console.log(chai._email);


const tea=Object.create(user)
console.log(tea.email);
