

var aa = document.getElementById('sv');
var ab = document.getElementById('sv1');
var ac = document.getElementById('sj');
var ad = document.getElementById('sj1');
var ae = document.getElementById('sj2');
var af = document.getElementById('st');
var ag = document.getElementById('st1');

function muFunction(){
    document.getElementsByClassName('car-type')[0].style.background="#152238";
    document.getElementsByClassName('car-type')[1].style.background="rgba(57, 78, 112, 0.3)";
    document.getElementsByClassName('car-type')[2].style.background="rgba(57, 78, 112, 0.3)";
    aa.style.display="block";
    ab.style.display="block";
    ac.style.display="none";
    ad.style.display="none";
    ae.style.display="none";
    af.style.display="none";
    ag.style.display="none";
}

function sdj(){
    document.getElementsByClassName('car-type')[1].style.background="#152238";
    document.getElementsByClassName('car-type')[0].style.background="rgba(57, 78, 112, 0.3)";
    document.getElementsByClassName('car-type')[2].style.background="rgba(57, 78, 112, 0.3)";
    aa.style.display="none";
    ab.style.display="none";
    ac.style.display="block";
    ad.style.display="block";
    ae.style.display="block";
    af.style.display="none";
    ag.style.display="none";
}

function Gui(){
    document.getElementsByClassName('car-type')[2].style.background="#152238";
    document.getElementsByClassName('car-type')[0].style.background="rgba(57, 78, 112, 0.3)";
    document.getElementsByClassName('car-type')[1].style.background="rgba(57, 78, 112, 0.3)";
    aa.style.display="none";
    ab.style.display="none";
    ac.style.display="none";
    ad.style.display="none";
    ae.style.display="none";
    af.style.display="inline";
    ag.style.display="inline";
}