function updateWelcome(){
	var CF=bgFrame%(2*N);
	rePaintBackground(CF, 0, 0);
	rePaintBackground(CF-2*N, 0, 0);
	makeFrame(0, 0, N-1, M-1, blueThemeStar);
	printText(122, 126, "galactica", 3, "rgb(190, 210, 250)", fancyPixelFont);
	printText(140, 126, "marcel szelwiga", 1, blueThemeStar[0], fancyPixelFont);
	var playButton=printText(150, 201, "play", 3, blueThemeStar[1], fancyPixelFont);

}
