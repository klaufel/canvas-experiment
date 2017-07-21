

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');  

ctx.fillStyle = "#ff0000";
ctx.fillRect(50, 50, 100, 100);

ctx.fillStyle = "#00ff00";
ctx.fillRect(350, 50, 100, 100);

ctx.clearRect(60, 60, 80, 80);

ctx.strokeRect(200, 50, 100, 100);



console.log(canvas);
console.log(ctx);





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