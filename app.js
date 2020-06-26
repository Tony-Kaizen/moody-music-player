// Chose your mood buttons
let bg = document.querySelector('main');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('happy')) {
      bg.style.backgroundColor = 'yellow';
      // song.play();

    }
    if (styles.contains('mellow')) {
      bg.style.backgroundColor = 'orange';

    }
    if (styles.contains('energetic')) {
      bg.style.backgroundColor = 'limegreen';

    }
    if (styles.contains('sad')) {
      bg.style.backgroundColor = 'blue';

    }
    if (styles.contains('angry')) {
      bg.style.backgroundColor = 'red';

    }
    if (styles.contains('irritable')) {
      bg.style.backgroundColor = 'grey';

    }
  })
});

// btns.forEach(btn => {
//   btn.addEventListener('click', function () {
//     console.log('this works');
//   })
// });

/*
====================================================================================
====================================================================================
*/


//MUSIC PLAYER
music_name = "Motion.mp3"
let play_btn = document.querySelector("#play");
let prev_btn = document.querySelector("#pre");
let next_btn = document.querySelector("#next");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img")
let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio();
window.onload = playSong;

function playSong() {
  song.src = music_name;
  console.log(song)


  play_btn.addEventListener('click', function () {
    if (!isPlaying) {
      song.play();
      isPlaying = true;
      total_time = song.duration;
      range.max = total_time;
      play_img.src = "/photos/pause.png";
    } else {
      song.pause();
      isPlaying = false;
      play_img.src = "/photos/play.png";
    }
    song.addEventListener('ended', function () {
      song.currentTime = 0
      song.pause();
      isPlaying = false;
      range.value = 0;
      play_img.src = "/photos/play.png";
    })
    song.addEventListener('timeupdate', function () {
      range.value = song.currentTime;
    })
    range.addEventListener('change', function () {
      song.currentTime = range.value;
    })

  })
}