var mouseX, mouseY;
function click(){
	if (isWelcome)		welcomeClick(mouseX, mouseY);
}
function mouseMove(e){
	var rect=can.getBoundingClientRect();
	mouseX=(e.pageX-rect.left)/ratio;
	mouseY=(e.pageY-rect.top)/ratio;
	if (isWelcome)		welcomeHover(mouseX, mouseY);
}
function keyUp(){
	console.log("give up");
}
function keyDown(){
	console.log("Holes!");
}

addEventListener("click", click);
addEventListener("mousemove", mouseMove);
addEventListener("keydown", keyDown);
addEventListener("keyup", keyUp);
