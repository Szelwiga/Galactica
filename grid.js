function makeGrid(NN, MM){
	var VX=[0, 0, -1, -1, -1, 0, 1, 1, 1];
	var VY=[0, 1, 0, -1, 1, -1, -1, 1, 0];
	var visited=[]; visited.length=NN;
	var dither=[]; dither.length=NN;
	var result=[]; result.length=NN;
	var arr=makeNoise(NN, MM, 2);
	var ditherSamples=20;
	// var D1=45, D2=17, D3=55;
	var D1=37;
	var D2=17;
	var D3=47;
	for (var i=0; i<NN; i++)
		{
		visited[i]=[]; dither[i]=[]; result[i]=[];
		visited[i].length=MM; dither[i].length=MM; result[i].length=MM;
		}
	for (var i=0; i<NN; i++)
		for (var j=0; j<MM; j++)
			{
			dither[i][j]=0;
			for (var k=0; k<VX.length; k++)
				{
				if (arr[(i+VX[k]+NN)%NN][(j+VY[k]+MM)%MM]!=arr[i][j])
					{
					if (!(arr[(i+VX[k]+NN)%NN][(j+VY[k]+MM)%MM]==2 && arr[i][j]==1))
						dither[i][j]=1;
					}
				}
			if (arr[i][j]==0 && getRandom(0, 150)==0)
				dither[i][j]=1;
			}
	for (var g=0; g<ditherSamples; g++) //Not the real one (g++)
		for (var i=0; i<NN; i++)
			for (var j=0; j<MM; j++)
				if (dither[i][j])
					for (var k=0; k<VX.length; k++)
						if (arr[i][j]==arr[(i+VX[k]+NN)%NN][(j+VY[k]+MM)%MM])
							{
							if (getRandom(0, D1)==0 && arr[i][j]==0)
								dither[(i+VX[k]+NN)%NN][(j+VY[k]+MM)%MM]=1;
							if (getRandom(0, D2)==0 && arr[i][j]==1)
								dither[(i+VX[k]+NN)%NN][(j+VY[k]+MM)%MM]=1;
							if (getRandom(0, D3)==0 && arr[i][j]==2)
								dither[(i+VX[k]+NN)%NN][(j+VY[k]+MM)%MM]=1;
							}
	for (var i=0; i<NN; i++)
		for (var j=0; j<MM; j++)
			{
			if (dither[i][j]==1)
				{
				if (arr[i][j]==2)
					if ((i+j)%2==0)			result[i][j]=2;
					else					result[i][j]=1;
				if (arr[i][j]==1)
					if ((i+j)%2==0)			result[i][j]=1;
					else					result[i][j]=0;
				if (arr[i][j]==0)
					if (i%2==0 && j%2==0)	result[i][j]=1;
					else					result[i][j]=0;
				}
			else
				result[i][j]=arr[i][j];
			}
	return result;
}
