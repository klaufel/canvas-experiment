var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');  
draw();

console.log(canvas);
console.log(ctx);

function draw() {



  // Head
  ctx.beginPath();  
  ctx.fillStyle = "yellow";
  ctx.arc(250, 250, 200, 0, 2*Math.PI);
  ctx.fill();
  ctx.closePath();

 

  // Mouth
  ctx.beginPath();  
  ctx.fillStyle = "black";
  ctx.arc(250, 250, 150, 0, Math.PI);
  ctx.fill();
  ctx.closePath();
 

  // Eyes
  ctx.beginPath();  
  ctx.fillStyle = "black";
  ctx.arc(175, 150, 30, 0, 2*Math.PI);
  ctx.arc(325, 150, 30, 0, 2*Math.PI);
  ctx.fill();
  ctx.closePath();

  // Eyes
  ctx.beginPath();  
  ctx.fillStyle = "white";
  ctx.rect(160, 250, 80, 40);
  ctx.rect(260, 250, 80, 40);
  ctx.fill();
  ctx.closePath();

 // Noise
  ctx.beginPath();  
  ctx.fillStyle = "black";
  ctx.rect(235, 185, 30, 40);
  ctx.fill();
  ctx.closePath();

}





/*
var w = canvas.width;
var h = canvas.height;

var mouse = {
  x: 0,
  y: 0
};

canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  draw('move');
  //console.log("X: " + mouse.x + " / Y: " + mouse.y);
});



function draw(mouseaction) {
  return false;
}
*/