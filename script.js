let video = document.querySelector("video")
let botonPlay = document.querySelector("#play");
let botonPause = document.querySelector("#pause");
let displayVideo = document.querySelector(".display");
let mostrarDisplay;

function formatoTiempo(datos) {
    var dia = new Date(datos * 1000);
    var hh = dia.getUTCHours();
    var mm = dia.getUTCMinutes();
    var ss = dia.getSeconds();
    if (hh > 12) { hh = hh - 12; }
    if (hh < 10) { hh = "0" + hh; }
    if (mm < 10) { mm = "0" + mm; }
    if (ss < 10) { ss = "0" + ss; }
    // return hh + ":" + mm + ":" + ss;
    return mm + ":" + ss;
};


botonPlay.addEventListener("click", ()=>{
    video.play();
    let duracion = formatoTiempo(video.duration);
    mostrarDisplay = setInterval( () => { 
    let segundos = formatoTiempo(video.currentTime);
    displayVideo.textContent = segundos + " | " + duracion;},1000);})

botonPause.addEventListener("click", ()=>{
    video.pause();
    clearInterval(mostrarDisplay)

})