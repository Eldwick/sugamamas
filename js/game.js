$(document).ready(function(){
  var canvas = document.getElementById("game"),
        ctx = canvas.getContext("2d");

  var girl = new Image();

  girl.src = "images/girl.png";

  var keysDown = {};

  addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
  }, false);

  addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
  }, false);

  // // //New update with keyboard controls
  var x = 0, y = 0;

  var update = function () {
    if (38 in keysDown) { // Player holding up
      y -= 3;
    }
    if (40 in keysDown) { // Player holding down
      y += 3;
    }
    if (37 in keysDown) { // Player holding left
      x -= 3;
    }
    if (39 in keysDown) { // Player holding right
      x += 3;
    }
    ctx.fillStyle = "rgb(255,255,255)";  
    ctx.fillRect(0, 0, 300, 255);
    ctx.drawImage(girl, x, y);
    requestAnimationFrame(update);
  }
  update();
})