var bullet,wall
var thickness,weight,speed

function setup(){
  createCanvas(1500,400)
  speed=random(220,350)
  weight=random(20,30)

  bullet=createSprite(500,250,20,20)
  wall=createSprite(1200,250,50,100)

  bullet.velocityX=5
  thickness=random(20,80)

}
function draw(){
  background("black")

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5* weight* speed*speed/(thickness * thickness * thickness)
 

  if(damage<10){
    wall.shapeColor=color("green")
  }

  if(damage>10){
    wall.shapeColor=color("red")
  }
}
  drawSprites();

  hasCollided(bullet,wall)
}

  function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }





 