var a=document.getElementById('c');
var b=document.getElementById('o');
var c=document.getElementById('r');
var d=document.getElementById('v');
var e=document.getElementById('e');
var f=document.getElementById('t');
var g=document.getElementById('t1');
var h=document.getElementById('e1');

function myFunction(){
		setTimeout(()=>{a.style.textTransform="uppercase";},100);
		setTimeout(()=>{b.style.textTransform="uppercase";},200);
		setTimeout(()=>{c.style.textTransform="uppercase";},300);
		setTimeout(()=>{d.style.textTransform="uppercase";},400);
		setTimeout(()=>{e.style.textTransform="uppercase";},500);
		setTimeout(()=>{f.style.textTransform="uppercase";},600);
		setTimeout(()=>{g.style.textTransform="uppercase";},700);
		setTimeout(()=>{h.style.textTransform="uppercase";},800);
}
function myFuction(){
		setTimeout(()=>{a.style.textTransform="lowercase";},800);
		setTimeout(()=>{b.style.textTransform="lowercase";},700);
		setTimeout(()=>{c.style.textTransform="lowercase";},600);
		setTimeout(()=>{d.style.textTransform="lowercase";},500);
		setTimeout(()=>{e.style.textTransform="lowercase";},400);
		setTimeout(()=>{f.style.textTransform="lowercase";},300);
		setTimeout(()=>{g.style.textTransform="lowercase";},200);
		setTimeout(()=>{h.style.textTransform="lowercase";},100);
}

function mrfun(){
	const music = new Audio('enginesound.mp3');
	music.play();
	var j=document.getElementById('sound').style.backgroundImage="url('sound.gif')";
	setTimeout(()=>{document.getElementById('sound').style.background="none";}, 12000);
	document.getElementById('soundPlay').style.animationPlayState="running";
	setTimeout(()=>{document.getElementById('soundPlay').style.animationPlayState="initial"}, 12000);
}


function chng(){
	var total = document.getElementById('ttl');
	var color = document.getElementById('carColor').value;
	var style = document.getElementById('carForm').value;
	var variant = document.getElementById('variant').value;
	var image = document.getElementById('req-imgg');
	if(color=="white"){
		image.src="corvwhite.jpg";
		total.innerHTML="$70,398";
	}
	if(color=="red"){
		image.src="corvred.jpg";
		total.innerHTML="$71,099";
	}
	if(color=="blue"){
		image.src="corvblue.jpg";
		total.innerHTML="$70,799";
	}
	if(color=="black"){
		image.src="corvblack.jpg";
		total.innerHTML="$72,998";
	}
	if(color=="white"&&style=="convertible"){
		image.src="corvwhiteconv.jpg";
		total.innerHTML="$90,489";
	}
	if(color=="blue"&&style=="convertible"){
		image.src="corvblueconv.jpg";
		total.innerHTML="$91,598";
	}
	if(color=="black"&&style=="convertible"){
		image.src="corvblackconv.jpg";
		total.innerHTML="$93,398";
	}
	if(color=="red"&&style=="convertible"){
		image.src="corvredconv.jpg";
		total.innerHTML="$90,398";
	}
	if(color=="red"&&style=="convertible"&&variant=="2"){
		image.src="corvredconv.jpg";
		total.innerHTML="$95,398";
	}
	if(color=="white"&&style=="convertible"&&variant=="2"){
		image.src="corvwhiteconv.jpg";
		total.innerHTML="$97,398";
	}	
	if(color=="white"&&style=="convertible"&&variant=="3"){
		image.src="corvwhiteconv.jpg";
		total.innerHTML="$103,398";
	}
	if(color=="red"&&style=="convertible"&&variant=="3"){
		image.src="corvredconv.jpg";
		total.innerHTML="$100,398";
	}

	if(color=="blue"&&style=="convertible"&&variant=="2"){
		image.src="corvblueconv.jpg";
		total.innerHTML="$96,398";
	}
	if(color=="blue"&&style=="convertible"&&variant=="3"){
		image.src="corvblueconv.jpg";
		total.innerHTML="$102,398";
	}
	if(color=="black"&&style=="convertible"&&variant=="2"){
		image.src="corvblackconv.jpg";
		total.innerHTML="$94,398";
	}
	if(color=="black"&&style=="convertible"&&variant=="3"){
		image.src="corvblackconv.jpg";
		total.innerHTML="$107,398";
	}


}

	console.warn("For any help , e-mail at : pjotsingh22@gmail.com");
	console.error("Instagram: prabhhh1772");