var can=document.querySelector('#mainImage');
var ctx=can.getContext('2d');
var N=256, M=384;
createBackground(256*2, 384, Math.random()*1000, [blueTheme, blueThemeStar], 0);
createBackground(256*2, 192, Math.random()*1000, [blueTheme, blueThemeStar], 1);
can.width=M, can.height=N;
var inGame=false;
var isWelcome=true;
var bgFrame=0;
function update(){
	if (inGame)			updateGame();
	if (isWelcome)		updateWelcome();

	bgFrame++;
}
setInterval(update, 12);
