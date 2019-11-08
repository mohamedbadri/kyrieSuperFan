var a = document.getElementById("k1");
var b = document.getElementById("k2");
var c = document.getElementById("k3");
var d = document.getElementById("k4");
var e = document.getElementById("k5");
var f = document.getElementById("k6");

function firstpair(){
	document.getElementById("k2").classList.toggle("s1b");
	document.getElementById("k3").classList.toggle("s1c");
	document.getElementById("k4").classList.toggle("s1d");
	document.getElementById("k5").classList.toggle("s1e");
	document.getElementById("k6").classList.toggle("s1f");
}

function secondpair(){
	document.getElementById("k1").classList.toggle("s2a");
	document.getElementById("k3").classList.toggle("s2c");
	document.getElementById("k4").classList.toggle("s2d");
	document.getElementById("k5").classList.toggle("s2e");
	document.getElementById("k6").classList.toggle("s2f");
}

function thirdpair(){
	document.getElementById("k1").classList.toggle("s3a");
	document.getElementById("k2").classList.toggle("s3b");
	document.getElementById("k4").classList.toggle("s3d");
	document.getElementById("k5").classList.toggle("s3e");
	document.getElementById("k6").classList.toggle("s3f");
}

function fourthpair(){
	document.getElementById("k1").classList.toggle("s4a");
	document.getElementById("k2").classList.toggle("s4b");
	document.getElementById("k3").classList.toggle("s4c");
	document.getElementById("k5").classList.toggle("s4e");
	document.getElementById("k6").classList.toggle("s4f");
}

function fithpair(){
	document.getElementById("k1").classList.toggle("s5a");
	document.getElementById("k2").classList.toggle("s5b");
	document.getElementById("k3").classList.toggle("s5c");
	document.getElementById("k4").classList.toggle("s5d");
	document.getElementById("k6").classList.toggle("s5f");
}

function uncledrew(){
	document.getElementById("main1").classList.toggle("uncledrew1");
	document.getElementById("main2").classList.toggle("uncledrew2");
	document.getElementById("main3").classList.toggle("uncledrew3");
	document.getElementById("title").classList.toggle("title2");

}