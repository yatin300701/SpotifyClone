
//Initailise variables
let songIndex=0
let audio = new Audio('lehenga.mp3')
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar")
let firstSong = document.getElementById("autoFirstPlay")

let song = [
    { songName:'Lehenga',filePath:'asjcsa',coverPath:'kdscc/jpg',sid:1},
    { songName:'Let Me Love You',filePath:'asjcsa',coverPath:'kdscc/jpg',sid:2},
    { songName:'What Do You Mean',filePath:'asjcsa',coverPath:'kdscc/jpg',sid:3},
    { songName:'Paniosa',filePath:'asjcsa',coverPath:'kdscc/jpg',sid:4},
    { songName:'Isqk Tera',filePath:'asjcsa',coverPath:'kdscc/jpg',sid:5},
    { songName:'bkdsbj',filePath:'asjcsa',coverPath:'kdscc/jpg',sid:6},
    { songName:'bkdsbj',filePath:'asjcsa',coverPath:'kdscc/jpg',sid:7}

]


//audio play
masterPlay.addEventListener('click',()=>{
    if(audio.paused||audio.currentTime<=0){
        audio.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        firstSong.classList.remove('fa-play-circle')
        firstSong.classList.add('fa-pause-circle')

    }
    else{
        audio.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        firstSong.classList.remove('fa-pause-circle')
        firstSong.classList.add('fa-play-circle')


    }
})


// progressBar
audio.addEventListener('timeupdate',()=>{
    progress = parseInt(audio.currentTime/audio.duration *100)
    myProgressBar.value=progress;
})
//play-pause buttons
const makeAllplays= () =>{
    Array.from(document.getElementsByClassName("systemy")).forEach((element)=>{
        element.classList.remove('fa-play-circle')
       
       element.classList.add('fa-play-circle')
    })

}

const makeallpause= () =>{
    Array.from(document.getElementsByClassName("systemy")).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
       
       element.classList.add('fa-play-circle')
    })

}

Array.from(document.getElementsByClassName("systemy")).forEach((element)=>{

    element.addEventListener('click',()=>{
        if(audio.paused||audio.currentTime<=0){
            songIndex=song.sid;
            makeAllplays();
            audio.play();
            masterPlay.classList.remove('fa-play-circle')
            masterPlay.classList.add('fa-pause-circle')
            element.classList.remove('fa-play-circle')
            element.classList.add('fa-pause-circle')
        }
        else{
            audio.pause();
            makeallpause();
            masterPlay.classList.remove('fa-pause-circle')
            masterPlay.classList.add('fa-play-circle')
            element.classList.remove('fa-pause-circle')
            audio.currentTime=0;
            element.classList.add('fa-play-circle')
        }
    })
    
})

//forward and backword
document.getElementById("prev").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audio.currentTime=0;

    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    audio.play();


})
document.getElementById("forward").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audio.currentTime=0;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    audio.play();


})