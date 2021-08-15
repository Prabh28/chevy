document.getElementsByClassName('chevy')[0].style.color="red";
document.getElementsByClassName('chevy')[1].style.color="white";
var namme = document.getElementById('namechng');
var desgname = document.getElementById('design-name');
desgname.innerHTML = "Henry C. Haga";
var img = document.getElementById('change-img');
var year = document.getElementById('prod-year');
year.innerHTML="2015-present";
var slide = document.getElementById('slider');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');
function deault(){
img.src="camaro.png";
namme.innerHTML="Camaro";
}
function chng1(){
    img.src="corvette.png";
    year.innerHTML="1996-present";
    namme.innerHTML="Corvette";
    desgname.innerHTML = "Zora Duntov";
}
function chng2(){
    img.src="camaro-2.png";
    year.innerHTML="2015-present";
    namme.innerHTML="Camaro";
    desgname.innerHTML = "Henry C. Haga";
}
function chng3(){
    img.src="camaro-3.png";
    year.innerHTML="2005-2015";
    namme.innerHTML="Camaro";
    desgname.innerHTML = "Henry C. Haga";
}
function chng4(){
    img.src="old-ford.png";
    year.innerHTML="1960-1970";
    namme.innerHTML="Camaro";
    desgname.innerHTML = "Jack Telnack";
}