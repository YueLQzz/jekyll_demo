function startup() {
	var ev= e || window.event;
	var one=document.getElementById("one");
	var cx=e.clientX;
	var cy=e.clientY;
	var str="clientX="+cx+",clientY="+cy;
	window.status=str;
	one.innerHTML=str;
	}