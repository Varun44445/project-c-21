var wall , thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,20);
bullet.velocityX = speed;
wall=createSprite(1200,283,thickness,height/2);
wall.shapeColor=80,80,80;

}


function draw() {
  background(255,255,255);
  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    var deformation=05 * weight * speed * speed/22509;

    if(deformation>180){
      bullet.shapeColor=color(225,0,0);
    }

    if(deformation<180 && deformaton>100){
      bullet.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
    }

    if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness *thickness * thickness);

      if (damage>10){
        wall.shapeColor+color(255,0,0);

      }

      if(damage<10){
        wall.shapeColor+color(0,255,0);
      }
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;

  if(bullet.rightEdge>=wallLeftEdge){

    return true;
  }
  return false;
}
