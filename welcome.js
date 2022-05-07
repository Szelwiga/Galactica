var welcColors=[blueThemeStar[2], blueThemeStar[2], blueThemeStar[2], blueThemeStar[2]];
var playButton;
var settButton;
var collButton;
var treeButton;
function updateWelcome(){
	var menuTop=100;
	var CF=bgFrame%(2*N);
	rePaintBackground(CF, 0, 0);
	rePaintBackground(CF-2*N, 0, 0);
	makeFrame(0, 0, N-1, M-1, blueThemeStar);
	printText(menuTop, 126, "galactica", 3, "rgb(190, 210, 250)", fancyPixelFont);
	printText(menuTop+18, 126, "marcel szelwiga", 1, blueThemeStar[0], fancyPixelFont);
	playButton=printText(menuTop+28, 201, "play", 3, welcColors[0], fancyPixelFont);
	settButton=printText(menuTop+46, 126, "settings", 2, welcColors[1], fancyPixelFont);
	collButton=printText(menuTop+46+14, 126, "collection", 2, welcColors[2], fancyPixelFont);
	treeButton=printText(menuTop+60+14, 126, "equipment", 2, welcColors[3], fancyPixelFont);
}
function welcomeHover(y, x){
	if (playButton.a<=x && x<=playButton.c && playButton.b<=y && y<=playButton.d)
		welcColors[0]=blueThemeStar[1];
	else
		welcColors[0]=blueThemeStar[2];

	if (settButton.a<=x && x<=settButton.c && settButton.b<=y && y<=settButton.d)
		welcColors[1]=blueThemeStar[1];
	else
		welcColors[1]=blueThemeStar[2];

	if (collButton.a<=x && x<=collButton.c && collButton.b<=y && y<=collButton.d)
		welcColors[2]=blueThemeStar[1];
	else
		welcColors[2]=blueThemeStar[2];

	if (treeButton.a<=x && x<=treeButton.c && treeButton.b<=y && y<=treeButton.d)
		welcColors[3]=blueThemeStar[1];
	else
		welcColors[3]=blueThemeStar[2];
}
function welcomeClick(x, y){
}
