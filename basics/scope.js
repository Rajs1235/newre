/*let a=300
if(true){
    //scope
    let a=10

    const b=20
    var c=30
    console.log("inner: ",a);
    
}
console.log("outer: ",a);

//console.log(b);//not  defined in this scope
//console.log(c);
//terminal khol k scope dekhna
*/
//nested scope
function one(){
    const user="hitesh"
    function two() {
        const website="youtube"
        console.log(user);
        
    }
  //  console.log(website);
    
    two()
}
//one()
if(true){
    const user="hitesh"
    if(user=="hitesh"){
        const web="utube"
console.log(user+web);

    }
    //console.log(web);//website nnot defined for this scope
    
}
//console.log(username);