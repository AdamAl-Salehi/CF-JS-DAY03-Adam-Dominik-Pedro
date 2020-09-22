function bgc (red, green, blue){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	document.getElementsByTagName("BODY")[0].style.background =  'rgb(' + red + ',' + green + ',' + blue + ')';
}
bgc();

