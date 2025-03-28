const user={
    //_ for pvt property
    _email:'h@hc.com',
    _password:"abc",
//getter aur setter ko special methods mana h 
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
this._email=value
    }
}

const tea=Object.create(user)
console.log(tea.email);//_email likhne k bad bhii email s access ho jaega
