

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');  
draw();

console.log(canvas);
console.log(ctx);

function draw() {

  // Rect 01
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(50, 50, 100, 100);
  ctx.clearRect(60, 60, 80, 80);
  ctx.save();

  // Rect 02
  ctx.fillStyle = "#00ff00";
  ctx.fillRect(350, 50, 100, 100);
  ctx.save();

  // Rect 03
  ctx.strokeRect(200, 50, 100, 100);
  ctx.save();


  // Setup path




  ctx.shadowBlur = 80;
  ctx.shadowColor = "orange";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0; 


  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.lineTo(150, 200);
  ctx.lineTo(100, 300);
  ctx.lineTo(200, 300);
  ctx.fill();
  ctx.save();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.lineTo(100, 300);
  ctx.lineTo(50, 400);
  ctx.lineTo(150, 400);
  ctx.fill();
  ctx.save();
  ctx.closePath();



  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.lineTo(200, 300);
  ctx.lineTo(150, 400);
  ctx.lineTo(250, 400);
  ctx.fill();
  ctx.save();
  ctx.closePath();




  ctx.beginPath();
  
  ctx.shadowColor = "red";
  ctx.fillStyle = "green";
  ctx.arc(400, 400, 50, 0, 2*Math.PI);
  ctx.fill();
  ctx.closePath();
 



  // Rect 04
  ctx.fillStyle = "#ff0000";
  
  ctx.shadowBlur = 10;
  ctx.shadowColor = "#000000";
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10; 
  ctx.fillRect(500, 50, 100, 100);
  ctx.save();



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