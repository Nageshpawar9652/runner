var Boy, Boy_running, Boy_collided;
var path, pathImage;
function preload(){
  //pre-load images
  Boy_running = loadAnimation("Runner-1.png","Runner-2.png")
  Boy_collided = loadImage("path.png")
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,600);
 
  

// create path sprite here
path = createSprite(200,160,20,50);
path.addImage("path",pathImage);
path.x = path.width /2;
path.velocityY = +4;
 //create sprites here
Boy = createSprite(150,400,20,20);
  Boy.addAnimation("running",Boy_running)
  Boy.scale = 0.05;
} 

function draw() {
  background(220);

Boy.velocityY = Boy.velocityY -0

if(path.y>400){
path.y = height/2

}




  drawSprites()
}
