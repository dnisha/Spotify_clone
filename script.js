console.log("Welcome to Spotify")
let songIndex = 0;
let audioElement  = new Audio('1.mp3')
let masterPlay = document.getElementById("masterplay")
let myProgressBar  = document.getElementById("myProgressBar")

let songs = [
    {
        songName:"Unstoppable",filePath:"song/1.mp3", coverPath:"covers/1.jpg"
    },
    {
        songName:"Unstoppable",filePath:"song/1.mp3", coverPath:"covers/1.jpg"
    },
    {
        songName:"Unstoppable",filePath:"song/1.mp3", coverPath:"covers/1.jpg"
    },
    {
        songName:"Unstoppable",filePath:"song/1.mp3", coverPath:"covers/1.jpg"
    },
    {
        songName:"Unstoppable",filePath:"song/1.mp3", coverPath:"covers/1.jpg"
    },
    {
        songName:"Unstoppable",filePath:"song/1.mp3", coverPath:"covers/1.jpg"
    }
]



// audioElementPlay()

// Handle play pause click
masterPlay.addEventListener('click',()=>{
    console.log("clicked")
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play
    }
})

//Listen to event
document.addEventListener('time',()=>{
    console.log('timeupdate')
})