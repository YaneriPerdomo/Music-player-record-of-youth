"use strict";
console.log("New Proyect");
console.log("New Proyect");
document.addEventListener("click", (e) => {
    let $audio_one:any = document.querySelector("audio");
  
    let $list:any = document.querySelectorAll("li");
    let $list_1:any = document.querySelector("ul > li:nth-child(1)");
    let $list_2:any = document.querySelector("ul > li:nth-child(2)")
    let $list_3:any = document.querySelector("ul > li:nth-child(3)")
    let $list_4:any = document.querySelector("ul > li:nth-child(4)")
    let $list_5:any = document.querySelector("ul > li:nth-child(5)")
    let $list_6:any = document.querySelector("ul > li:nth-child(6)")
    let $list_7:any = document.querySelector("ul > li:nth-child(7)")
    let $list_8:any = document.querySelector("ul > li:nth-child(8)");
    let $list_9:any = document.querySelector("ul > li:nth-child(9)")
    let $list_10:any = document.querySelector("ul > li:nth-child(10)")
    let $list_11:any = document.querySelector("ul > li:nth-child(11)")
    let $list_12:any = document.querySelector("ul > li:nth-child(12)")
    $list.forEach((element:any) => {
        element.style.background = "none"
    });


    if (e.target.matches("ul > li:nth-child(1)")) {
        $audio_one.src = "./song/01-seungkwan-seventeen-seunggwan-sebeuntin-go.mp3";
        $list_1.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(2)")) {
        $audio_one.src = "./song/02-chung-ha-ceongha-youre-in-my-soul.mp3";
        $list_2.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(3)")) {
        $audio_one.src = "./song/03-baekhyun-exo-every-second-.mp3";
        $list_3.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(4)")) {
        $audio_one.src = "./song/04-wheein-shine-on-you-record-of-youth.mp3";
        $list_4.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(5)")) {
        $audio_one.src = "./song/kim-jae-hwan-gimjaehwan-what-if-record-of-youth.mp3";
        $list_5.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(6)")) {
        $audio_one.src = "./song/bobby-spotlight.mp3";
        $list_6.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(7)")) {
        $audio_one.src = "./song/leehi-ihai-brave-enough.mp3";
        $list_7.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(8)")) {
        $audio_one.src = "./song/y2meta.net_256kbps-mv-j-rabbit-jeiraebis-just-you-neoro-gadeughae-record-of-youth-ceongcungirog-ost.mp3";
        $list_8.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(9)")) {
        $audio_one.src = "./song/y2meta.net_256kbps-mv-sejeong-sejeong-what-my-heart-says-nae-maeumi-geureohdae-record-of-youth-ceongcungirog-ost (1).mp3";
        $list_9.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(10)")) {
        $audio_one.src = "./song/y2meta.net_256kbps-mv-xani-sanhyi-its-ok-because-its-you-neon-geuraedo-dwae-record-of-youth-ceongcungirog-ost.mp3";
        $list_10.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(11)")) {
        $audio_one.src = "./song/y2meta.net_256kbps-janet-suhh-janesseo-open-door-record-of-youth-ceongcungirog-ost.mp3";
        $list_11.style.background = "rgb(191,131, 71)"
    }
    if (e.target.matches("ul > li:nth-child(12)")) {
        $audio_one.src = "./song/y2meta.net_192kbps-still-dreaming.mp3";
        $list_12.style.background = "rgb(191,131, 71)"
    }
});


const audio = document.querySelector('audio'),
    songLength = document.getElementById('SongLength'),
    currentTime = document.getElementById('CurrentSongTime');

const calculateTime = (secs) =>{
    const minutes = Math.floor(secs / 60),
        seconds = Math.floor(secs % 60),
        returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () =>{
    songLength.innerHTML = calculateTime(audio.duration);
}

if(audio.readyState > 0){
    displayDuration();
    currentTime.innerHTML = calculateTime(audio.currentTime);
}else{
    audio.addEventListener('loadedmetadata', () =>{
        displayDuration();
    })
}

audio.ontimeupdate = function(){
    currentTime.innerHTML = calculateTime(audio.currentTime);
    setProgress();
}

function setProgress(){
    let percentage = (audio.currentTime / audio.duration) * 100;
    document.querySelector('.progress').style.width = percentage + '%'; 
}

//Audio Controls
const playPause = document.getElementById('PlayPause'),
    plus10 = document.getElementById('Plus10'),
    back10 = document.getElementById('Back10');

playPause.addEventListener('click', ()=>{
    if(audio.paused){
        playPause.src = '../img/pause.svg';
        audio.play();
    }else{
        playPause.src = '../img/Play.svg';
        audio.pause();
    }
})

plus10.addEventListener('click', ()=>{
    audio.currentTime +=10;
})

back10.addEventListener('click', ()=>{
    audio.currentTime -=10;
})