let tnc=document.getElementById("info");
let mnf=document.getElementById("form");
let nav=document.getElementById("nav");
function nxt(){
    tnc.style.display="none";
    mnf.style.display="block";
}
function shnav() {
    console.count(nav.style.display);
    if (nav.style.display=="inline") {
        nav.style.display="none";
    } else {
        nav.style.display="inline";
    }
    
}