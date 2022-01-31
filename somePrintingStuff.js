function makeFrame(a, b, c, d, theme){
	var T=13;
	for (var i=a+T; i<=c-T; i++)
		{
		setPixel(i, b, theme[1]);
		setPixel(i, d, theme[1]);
		}
	for (var i=b+T; i<=d-T; i++)
		{
		setPixel(a, i, theme[1]);
		setPixel(c, i, theme[1]);
		}
	var corner=[
		[3, 9, 2, 3, 4, 5, 9, 5, 4, 3, 2, 1],
		[9, 9, 1],
		[2, 1, 0, 1, 2, 9, 1, 2, 3, 9, 4, 5],
		[3, 9, 1, 9, 3],
		[4, 9, 2, 3, 4, 9, 4, 5],
		[5],
		[9, 9, 1, 9, 4],
		[5, 9, 2, 9, 5],
		[4, 9, 3],
		[3],
		[2, 9, 4],
		[1, 9, 5]
	];
	for (var i=0; i<corner.length; i++)
		for (var j=0; j<corner[i].length; j++)
			if (corner[i][j]!=9)
				{
				setPixel(a+i, b+j, theme[corner[i][j]]);
				setPixel(a+i, d-j, theme[corner[i][j]]);
				setPixel(c-i, b+j, theme[corner[i][j]]);
				setPixel(c-i, d-j, theme[corner[i][j]]);
				}
}
function printText(x, y, text, scale, color, ALPH){
	var last=[];
	for (var c of text)
		{
		if (c==' ')
			{
			y+=scale*4;
			continue;
			}
		var T;
		if ('a'.charCodeAt()<=c.charCodeAt() && c.charCodeAt()<='z'.charCodeAt())
			T=ALPH[c.charCodeAt()-'a'.charCodeAt()];
		if ('0'.charCodeAt()<=c.charCodeAt() && c.charCodeAt()<='9'.charCodeAt())
			T=ALPH[c.charCodeAt()-'0'.charCodeAt()+26];
		for (var i=0; i<T.length; i++)
			for (var j=0; j<T[i].length; j++)
				if (T[i][j]==1)
					for (var ii=0; ii<scale; ii++)
						for (var jj=0; jj<scale; jj++)
							{
							setPixel(x+i*scale+ii, y+j*scale+jj, color);
							last[0]=x+i*scale+ii;
							last[1]=y+j*scale+jj;
							}
		y+=scale*T[0].length+scale;
		}
	return last;
}
