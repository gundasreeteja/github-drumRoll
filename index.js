for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    util(this.innerHTML);
    animate(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  util(event.key);
  animate(event.key);
});

function util(letter) {
  switch (letter) {
    case "w":
      audioPlay("./sounds/drum1.mp3");
      break;
    case "a":
      audioPlay("./sounds/drum2.mp3");
      break;
    case "s":
      audioPlay("./sounds/drum3.mp3");
      break;
    case "d":
      audioPlay("./sounds/drum4.mp3");
      break;
    case "j":
      audioPlay("./sounds/snare.mp3");
      break;
    case "k":
      audioPlay("./sounds/kick.mp3");
      break;
    case "l":
      audioPlay("./sounds/crash.mp3");
      break;
  }
}

function audioPlay(fileLocation) {
  new Audio(fileLocation).play();
}

function animate(key) {
  var btn = document.querySelector("." + key);
  btn.classList.add("pressed");
  setTimeout(function () {
    btn.classList.remove("pressed");
  }, 200);
}
