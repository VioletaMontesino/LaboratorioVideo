

var elVideo = document.getElementById("video1");
let btnPlay = document.getElementById("play");

btnPlay.innerHTML = "Reproducir \u23EF"

function Reproducir(){

    
    if (elVideo.paused) {
        elVideo.play();

        btnPlay.innerHTML = "Pausar \u23F8";
    }   
    else {
        elVideo.pause();
        btnPlay.innerHTML = "Reproducir \u23EF";
    }
}

function Stop(){
    elVideo.pause();
    elVideo.currentTime = 0;
}       

function BajarVolumen(){
    console.log(elVideo.volume)
    if(elVideo.volume > 0.1) {

        elVideo.volume -= 0.1;
    }
}

function SubirVolumen(){
    console.log(elVideo.volume)
    if(elVideo.volume < 1) {
        elVideo.volume += 0.1;
    }
}
