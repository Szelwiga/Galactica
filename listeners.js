function click(){
	console.log("Click");
}
function mouseMove(){
	console.log("Wziuum");
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
