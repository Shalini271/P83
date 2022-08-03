var canvas=document.getElementById("myCanvas");
var mouseEvent="";
ctx=canvas.getContext("2d");
currentMouseX=0;
currentMouseY=0;
lastMouseX=0;
lastMouseY=0;
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
console.log(e);
currentMouseX=e.clientX-canvas.offsetLeft;
currentMouseY=e.clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.moveTo(lastMouseX,lastMouseY);
ctx.lineTo(currentMouseX,currentMouseY);
lastMouseX=currentMouseX;
lastMouseY=currentMouseY;
ctx.stroke();
}