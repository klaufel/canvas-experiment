var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');  

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var mouse = {
  x: 0,
  y: 0
};

var myx = 50;
var myy = 200;
var myr = 50;

var mycolor = 'rgba(255, 255, 255, 0.5)';

canvas.addEventListener('mousemove', drawClick);

function drawClick() {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  draw();
}


var alpha = 0;          /// current alpha
var delta = 0.5;        /// delta value = speed

function draw() {

  ctx.beginPath();
  ctx.globalAlpha = .01;


  ctx.shadowBlur = 40;
  ctx.shadowColor = "white";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  //ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = mycolor;
  ctx.arc(mouse.x - 10, mouse.y - 10, myr, 0, 2*Math.PI, false);
  ctx.fill();
  ctx.closePath();


      

}




// Gradient
var grd = ctx.createLinearGradient(0, 0, canvasWidth, 0);
grd.addColorStop(0, "#00dcee");
grd.addColorStop(.5,"#3d45f1");
grd.addColorStop(1, "#5b04bf");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, canvasWidth, canvasHeight);
