var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');  


console.log(canvas);
console.log(ctx);

var rectWidth = 50;

for(var x = 0; x < 10; x++) {
  ctx.fillStyle = 'rgb('+ Math.ceil(x*20)+', 0, 0)';
  ctx.fillRect (25+(x*rectWidth), 25, rectWidth, rectWidth);
}

for(var x = 0; x < 10; x++) {
  ctx.fillStyle = 'rgb(0, '+ Math.ceil(x*20)+', 0)';
  ctx.fillRect (25+(x*rectWidth), 100, rectWidth, rectWidth);
}

for(var x = 0; x < 10; x++) {
  ctx.fillStyle = 'rgb(0, 0, '+ Math.ceil(x*20)+')';
  ctx.fillRect (25+(x*rectWidth), 175, rectWidth, rectWidth);
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