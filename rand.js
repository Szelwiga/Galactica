var currentRandom=1000000009;
var seedOfRandom=0;
function setSeed(seed){
	currentRandom=seed+1000000009;
	seedOfRandom=seed;
}
function getSeed(){
	return seedOfRandom;
}
function getRandom(x, y){
	currentRandom^=currentRandom<<13;
	currentRandom^=currentRandom>>17;
	currentRandom^=currentRandom<<5;
	return Math.abs(currentRandom)%(y-x+1)+x;
}
