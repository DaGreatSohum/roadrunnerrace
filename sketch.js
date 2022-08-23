var ground,START,PLAY;
var gameState=START;
var roadRunner,playbutton;

function preload(){
desertbgImg=loadImage("desertbg.jpg")
bgStarting=loadImage("bgStart.webp")
roadRunnerImg=loadImage("roadRunner.png")
playButtonImg=loadImage("orangePlay.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
 
  roadRunner=createSprite(600,500);
  roadRunner.addImage(roadRunnerImg);
  roadRunner.scale=1.5 
}

function draw() {
  background(bgStarting);
  
  if(gameState===START){
    fill("white")
    textSize(40)
    text("ROADRUNNER RACE",470,50)
    text("play now",600,180)
    

    playbutton=createSprite(width/2,300)
    playbutton.addImage(playButtonImg)
    playbutton.scale=0.5

    if(mousePressedOver(playbutton)){
      gameState=PLAY;
    } 
  }


  if(gameState===PLAY){
    ground = createSprite(0,500,5000,height/2);
   }
  
 drawSprites()
}



