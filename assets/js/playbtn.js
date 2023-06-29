

// var audio = document.getElementById("myAudio"); 
// // alert("Hola");
// function playAu() { 
//     audio.play(); 
  
// } 

// function pauseAu() { 
//     audio.pause(); 
// } 

//funciona
/*
const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});
*/

const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.src = "assets/audio/intro.mp3";
    audio.play();

    // Esperar a que termine de reproducir el audio de introducción
    audio.addEventListener("ended", () => {
      audio.src = "https://cp9.serverse.com/proxy/perfor?mp=/stream;";
      audio.play();
    });
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});





  var chatbox = document.getElementById('fb-customer-chat');
  chatbox.setAttribute("page_id", "109794627453424");
  chatbox.setAttribute("attribution", "biz_inbox");



  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v15.0'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
