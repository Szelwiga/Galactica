document.querySelector('#mainImage').style.width="100%";
document.querySelector('#mainImage').style.height="100%";
var ratio;
function reSize(){
	var w=window.outerWidth;
	var h=window.outerHeight-50;
	ratio=Math.min(w/M, h/N)-0.2;
	document.querySelector('#mainImage').style.width=M*ratio;
	document.querySelector('#mainImage').style.height=N*ratio;
}
window.addEventListener('resize', reSize);
window.onload=reSize();
