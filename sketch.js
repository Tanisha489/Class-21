
var movingRect
var fixedRect
var obj1,obj2,obj3


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100,100,100,50);
  fixedRect=createSprite(400,200,60,120);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  obj1 = createSprite(300,300,60,40);
  obj1.shapeColor="blue";
  obj2 = createSprite(600,400,90,50);
  obj2.shapeColor= "white";
  obj3 = createSprite(500,100,60,30);
  obj3.shapeColor = "pink";
}

function draw() {
 
 background(0);
 
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

 if (isTouching(movingRect,obj3)){
  movingRect.shapeColor="red";
  obj3.shapeColor="red";
  
 }
 else{
  movingRect.shapeColor="green";
  obj3.shapeColor="pink";
 }


  drawSprites();
}

function isTouching(o1,o2){
  if(o1.x-o2.x<o1.width/2+o2.width/2
    &&o2.x-o1.x<o1.width/2+o2.width/2 
    &&o1.y-o2.y<o1.height/2+o2.height/2
    &&o2.y-o1.y<o1.height/2+o2.height/2){
     return true;
    }
  else{
    return false;
  }
}






