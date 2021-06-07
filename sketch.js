var path;

var pathImg;



var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  roadImg = loadImage("images/Road.png");
  
}

function setup(){
  
createCanvas(1200,300);
// Moving background
road=createSprite(100,150);
road.addImage(roadImg);
road.velocityX = -5;

//creating mario running



  
}

function draw() {
  background(0);
  
  drawSprites();
  
  
  if(gameState===PLAY){
    
   distance = distance + Math.round(getFrameRate()/50);
   road.velocityX = -(6 + 2*distance/150);
  
   
  
   
  
  //code to reset the background
  if(road.x < 0 ){
    road.x = width/2;
  }
  
}
  
}