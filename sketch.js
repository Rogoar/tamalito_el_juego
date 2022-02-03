var gameState=play;
var play=1;
var end=0;

var car1, car2, car3, car4;
var grass;
var BananaObstacle;
var racetrack;

var carWhiteGroup;
var carBlueGroup;
var carRedGroup;

var powerUpGroup;

var car1Img, car2Img, car3Img, car4Img;
var grassImg
var BananaObstacleImg;
var racetrackImg;
var powerUpImg;

function preload(){
  car1Img=loadImage("Imagenes/6hEEAJ.png")
  car2Img=loadImage("Imagenes/bzT6pT.png")
  car3Img=loadImage("Imagenes/cd2AUN.png")
  car4Img=loadImage("Imagenes/khKVcD.png")
  BananaObstacleImg=loadImage("Imagenes/BananaMK8.png")
  racetrackImg=loadImage("Imagenes/RaceCircuitRedBull2.jpg")
  grassImg=loadImage("Imagenes/grass.jpg")
powerUpImg=loadImage("Imagenes/asdadasd.jpg")
}

function setup(){
createCanvas(1440,960)
car1=createSprite(250,310);
car1.addImage(car1Img);
car1.scale=0.15

racetrack=createSprite(1200,450);
racetrack.addImage(racetrackImg);
racetrack.scale=3
racetrack.x=racetrack.width/1;
racetrack.velocityX=-1

carWhiteGroup=new Group();
carBlueGroup=new Group();
carRedGroup=new Group();
}

function draw(){
  //if(racetrackImg)
  background(grassImg);
  if(gameState===play){
    if(racetrack.x<0){
      racetrack.x=racetrack.width/1
    }
    if(carWhiteGroup.isTouching(car1)){
      gameState=end
    }
    if(carBlueGroup.isTouching(car1)){
      gameState=end
    }
    if(carRedGroup.isTouching(car1)){
      gameState=end
    }
  }
  if(gameState===end){
    
  }
  
  noStroke();
  textSize(30)
  text(mouseX+","+mouseY,mouseX,mouseY)
  invisibleBlock();
  car1.depth=racetrack.depth;
  racetrack.depth=racetrack.depth-1

  if (keyDown(RIGHT_ARROW)){
    car1.x=car1.x+20
  }
  if (keyDown(UP_ARROW)){
    car1.y=car1.y-7
  }
  if (keyDown(DOWN_ARROW)){
    car1.y=car1.y+7
  }
  carWhite();
  carBlue();
  carRed();
  drawSprites();

  powerUp();
}

function invisibleBlock(){
var invisibleBlock1 = createSprite(1340,300,810,5)
var invisibleBlock2 = createSprite(1340,120,1000,5)
var invisibleBlock3 = createSprite(1340,410,810,5)
var invisibleBlock4 = createSprite(1600,580,790,5)
var invisibleBlock5 = createSprite(1350,750,790,5)
var invisibleBlock6 = createSprite(924,540,5,500)
var invisibleBlock7 = createSprite(680,440,40,400)
var invisibleBlock8 = createSprite(425,550,40,500)
var invisibleBlock9 = createSprite(150,550,40,600)

invisibleBlock1.visible=false;
invisibleBlock2.visible=false;
invisibleBlock3.visible=false;
invisibleBlock4.visible=false;
invisibleBlock5.visible=false;
invisibleBlock6.visible=false;
invisibleBlock7.visible=false;
invisibleBlock8.visible=false;
invisibleBlock9.visible=false;
}

function carWhite(){
var car2=createSprite(250,400);
car2.addImage(car2Img);
car2.scale=0.15
carWhiteGroup.add(car2)
}

function carBlue(){
var car3=createSprite(250,490);
car3.addImage(car3Img);
car3.scale=0.15
carBlueGroup.add(car3)
}

function carRed(){
var car4=createSprite(250,580);
car4.addImage(car4Img);
car4.scale=0.15
carRedGroup.add(car4)
}
function powerUp(){
  if(frameCount% 100===0){
    var powerUp = createSprite(1440,310)
    powerUp.y=Math.round(random(250, 650))
    powerUp.addImage(powerUpImg)
    powerUp.scale=0.2
    powerUp.lifetime=150
  powerUp.velocityX=-10
    car1.depth=powerUp.depth;
    car1.depth+=1
  }

}