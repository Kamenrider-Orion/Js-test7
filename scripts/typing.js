const Words = [
    "hello",
    "world",
    "javascript",
    "programming"
];
const interface = {
    addWordToDOM: function(array) {
        Words.sort(() => Math.random() - 0.5);
        array = Words.find(word => word.length > 0);
        document.getElementById("word").textContent = array;
        document.getElementById("user-input").focus();
        interface.addEventListeners();
    },
    updateScore: function() {
        let score = parseInt(document.getElementById("score").textContent.split(": ")[1]);
        score++;
        document.getElementById("score").textContent = "Score: " + score;
        document.getElementById("message").textContent = "Correct!";
    },
    addEventListeners: function() {
        const input = document.getElementById("user-input");
        input.addEventListener("keyup", function(event) {
            if (event.code === "space" || event.code === "Enter") {
                const userInput = input.value.trim();
                if (userInput === document.getElementById("word").textContent) {
                    document.getElementById("message").textContent = "";
                    interface.updateScore();
                    interface.updateTimer(5);
                    input.value = "";
                    interface.addWordToDOM(Words);
                } else if (userInput !== document.getElementById("word").textContent) {
                    document.getElementById("message").textContent = "Incorrect! Try again.";
                }
            }
        });
    },
    updateTimer: function(value) {
        
        let time = parseInt(document.getElementById("timer").textContent.split(": ")[1]);
        let newTime = time + value || 60;
        document.getElementById("timer").textContent = "Time: " + newTime;
        const interval = setInterval(timerFunction, 1000);
        function timerFunction(){
            newTime--;
            document.getElementById("timer").textContent = "Time: " + newTime;
            if (newTime < 0) {
            clearInterval(interval);
            interface.gameOver();
        }
        }
        
    },
    gameOver: function() {
        document.getElementById("message").textContent = "";
        document.getElementById("word").style.display = "none";
        document.getElementById("user-input").disabled = true;
        document.getElementById("game-over-container").style.display = "grid";
    }
};
let number = 6;
function time() {
    console.log(number--);
    if (number < 0) {
        clearInterval(interval);
    }
}
const interval = setInterval(time, 1000);
