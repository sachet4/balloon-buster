var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  //loading the image of the background
  backgroundImage = loadImage("background0.png");
  
   //loading the image of the arrow
  arrowImage = loadImage("arrow0.png");
  
   //loading the image of the bow
  bowImage = loadImage("bow0.png");
  
   //loading the image of the red balloon
  red_balloonImage = loadImage("red_balloon0.png");
  
  //loading the image of the green balloon
  green_balloonImage = loadImage("green_balloon0.png");
  
  //loading the image of the pink balloon
  pink_balloonImage = loadImage("pink_balloon0.png");
  
  //loading the image of the blue balloon
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  //creating the size of the canvas
  createCanvas(600, 600);
  
  //creating groups
  redB = new Group ();
  pinkB = new Group ();
  blueB = new Group ();
  greenB = new Group ();
  arrowGroup = new Group();
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 
  
}

function draw() {
  
  //destroying the shooted balloon and the arrow and also adding scores when the arrow touches the balloons
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
   if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
  }
  
   if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
  }
  
   if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+4;
  }
  
  
  //adding different functions in play mode and end mode
    if(gameState === PLAY){
    
    // moving ground
    background.velocityX = -5
   if (background.x < 0){
      background.x = background.width/2;
    }
   //moving bow in the mouses Y position
  bow.y = World.mouseY
  //displaying the score on the screen
   text("Score: "+ score, 500,50);    
  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  }
  else if(gameState === END){
  //displaying the text at different positions in end mode
   text("Score: "+ score, 200,50);
  //stop the background in the end mode
  background.velocityX = 0 
  }



   
  
 
  
   
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }


  
  drawSprites();
   
}

//creating the red balloon
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 5;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
  
}

//creating the blue balloon
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 8;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

//creating the green balloon
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 6;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);  
}

//creating the pink balloon
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -50;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}
