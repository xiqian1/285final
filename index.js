const canvas=document.querySelector(".board");

const context = canvas.getContext("2d");

let color=document.getElementsByClassName("color")[0];

let sizeValue=document.querySelector(".size-value");
let rangeValue=document.querySelector(".range-value");

let eraser=document.querySelector(".eraser");

let clear=document.querySelector(".clear");

let download=document.querySelector(".download");

download.addEventListener("click", function() {
    let canvasDataURL = canvas.toDataURL();
    let a = document.createElement('a');
    a.href = canvasDataURL;
    a.download = "drawing";
    a.click();
  });

clear.addEventListener('click', function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
});

eraser.addEventListener("click", event=>{
    context.strokeStyle ="white";
})

sizeValue.addEventListener("input", event=>{
    let num=event.target.value;
    rangeValue.innerHTML=num;
    context.lineWidth=num;
})

color.addEventListener("click", function(event) {
    context.strokeStyle = event.target.value;
});
let x = 0, y = 0;
let isMouseDown = false;

context.strokeStyle ="black";
context.lineCap = "round";

canvas.addEventListener("mousedown",function(event) {
    setMouseCoordinates(event);
    isMouseDown = true;
    
    context.beginPath();
    context.moveTo(x, y);
});
canvas.addEventListener("mouseup", function(event) {
    setMouseCoordinates(event);
    isMouseDown = false;
});
canvas.addEventListener("mousemove", function(event) {
    setMouseCoordinates(event);

    if(isMouseDown){
      context.lineTo(x, y);
      context.stroke();
    }
});

function setMouseCoordinates(event) {
    x = event.clientX - canvas.offsetLeft;
    y = event.clientY - canvas.offsetTop;
}