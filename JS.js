//<i class="fa fa-pause-circle-o" aria-hidden="true"></i>
var songsList = ['BELIVER.mp3', 'BEST OF ME.mp3', 'CRADLES.mp3', 'DESTINY.mp3', 'DESPACITO.mp3', 'FIGHT BACK.mp3', 'RUMORS.mp3', 'TILL I COLLAPSE.mp3', 'UNSTOPPABLE.mp3', 'WHATEVER IT TAKES.mp3'];
var poster = ['BELIVER.jpg', 'BEST OF ME.jpg', 'CRADLES.jpg', 'DESTINY.jpg', 'DESPACITO.jpg', 'FIGHT BACK.jpg', 'RUMORS.jpg', 'TILL I COLLAPSE.jpg', 'UNSTOPPABLE.jpg', 'WHATEVER IT TAKES.jpg'];
var fill = document.getElementById('fill');
var handler = document.getElementById('handler');
var song = new Audio();
var currentSong = 0;
var displayImg = document.getElementById('displayImg');
var like1 = document.getElementById('likeBtn');

window.onload = playSong();

function playSong() {    
    song.src = songsList[currentSong];
    song.play();
}
if(song.currentTime == song.duration){
    next();
}
var play = `<i class="fa fa-play-circle play" aria-hidden="true" style="font-size:50px;">`;
var pause = `<i class="fa fa-pause-circle-o" aria-hidden="true" style="font-size:50px;" position: absolute;
top: 82%;
left: 42%;
background: #091921;
border-radius: 50%;
box-shadow: 0px -15px 15px rgba(255, 255, 255, 0.03),
            inset 0px -15px 15px rgba(255, 255, 255, 0.03),
            0px 15px 15px rgba(0, 0, 0, 0.3),
            inset 0px 15px 15px rgba(0, 0, 0, 0.3) ;
border: none;
cursor: pointer;></i>`;
var playBtn = document.getElementById('play');
function playOrPause(){
    if (song.paused) {
        song.play();
        playBtn.innerHTML = pause;
    } else {
        song.pause();
        playBtn.innerHTML = play;
    }
}

/*song.addEventListener('timeupdate', function () {
    var pos = song.currentTime / song.duration;
    fill.style.width = pos * 100 + '%';
    handler.style.marginLeft = pos * 100 + '%';
});*/

function next() {
    currentSong += 1;
    if (currentSong >= songsList.length) {
        currentSong = 0;
    }
    playSong();
    playBtn.innerHTML = pause;
    displayImg.src = poster[currentSong];
}

function prev() {
    currentSong -= 1;
    if (currentSong < 0) {
        currentSong = songsList.length - 1;
    }
    playSong();
    playBtn.innerHTML = pause;
    displayImg.src = poster[currentSong];
};
var muteImg = document.getElementById('muteImg');
var muteBtn = document.getElementById('mute');
function mute() {
    if (song.muted == false) {
        song.muted = true;
        muteImg.src = 'Mute.png';
    }
    else {
        song.muted = false;
        muteImg.src = 'Unmute.png';
    }
};

var availSongs = document.getElementById('availSongs');
let str = '';
for (i = 0; i < songsList.length; i++) {
    str += `<button id="${i}" class= "availSongsBtn" onclick="functionClicked(this.id)" style="background-color:#091921; cursor: pointer;padding-top:10px;padding-bottom:40px; color: purple; border:none; height:30px; width:300px" >
            <li >${songsList[i]}</li>
            </button>`           
}
availSongs.innerHTML = str;
console.log(availSongs);
//var search = document.getElementById('search');
function functionClicked(index){
    let selectedSong = index;
    //console.log(selectedSong);
    currentSong = selectedSong;
    playSong();
    playBtn.innerHTML = pause;
    displayImg.src = poster[currentSong];    
}
var checkbox = document.getElementById('bars');
function bars(){
    let heading = document.getElementById('heading');
    let display = document.getElementById('availSongs');
    if(checkbox.checked == true){
    heading.style.display = 'block';
    display.style.display = 'block';
    }
    if(checkbox.checked == false){
        heading.style.display = 'none';
        display.style.display = 'none';
        }
};

//var favSongList = [];

function like(){
    if(like1.checked == true){
        document.getElementById("like").style.color = "red";
        //favSongList += songsList[currentSong];
        //console.log(favSongList);
    }
    if(like1.checked == false){
        document.getElementById("like").style.color = "black";
        //favSongList -= songsList[currentSong];
        //console.log(favSongList);
    }
}

function repeatSong(){
    song.currentTime = 0;
    playSong();
}

var seekBar = document.getElementById('myRange');
var sliderFill = document.getElementById('sliderFill');

seekBar.addEventListener("change", function() {
    //Calculate new time
    var newTime = song.duration * (seekBar.value / 100);
    song.currentTime = newTime;
});

song.addEventListener('timeupdate',function(){
    var pos = (song.currentTime / song.duration);
    seekBar.value = pos * 100;
    sliderFill.style.width = pos * 96 + '%';
});

seekBar.addEventListener("mousedown", function() {
    song.pause();
});

seekBar.addEventListener("mouseup", function() {
    song.play();
});
var fav1 = document.getElementById('menuBtn');
function fav(){
    let favs = document.getElementById('favs');
    let favSongs = document.getElementById('favSongs');
    if(fav1.checked == true){
            favs.style.display = 'block';
            favSongs.style.display = 'block';
        }
        if(fav1.checked == false){
            favs.style.display = 'none';
            favSongs.style.display = 'none';
        }
}