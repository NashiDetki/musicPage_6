
// let pages;

const buttonPlay = document.querySelector(".button_play");
console.log(buttonPlay);
const audio = document.querySelector(".audio")
console.log(audio)

buttonPlay.addEventListener('click', ()=>{
    if (audio.paused){
        audio.src = './track.mp3';
        audio.play();
        audio.valume = 0.2;
        console.log('play');
    } else {
        audio.pause();
        console.log('pause');
    }
})