document.addEventListener('DOMContentLoaded', function() {
console.log("welcome");
let songindex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let MyProgressBar = document.getElementById("MyProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
audioElement.loop = true;
let songs = [
  {
    songName: "Diavolo Theme",
    filePath: "songs/1.mp3",
    coverPath: "covers/Screen Shot 2023-07-06 at 3.08.52 PM.png",
    videoPath: "videos/1_exported.mp4",
  },
  {
    songName: "Akatsuki Theme",
    filePath: "songs/2.mp3",
    coverPath: "covers/Screen Shot 2023-07-07 at 2.15.27 PM.png",
    videoPath: "videos/2(1).mp4",
  },
  {
    songName: "Ultra Instinct Theme",
    filePath: "songs/3.mp3",
    coverPath: "covers/Screen Shot 2023-07-07 at 2.24.14 PM.png",
    videoPath: "videos/3.mp4",
  },
  { songName: "White Tee", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", videoPath: "videos/4.mp4",  },
  { songName: "Afterdark", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", videoPath: "videos/5.mp4" },
  {
    songName: "Close Eyes",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
    videoPath: "videos/6.mp4"
  },
  {
    songName: "Patrick Bateman",
    filePath: "songs/7.mp3",
    coverPath: "193.jpg",
    videoPath: "videos/7.mp4"
  },
  {
    songName: "Metamorphosis",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
    videoPath: "videos/8.mp4"
  },
  {
    songName: "Its About Drive",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
    videoPath: "videos/9.mp4"
  },
  {
    songName: "Rick Roll",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
    videoPath: "videos/11.mp4"
  },
  {
    songName: "Mr Beast",
    filePath: "songs/Mr Beast phonk - SXCREDMANE (Phonk Remix) (TIKTOK SONG).mp3",
    coverPath: "https://i.scdn.co/image/ab67616d00001e0279d7d5f6f673e22cb9747dbb",
    videoPath: "videos/Mr_Beast_phonk_-_SXCREDMANE_(Phonk_Remix)_(TIKTOK_SONG)_exported.mp4",
  },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  MyProgressBar.value = progress;
});

MyProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (MyProgressBar.value * audioElement.duration) / 100;
});

const updateBackgroundVideo = (videoUrl) => {
  backgroundVideo.src = videoUrl;
  backgroundVideo.load();
  backgroundVideo.play();
};


// Your song and player setup

// Track if the music is playing or paused
let isMusicPlaying = false;

// Function to play or pause the background video based on the music state
const toggleBackgroundVideo = () => {
  const backgroundVideo = document.getElementById('backgroundVideo');
  if (isMusicPlaying) {
    backgroundVideo.play();
  } else {
    backgroundVideo.pause();
  }
};

// Update the music play/pause status when the audio is played or paused
audioElement.addEventListener('play', () => {
  isMusicPlaying = true;
  toggleBackgroundVideo();
});

audioElement.addEventListener('pause', () => {
  isMusicPlaying = false;
  toggleBackgroundVideo();
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songindex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = songs[songindex].filePath;
    masterSongName.innerText = songs[songindex].songName;
    updateBackgroundVideo(songs[songindex].videoPath); // Change the background video
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  });
});

document.getElementById('next').addEventListener('click', () => {
  if (songindex >= 10) {
    songindex = 0;
  } else {
    songindex += 1;
  }

  audioElement.src = songs[songindex].filePath;
  masterSongName.innerText = songs[songindex].songName;
 // Change the background video
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  updateBackgroundVideo(songs[songindex].videoPath);
});

document.getElementById('previous').addEventListener('click', () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }

  audioElement.src = songs[songindex].filePath;
  masterSongName.innerText = songs[songindex].songName;
 // Change the background video
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  updateBackgroundVideo(songs[songindex].videoPath);
});
}),
