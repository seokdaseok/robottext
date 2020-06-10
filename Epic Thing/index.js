
var textBox = document.querySelector(".textbox");
var replyBox = document.querySelector(".replybox");

replyBox.addEventListener("copy", function() {
  alert("text has been copied, it is now pasted into the textbox automatically.")
  textBox.innerHTML = replyBox.innerHTML;
})

textBox.addEventListener("click", function() {
  var randomNumber = Math.floor((Math.random() * 7) + 1)
  var yourText = prompt("Tell the robot something. Do not type nothing or else you will have to refresh.");
  textBox.innerHTML = yourText;

  switch (randomNumber) {
    case 1:
    replyBox.innerHTML = "Really, come on why you gotta do this."
      break;

    case 2:
    replyBox.innerHTML = "Hahaha, that's so funny!"
      break;

    case 3:
    replyBox.innerHTML = "Ok? That just doesn't make sense."
      break;

    case 4:
    replyBox.innerHTML = "No you!"
      break;

    case 5:
    replyBox.innerHTML = "Bruh, just stop it man."
      break;

    case 6:
    replyBox.innerHTML = "Oh my god, I'm so sorry."
      break;

    case 7:
    replyBox.innerHTML = "Oh you know what you did, stop hiding it!"
      break;
    default:

  };


});

function animation() {
  for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".button")[i].addEventListener("mousedown", function () {

      var button = this;

      button.classList.add("press");

      setTimeout(function() {
        button.classList.remove("press");
      }, 300)

    });
  };
}

animation();

document.querySelectorAll(".button")[0].addEventListener("mousedown", function () {
  var bruh = new Audio("sounds/bruh.mp3");
  bruh.play();
});

document.querySelectorAll(".button")[1].addEventListener("mousedown", function () {
  var rlly = new Audio("sounds/really.mp3");
  rlly.play();
});

document.querySelectorAll(".button")[2].addEventListener("mousedown", function () {
  var nope = new Audio("sounds/no.mp3")
  nope.play();
});
