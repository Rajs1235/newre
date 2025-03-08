const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
   
})
const RESULTS=document.querySelector('.RESULTS');
const buttons=document.querySelector(".btns");
buttons.addEventListener('click',(e)=>{
    var first=parseInt(document.getElementById('operand1').value);
    var second=parseInt(document.getElementById('operand2').value);
 
let temp;
    if(e.target.textContent==="+"){
        
         temp=first+second;
       
     }
     else if(e.target.textContent==="-"){
         temp=first-second;
        console.log(temp);
     }
     else if(e.target.textContent==='*'){
         temp=first*second;   }
     else if(e.target.textContent==='/'){
         temp=first/second;
       
     }
     else if(e.target.textContent==='%'){
      temp=first%second;
    
  }
  else if(e.target.textContent==='AC'){
    alert('clearinng calculator');
    window.location.reload();
  }
     RESULTS.innerHTML=temp;
      
})