/*Szelwiga Earthquake Algorithm (basic version)*/
function makeNoise(n, m, values){
	var noiseVX=[0, 0, -1, -1, -1, 0, 1, 1, 1];
	var noiseVY=[0, 1, 0, -1, 1, -1, -1, 1, 0];
	var samples=Math.round(Math.log(n*m)*Math.log(n*m)/1.5);
	var maxRand=n*m;
	var islands=Math.round(Math.log(n*m)*Math.sqrt(m)*2);
	var islandPower=Math.round((n*n*n*n*n));
	var border=15;
	var arr=[], sec=[];
	arr.length=n;
	values++;
	for (var i=0; i<n; i++)
		{
		arr[i]=[];
		sec[i]=[];
		arr[i].length=m;
		sec[i].length=m;
		}
	for (var i=0; i<n; i++)
		for (var j=0; j<m; j++)
			arr[i][j]=getRandom(-maxRand, maxRand);
	for (var i=0; i<islands; i++)
		{
		var X=getRandom(Math.round(n/border), Math.round(n*(border-1)/border));
		var Y=getRandom(Math.round(m/border), Math.round(m*(border-1)/border));
		arr[X][Y]+=islandPower;
		}
	for (var g=0; g<samples; g++)
		{
		for (var i=0; i<n; i++)
			for (var j=0; j<m; j++)
				{
				var SR=0;
				for (var k=0; k<noiseVX.length; k++)
					SR+=arr[(i+noiseVX[k]+n)%n][(j+noiseVY[k]+m)%m];
				SR/=9;
				sec[i][j]=SR;
				}
		for (var i=0; i<n; i++)
			for (var j=0; j<m; j++)
				arr[i][j]=sec[i][j];
		}
	var HIGH=-maxRand, LOW=maxRand;
	for (var i=0; i<n; i++)
		for (var j=0; j<m; j++)
			{
			LOW=Math.min(LOW, arr[i][j]);
			HIGH=Math.max(HIGH, arr[i][j]);
			}
	for (var i=0; i<n; i++)
		for (var j=0; j<m; j++)
			arr[i][j]=Math.floor((arr[i][j]-LOW)*values/(HIGH-LOW));
	for (var i=0; i<n; i++)
		for (var j=0; j<m; j++)
			{
			arr[i][j]=Math.min(arr[i][j], values-1);
			arr[i][j]=Math.max(arr[i][j], 0);
			}
	return arr;
}
