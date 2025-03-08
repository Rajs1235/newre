#  BASIC CALCULATOR
# JAVASCRIPT PORTION
```javascript
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

```
# HTML PORTION
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>

<style>
  h1{

    font-family:cursive;
    text-decoration: underline;
    text-decoration-color: rgb(255, 0, 251);
  }
   body{
    align-content: center;
      padding: 30px;;
      margin:30px; 
      width:80%;
        background-color:grey;
        border: 5px solid gold;
  border-radius: 5px;
    }
    .container{
        width:90%;
        align-content: center;
        padding:15px;
      margin:5px;
background-color: blue;
border-radius:8px ;
color: chartreuse;
    }
    p{
      background-color: aqua;
    }
</style></head>
<body>
  <div class="container">
    <h1 id="heading">BASIC CALCULATOR</h1>
    <form>
      <div class="input-container">
        <h3>Enter operands </h3>
     <label>FIRST NUMBER:</label>  <br> <br><input type="number" id="operand1" placeholder="ENTER FIRST NUMBER"><br><br>
     <label>SECOND NUMBER:</label> <br> <br>  <input type="number" id="operand2" placeholder="ENTER SECOND NUMBER"><br><br>
      </div>
      <div class="btns">
        <button class="btn ADD">+</button>
        <button class="btn SUBTRACT">-</button>
        <button class="btn MULTIPLY">*</button>
        <button class="btn DIVIDE">/</button>
        <button class="btn PERCENTAGE">%</button>
        <br><br><br>
        <button class="btn ALLCLEAR">AC</button>
      </div>
   
      <br><br>
     
    </form>
<label><b>ANSWER:</b></label>
<div class="RESULTS">
  <p></p>
</div>   
</div>

</body>
<script src="calci.js"></script>
</html>
```