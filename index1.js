var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var char = this.innerHTML;
    makesound(char);
    Animation(char);

  });

}

document.addEventListener("keypress",function(event)
{
makesound(event.key);
Animation(event.key);
});
function makesound( char)
{
  switch (char) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    default:

  }
}

function Animation(char)
{
var activebutton=document.querySelector("."+char);
activebutton.classList.add("pressed");
setTimeout(function(){
  activebutton.classList.remove("pressed");
},100);
}
