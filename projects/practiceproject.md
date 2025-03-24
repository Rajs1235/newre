# TIC-TAC-TOE
#
# html code
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TIC TAC TOE</title>
    <link href="https://fonts.googleapis.com/css2?family=Barriecito&family=Jaini&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
</head>

<body>
    <nav>
        <ul>
            <li>My ticatactoe.com</li>
        </ul>
    </nav>
    <br><br>


    <div class="gamecontainer">

        <div class="container">
            <div class="box bt-0 bl-0"><span class="boxtext"></span></div>
            <div class="box bt-0"><span class="boxtext"></span></div>
            <div class="box bt-0 br-0"><span class="boxtext"></span></div>
            <div class="box bl-0"><span class="boxtext"></span></div>
            <div class="box"><span class="boxtext"></span></div>
            <div class="box br-0"><span class="boxtext"></span></div>
            <div class="box bl-0 bb-0"><span class="boxtext"></span></div>
            <div class="box bb-0"><span class="boxtext"></span></div>
            <div class="box br-0 bb-0"><span class="boxtext"></span></div>

        </div>


        <div class="gameinfo">
            <h1>WELCOME TO TIC TAC TOE</h1>

            <br><br>
      
            <img src="trophy.jpg"  alt="Excited"  width="50px",height="50px">      
            <div class="imgbox">
    
            </div>
        </div>
        <div class="btn">

            <button id="reset" style="width: 80px; height: 70px; background-color: chocolate;">reset</button>

        </div>
    </div>

</body>
<script src="SCR2.JS"></script>

</html>
```
# js code
```
console.log("welcome to TIC-TAC-TOE");

let music = new Audio("str.mp3");
let turnad = new Audio("bell-sound.mp3");
let gameover = new Audio("gameovr.wav");
let turn = "X";
let isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

music.play();
setTimeout(() => {
    music.pause();
    music.currentTime = 0; // Reset audio to start position
}, 50000);

// Function to check for a winner
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [2, 4, 6], [0, 4, 8]
    ];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText)
            && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)
            && (boxtext[e[0]].innerText !== "")) {

            const gameInfo = document.querySelector('.gameinfo');
            if (gameInfo) {
                gameover.play().catch(error => console.log("Gameover audio failed:", error));
                gameInfo.innerText = boxtext[e[0]].innerText + " won";
                isgameover = true; // Mark the game as over

                // Show the winning image after confirming the game is over
                const img = document.querySelector('.imgbox img'); 
                if (img) {
                    img.style.display = "block"; // Make the image visible
                    img.style.opacity = "1"; // Ensure smooth transition
                    img.style.width = "200px"; 
                    img.style.height = "200px";
                }

                music.pause(); 
                alert("Gameover!!!");
            } else {
                console.log("Error: gameinfo element not found!");
            }
        }
    });
};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            turn = changeTurn();

            // Play turn sound and stop after 500ms
            turnad.play();
            setTimeout(() => {
                turnad.pause();
                turnad.currentTime = 0; // Reset audio to start position
            }, 500);

            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("gameinfo")[0].innerText = "Turn FOR " + turn;
            }
        }
    });
});

let btn = document.getElementById('reset');
btn.addEventListener('click', () => {
    alert("Game over!! Reloading now");
    window.location.reload();
});

```
# css
```

@import url('https://fonts.googleapis.com/css2?family=Barriecito&family=Jaini&display=swap');

nav{
    background-color: rgb(72, 3, 72);
    color: white;
    height:150px;
    font-size: 44px;
    font-family: "Barriecito", system-ui;
    display: flex;
    justify-content: center;
    align-items: center;
}
nav ul{
    list-style: none;

    
}
body{
    background-color: yellowgreen;
  padding: 0;
  margin: 0;
}
.gamecontainer{

display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
}
.imgbox {
    position: relative; /* Ensure positioning context */
    z-index: 10; /* Make sure it's above other content */
}
.container{
    display: grid;
    
    grid-template-rows: repeat(3,10vw);
    grid-template-columns: repeat(3,10vw);
}
.box{
    border: 2px solid black;
    font-size:9vw ;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box:hover{
   background-color: pink;
}
.gameinfo{
    padding: 35px;
    
}
.imgbox img {
    width: 0px; 
    height: 0px;
    opacity: 0;
    display: none; /* Hide image initially */
    transition: width 1s ease-in-out, height 1s ease-in-out, opacity 1s ease-in-out;
}


.br-0{
    border-right:0 ;
}
.bl-0{
    border-left:0 ;
}
.bt-0{
    border-top:0 ;
}
.bb-0{
    border-bottom:0 ;
}
.btn{
    
   border-radius:  0.5em;
    border:0.1em solid black;
}

```