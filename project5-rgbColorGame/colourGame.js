var numColors = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    
    setupModeButtonListeners();
    setupSquareListeners();
    setupResetListener();
    refresh();
}

function setupResetListener()
{
    resetButton.addEventListener("click", function() {
        refresh();
    });
}

function setupModeButtonListeners()
{
    for(var i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numColors = 3: numColors = 6;
            refresh();
        });
    }
}

function setupSquareListeners()
{
    for (var i=0; i < squares.length; i++)
    {
        squares[i].addEventListener("click", function () {
            var squareColor = this.style.backgroundColor;
            if (squareColor === pickedColor)
            {
                message.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else 
            {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
            }
        });
    }
}

function refresh()
{
    colors = generateColors(numColors);
    pickedColor = pickColor();
    for (var i=0; i < squares.length; i++)
    {
        if (colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colours";
    message.textContent = "";
    colorDisplay.textContent = pickedColor;
}


function changeColors(color)
{
    for (var i=0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() 
{
    var rand = Math.floor(Math.random()*colors.length);
    return colors[rand];
}

function generateColors(num)
{
    var arr = []
    for(var i=0; i < num; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    r = randomRGB();
    g = randomRGB();
    b = randomRGB();
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomRGB()
{
    return Math.floor(Math.random()*256);
}
