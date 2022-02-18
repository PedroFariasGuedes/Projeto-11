var solo, soloImage
var criança, criançaImage

function preload(){
  criançaImage = loadAnimation("Runner-1.png","Runner-2.png")
  soloImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
solo = createSprite(200,200)
solo.addImage("solo",soloImage)

criança = createSprite(200,350)
criança.addAnimation("criança",criançaImage)
criança.scale = 0.1
}

function draw() {
  background(0);
  criança.x = World.mouseX;
  solo.velocityY = +10
  if(solo.y > 400 ){
    solo.y = solo.height/6
  }
drawSprites();
}
