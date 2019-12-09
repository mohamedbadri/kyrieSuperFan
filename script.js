var a = document.getElementById("k1");
var b = document.getElementById("k2");
var c = document.getElementById("k3");
var d = document.getElementById("k4");
var e = document.getElementById("k5");
var f = document.getElementById("k6");
var g = document.getElementById("main1");
var h = document.getElementById("main2");
var i = document.getElementById("main3");
var j = document.getElementById("bigmain2");
var k = document.getElementById("title")
var l = document.getElementById("ud")
var m = document.getElementById("lg")

function firstPair(){
	a.classList.toggle("s1a");
	b.classList.toggle("s1b");
	c.classList.toggle("s1c");
	d.classList.toggle("s1d");
	e.classList.toggle("s1e");
	f.classList.toggle("s1f");
	a.classList.toggle("black-white");
	b.classList.toggle("black-white");
	c.classList.toggle("black-white");
	d.classList.toggle("black-white");
	e.classList.toggle("black-white");
	f.classList.toggle("black-white");
	a.classList.toggle("cursor2");
}

function secondPair(){
	a.classList.toggle("s2a");
	b.classList.toggle("s2b");
	c.classList.toggle("s2c");
	d.classList.toggle("s2d");
	e.classList.toggle("s2e");
	f.classList.toggle("s2f");
	a.classList.toggle("black-white");
	b.classList.toggle("black-white");
	c.classList.toggle("black-white");
	d.classList.toggle("black-white");
	e.classList.toggle("black-white");
	f.classList.toggle("black-white");
	b.classList.toggle("cursor2");
}

function thirdPair(){
	a.classList.toggle("s3a");
	b.classList.toggle("s3b");
	c.classList.toggle("s3c");
	d.classList.toggle("s3d");
	e.classList.toggle("s3e");
	f.classList.toggle("s3f");
	a.classList.toggle("black-white");
	b.classList.toggle("black-white");
	c.classList.toggle("black-white");
	d.classList.toggle("black-white");
	e.classList.toggle("black-white");
	f.classList.toggle("black-white");
	c.classList.toggle("cursor2");
}

function fourthPair(){
	a.classList.toggle("s4a");
	b.classList.toggle("s4b");
	c.classList.toggle("s4c");
	d.classList.toggle("s4d");
	e.classList.toggle("s4e");
	f.classList.toggle("s4f");
	a.classList.toggle("black-white");
	b.classList.toggle("black-white");
	c.classList.toggle("black-white");
	d.classList.toggle("black-white");
	e.classList.toggle("black-white");
	f.classList.toggle("black-white");
	d.classList.toggle("cursor2");
}

function fithPair(){
	a.classList.toggle("s5a");
	b.classList.toggle("s5b");
	c.classList.toggle("s5c");
	d.classList.toggle("s5d");
	e.classList.toggle("s5e");
	f.classList.toggle("s5f");
	a.classList.toggle("black-white");
	b.classList.toggle("black-white");
	c.classList.toggle("black-white");
	d.classList.toggle("black-white");
	e.classList.toggle("black-white");
	f.classList.toggle("black-white");
	e.classList.toggle("cursor2");
}

function sixPair(){
	a.classList.toggle("s6a");
	b.classList.toggle("s6b");
	c.classList.toggle("s6c");
	d.classList.toggle("s6d");
	e.classList.toggle("s6e");
	f.classList.toggle("s6f");
	a.classList.toggle("black-white");
	b.classList.toggle("black-white");
	c.classList.toggle("black-white");
	d.classList.toggle("black-white");
	e.classList.toggle("black-white");
	f.classList.toggle("black-white");
	f.classList.toggle("cursor2");
}

function uncleDrew(){
	g.classList.add("uncledrew1");
	h.classList.add("uncledrew2");
	i.classList.add("uncledrew3");
	g.classList.remove("gif1");
	h.classList.remove("gif2");
	i.classList.remove("gif3");
	j.classList.remove("green");
	j.classList.add("orange");
	k.classList.add("title2");
	l.classList.remove("shake");
	m.classList.add("shake");
}

function kyrieLogo(){
	g.classList.remove("uncledrew1");
	h.classList.remove("uncledrew2");
	i.classList.remove("uncledrew3");
	g.classList.remove("gif1");
	h.classList.remove("gif2");
	i.classList.remove("gif3");
	j.classList.add("green");
	j.classList.remove("orange");
	k.classList.remove("title2");
	l.classList.add("shake");
	m.classList.remove("shake");
	
}

function kyrieTitle(){
	g.classList.add("gif1"); 
	h.classList.add("gif2");
	i.classList.add("gif3");
	k.classList.remove("button-effect");
	h.classList.remove("orange");
	h.classList.add("green");
}
