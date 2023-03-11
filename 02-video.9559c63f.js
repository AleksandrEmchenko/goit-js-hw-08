!function(){var e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));o.on("play",(function(e){o.addEventListener("onPlay")})),localStorage.setItem("videoplayer-current-time",currentTime)}();
//# sourceMappingURL=02-video.9559c63f.js.map
