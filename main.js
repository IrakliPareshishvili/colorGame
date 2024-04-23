const colors = ["aqua", "blue", "yellow", "green", "orange", "red"];

const colorShow = document.getElementById("color-visio");
const textShow = document.getElementById("text");
const buttonsContainer = document.getElementById("buttons");
const resetButton = document.getElementById("reset-btn");



function colorGame() {
    buttonsContainer.innerHTML = '';
    
    const colorTag = Math.floor(Math.random() * colors.length);
    const correctColor = colors[colorTag];
    
    colorShow.style.backgroundColor = correctColor;
    
    colors.forEach(color => {
        const button = document.createElement('button');
        button.classList.add('color-btn');
        button.style.backgroundColor = color;
        button.addEventListener('click', function() {
            checkColor(this.style.backgroundColor, correctColor);
        });
        buttonsContainer.appendChild(button);
    });
    
    textShow.textContent = "";
    
    resetButton.textContent = "New Color";
}

function checkColor(selectedColor, correctColor) {
    if (selectedColor === correctColor) {
        textShow.textContent = "You Guessed!";
        resetButton.textContent = "Play Again?";
    } else {
        textShow.textContent = "Wrong Color";
    }
}

resetButton.addEventListener("click", colorGame);

colorGame();
