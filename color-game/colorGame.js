var colors;
var pickedColor;
var isHardMode = true;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click", function () {
	reset();
});

easyButton.addEventListener("click", function () {
	isHardMode = false;
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	reset();
});

hardButton.addEventListener("click", function () {
	isHardMode = true;
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	reset();
});

reset();

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function generateRandomColors(numSquares) {
	var arr = [];
	for(var i = 0; i < numSquares; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
	if(isHardMode) {
		colors = generateRandomColors(6);
	} else {
		colors = generateRandomColors(3);
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue  ";
	resetButton.textContent = "New Colors";
}
