function startup() {
	var one=document.getElementById("one");
	var cx=event.clientX;
	var cy=event.clientY;
	var str="clientX="+cx+",clientY="+cy;
	window.status=str;
	one.innerText=str;
	}