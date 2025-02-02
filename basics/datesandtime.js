//dates
/*
let mydate=new Date()
console.log(mydate);//aaj ki date baataega

//method to convert into different date formats
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.getDate());
console.log(typeof(mydate));

//MON JAN 23 2023
console.log(mycreatedate.toLocaleString());//1/23/2023,5:03:00 AM**/


/*timestamps
let mycreatedate=new Date("02-02-2025")
let mytimestamps=Date.now()//current time in miliseconds
console.log(mytimestamps);
console.log(mycreatedate.getTime());//ye miliseconds m value 
 dega aur aise values ko easily compare kiya ja skta h 
*/
let newdate=new Date()
console.log(newdate.getMonth());//isme mmonth ka count 0 s shuru hota h
console.log(newdate.getDay());// similary days ka bhi sun =>0
