var starsInfo=[[0, 1, 2, 3, 4, 5], [1, 2, 4], [1, 4], [2], [4]];
var currentStarFrame=0, frameLeng=0, starAnimationCycle=50;
var backgroundImages=[], backgroundStars=[];
var starColors, mainColors;
var genGrid;
function setPixel(x, y, color){
	ctx.fillStyle=color;
	ctx.fillRect(y, x, 1, 1);
}
function createBackground(n, m, seed, theme, nr){
	mainColors=theme[0], starColors=theme[1];
	can.width=m, can.height=n;
	GNN=n; GMM=m;
	setSeed(seed)
	genGrid=makeGrid(GNN, GMM);
	var LOG=Math.round(n*m/10000);
	var sizes=[LOG, LOG*2, LOG*3, LOG*3, LOG*2];
	backgroundStars[nr]=[];
	for (var i=0; i<sizes.length; i++)
		for (var j=0; j<sizes[i]; j++)
			{
			var CX=getRandom(1, n), CY=getRandom(1, m);
			var ok=true;
			if (CX<10 || CX>n-10 || CY<10 || CY>m-10)
				ok=false;
			for (var star of backgroundStars[nr])
				if (Math.abs(star.x-CX)+Math.abs(star.y-CY)<10)
					ok=false;
			if (ok)		backgroundStars[nr].push({x: CX, y: CY, size: i});
			else		j--;
			}
	for (var i=0; i<GNN; i++)
		for (var j=0; j<GMM; j++)
			setPixel(0+i, 0+j, mainColors[genGrid[i][j]]);
	backgroundImages[nr]=new Image();
	backgroundImages[nr].src=can.toDataURL('image/jpeg', 1.0);
}
function rePaintBackground(ft, bt, scene){
	document.body.style.backgroundColor=mainColors[0];
	ctx.fillStyle=mainColors[0];
	//ctx.fillRect(0, 0, 400, 400);
	frameLeng++;
	if (frameLeng%30==0)
		currentStarFrame++;
	var genStars;
	ctx.drawImage(backgroundImages[scene], bt, ft), genStars=backgroundStars[scene];
	var GNN=backgroundImages[scene].height, GMM=backgroundImages[scene].width;
	for (var star of genStars)
		{
		for (var i=0; i<starsInfo[star.size].length; i++)
			{
			var currentColor;
			if ((currentStarFrame+star.x+star.y)%starAnimationCycle==i && i!=0)
				currentColor=starColors[starsInfo[star.size][i]-1];
			else
				currentColor=starColors[starsInfo[star.size][i]];
			setPixel(ft+((i*1+star.x+GNN)%GNN), bt+((star.y+GMM)%GMM), currentColor);
			setPixel(ft+((star.x+GNN)%GNN), bt+((i+star.y+GMM)%GMM), currentColor);
			setPixel(ft+((i*(-1)+star.x+GNN)%GNN), bt+((star.y+GMM)%GMM), currentColor);
			setPixel(ft+((star.x+GNN)%GNN), bt+((i*(-1)+star.y+GMM)%GMM), currentColor);
			}
		if (star.size==0)
			{
			var currentColor;
			if ((currentStarFrame+star.x+star.y)%starAnimationCycle==2)
				currentColor=starColors[3];
			else
				currentColor=starColors[4];
			setPixel(ft+((1+star.x+GNN)%GNN), bt+((1+star.y+GMM)%GMM), currentColor);
			setPixel(ft+((-1+star.x+GNN)%GNN), bt+((1+star.y+GMM)%GMM), currentColor);
			setPixel(ft+((1+star.x+GNN)%GNN), bt+((-1+star.y+GMM)%GMM), currentColor);
			setPixel(ft+((-1+star.x+GNN)%GNN), bt+(((-1)+star.y+GMM)%GMM), currentColor);
			}
		}
}
