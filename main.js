let tnc=document.getElementById("info");
let mnf=document.getElementById("form");
let nav=document.getElementById("nav");
let oth=document.getElementById("other");
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
function othcol(){
    oth.disabled = false;
}
function submitcustom(){
    if(subbmited){
        if(oth.disabled)
        {
            window.location='Payment/PaymentGehuGeu.html';
        }
        else{
            window.location='Payment/PaymentOther.html';
        }
    }
}