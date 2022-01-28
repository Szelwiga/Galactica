var can=document.querySelector('#mainImage');
var ctx=can.getContext('2d');
var N=256, M=384;
createBackground(256, 384, Math.random()*1000, [blueTheme, blueThemeStar]);
//createBackground(256, 192, Math.random()*1000, [blueTheme, blueThemeStar]);
function update(){
	rePaintBackground(0, 0);
	makeFrame(0, 0, N-1, M-1, blueThemeStar);
	//printText(100, 110, "galactica", 3, blueThemeStar[0], fancyPixelFont);
	//printText(120, 110, "marcel szelwiga", 1, blueThemeStar[0], fancyPixelFont);
}
setInterval(update, 30);
