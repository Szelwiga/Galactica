function updateGame(){
	var CF=bgFrame%(2*N);
	rePaintBackground(CF, 96, 1);
	rePaintBackground(CF, 96, 1);
	makeFrame(0, 96, N-1, M-96, blueThemeStar);
}
