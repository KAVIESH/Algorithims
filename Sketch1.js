var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 50, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.velocityY = 3;
  movingRect = createSprite(200, 600, 80, 50);
  movingRect.shapeColor = "blue";
  movingRect.velocityY = -3;

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0);  
  console.log(movingRect.x - fixedRect.x)

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
        movingRect.velocityX = movingRect.velocityX * (-1);
        fixedRect.velocityX = fixedRect.velocityX * (-1);
    }


    if(fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
        movingRect.velocityY = movingRect.velocityY * (-1);
        fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  
  
  drawSprites();
}