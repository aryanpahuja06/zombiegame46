var zombie;
var backgroundimg
var zombieimg
var edges;

function preload(){
backgroundimg=loadImage("images/zombie background.jpg")
zombieimg=loadImage("images/zombie 2.gif")


}

function setup()
{
  createCanvas(windowWidth,windowHeight);
zombie= createSprite(65,459,20,50)
//sprite.addImage(ImageName)
//zombie.addImage(zombieimg)

//sprite.scale (to make image smaller give values less than 1)
zombie.scale=0.25

edges=createEdgeSprites()

}

function draw() 
{
  background(backgroundimg);
  image(zombieimg,zombie.x,zombie.y,200,350)
  console.log(mouseX + "," + mouseY)

if(keyDown("d")){
zombie.x+=10 
}
if(keyDown("a")){
  zombie.x-=10
}
if(keyDown("w")){
  zombie.y-=10
}

if(keyDown("s")){
  zombie.y+=10

}

zombie.collide(edges)




  drawSprites();







  
 
}


