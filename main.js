canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
background_image="mars.jpg"
rover_image="rover.png"
function add (){
   background_imgTag=new Image();
   background_imgTag.onload=uploadbackground;
   background_imgTag.src=background_image
}
function uploadbackground(){
ctx.drawImage(background_imgTag,0,0,canvas.witdth,canvas.height);
}
function add (){
   rover_imgTag.onload=uploadrover;
    rover_imgTag.src=background_image;
}
function uploadrover (){
    ctx=drawImage(rover_imgTag,0,0,x,y,100,100)
    rover_imgTag = new Image();
}