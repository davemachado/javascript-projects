var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p1Display = document.getElementById("p1Display");
var numInput = document.querySelector("input[type='number']");
var playingToDisplay = document.getElementById("playingToDisplay");
var winnerDisplay = document.getElementById("winnerDisplay");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			winnerDisplay.textContent = " - Player 1 Wins!";
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			winnerDisplay.textContent = " - Player 2 Wins!";
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function() {
	reset();
});

numInput.addEventListener("change", function() {
	winningScore = Number(this.value);
	playingToDisplay.textContent = winningScore;
	reset();
});

function reset() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	winnerDisplay.textContent = "";
}