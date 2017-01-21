var button = document.querySelector("button");
var isWhite = true;

button.addEventListener("click", function() {
	console.log("clicked!");
	if (isWhite) {
		document.body.style.background = "purple";
	} else {
		document.body.style.background = "white";
	}
	isWhite = !isWhite;
});