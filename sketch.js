var fixedRect, movingRect;
var moveSquare,fixSquare;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixSquare=createSprite(100, 400, 50, 50);
  moveSquare = createSprite(800, 400,50,50);
  fixSquare.shapeColor="blue";
  moveSquare.shapeColor="blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  moveSquare.velocityX=-2;
  fixSquare.velocityX=5;
}

function draw() {
  background(0,0,0);  

  bounceOff(moveSquare,fixSquare);

  drawSprites();
}

