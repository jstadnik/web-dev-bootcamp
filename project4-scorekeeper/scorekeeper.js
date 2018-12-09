var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var winNoInput = document.querySelector("input");
var winNoDisplay = document.querySelector("#winNo");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningNumber = 5;

p1button.addEventListener("click", function() {
    if (!gameOver) 
    {
        p1Score++;
        if (p1Score === winningNumber)
        {
            gameOver = true;
            p1display.classList.add("green");
        }
    }
    p1display.textContent = p1Score;
});

p2button.addEventListener("click", function() {
    if (!gameOver) 
    {
        p2Score++;
        if (p2Score === winningNumber)
        {
            gameOver = true;
            p2display.classList.add("green");
        }
    }
    p2display.textContent = p2Score;
});


resetButton.addEventListener("click", function() {
    reset();
});

function reset() 
{
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("green");
    p2display.classList.remove("green");
}

winNoInput.addEventListener("change", function() {
    winningNumber = Number(this.value);
    winNoDisplay.textContent = winningNumber;
    reset();
});
