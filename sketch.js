var car1;
var wall;
var speed, weight;
function setup() {
  createCanvas(800,400);
  car1 = createSprite(50, 200, 50, 50);
  car1.shapeColor = "white";
  
  wall = createSprite (700,200,100,300);
  wall.shapeColor = (80,80,80);
  speed = random(40,70);
  
  weight = random(400,1500)
}

function draw() {
  background(180);
  car1.velocityX = speed;
 if (speed <= 50 && car1.isTouching(wall)) {
   car1.shapeColor = "green"
 }
 if (speed > 50 && speed < 60 && car1.isTouching(wall)){
  car1.shapeColor = "yellow"
 }
 if (speed >60 && car1.isTouching(wall)) {
  car1.shapeColor = "red"
}
  car1.collide(wall);
  if(wall.x-car1.x<(car1.width+wall.width)/2) {
    car1.velocityX=0;
    var deformation=0.5 *weight*speed*speed/22509;
    if (deformation<100) {
      car1.shapeColor = "green"
    }
    if (deformation<180&&deformation>100 ){
     car1.shapeColor = "yellow"
    }
    if (deformation>180 ) {
     car1.shapeColor = "red"
   }
  }
  drawSprites();
}