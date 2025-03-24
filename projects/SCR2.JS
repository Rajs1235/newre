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
