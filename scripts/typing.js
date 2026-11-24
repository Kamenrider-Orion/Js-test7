const Words = [
    "dependent",
    "dog",
    "superficial",
    "admit",
    "juice",
    "javascript",
    "developer",
    "airplane",
    "great",
    "fun",
    "manipulate",
    "cat",
    "transition",
    "school",
    "computer",
    "programming",
    "drag",
    "loving",
    "north",
];
    const word = document.getElementById("word");
    const text = document.getElementById("user-input");
    const scoreEl = document.getElementById("score");
    const timeEl = document.getElementById("timer");
    const endgameEl = document.getElementById("game-over-container");
    

let randomWord;
let score = 0;
    let Time = 30;
     
const interface = {
 
    
 getRandomWord: function() {
    return Words[Math.floor(Math.random() * Words.length)]; 
  
},
    addWordToDOM: function() {
        randomWord = interface.getRandomWord();
        word.innerHTML = randomWord;
        text.focus();
        interface.addEventListeners();
    },
    updateScore: function() {
        score ++;
        scoreEl.innerHTML = "Score: " + score;
        document.getElementById("message").textContent = "Correct!";
    },
    addEventListeners: function() {
        
text.addEventListener("input", (event) => {
    const insertedText = event.target.value; 

    if (insertedText === randomWord) {
        interface.addWordToDOM(); 

        interface.updateScore(); 

        
        event.target.value = ""; 

        

        
        Time += 5; 
        
        interface.updateTimer(); 
    }
}); 

    },

    updateTimer: function() { 
            Time--;
           timeEl.innerHTML = Time + "s";
            if (Time < 0) {
            clearInterval(Timeinterval);
            interface.gameOver();
        
        }
        
    },
    addTime: function(){

    },
    gameOver: function() {
        document.getElementById("message").textContent = "";
        word.style.display = "none";
        text.disabled = true;
        endgameEl.innerHTML = `<h1>Time ran out!</h1> <p> Your final score is ${score}</p>
    <button onClick = "location.reload()">Reload</button>`;
    endgameEl.style.display != "none";
       endgameEl.style.display = "flex";
    }
};
const Timeinterval = setInterval(interface.updateTimer, 1000);

let start = interface.addWordToDOM();