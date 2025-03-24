# projects relatted to DOM

## PROJECT LINK
[click here](https://stackbliz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## project 1

```javascript
console.log("RAJ")
const button=document.querySelectorAll('.button');
const body=document.querySelector("body")

button.forEach(function(button){
console.log(button);
button.addEventListener('click',function(e){
console.log(e)
console.log(e.target)
switch(e.target.id){
  case 'grey':body.style.backgroundColor='grey'
  break;
  case 'white':body.style.backgroundColor='white'
  break;
  case 'blue':body.style.backgroundColor='blue'
  break;
  case 'yellow':body.style.backgroundColor='yellow'
  break;
  case 'red':body.style.backgroundColor='red'
  break;
}
});
});

```

## Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit',function(e) {
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

if(height === ''||height<0 ||isNaN(height)){
  results.innerHTML=`please give valid height ${height}`;
}

else if(weight===''||weight<0 ||isNaN(weight)){
  results.innerHTML=`please give valid height ${weight}`;
}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2);

 
  if(bmi<18.6) {results.innerHTML=`<span>underweight :${bmi}</span>`;}
  else if(bmi<18.6 && bmi<24.9) {results.innerHTML=`<span>Normalweight :${bmi}</span>`;
}
 
else{
results.innerHTML=`<span>overweight :${bmi}</span>`
}
}

 

});

```
# Project 3
``` javascript


document.getElementById('clock')
 
 setInterval(function(){
  let date=new Date()
 clock.innerHTML=date.toLocaleTimeString();
 },1000 )




```
# project 4
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

# project 5
# js code
```
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div> 
`;
});
```

# html code
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="./chaiaurcode.js"></script>
  </body>
</html>
```