let btn=document.querySelector('button');
btn.style.marginBottom="5px";
let seconde=10;
let timer;
function decompte() {
    if (seconde==0){
       stop()
    }else {
        document.body.innerHTML+=seconde+"</br>";
    }
    seconde -=1;
}
function start() {
    timer=setInterval(decompte,1000);
}
function stop() {
    clearInterval(timer);
    document.body.append("Stop!");
}
btn.addEventListener('click',start);