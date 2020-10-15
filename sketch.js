
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground, invisible_ground;
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,500)
ground = createSprite(350,440,700,20)
ground.velocityX=-2;
  
  invisible_ground= createSprite(350,460,700,20)
  invisible_ground.visible = false;
  
  monkey = createSprite(50,350,20,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.3
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("lightblue")
   
  if(ground.x<700){
    ground.x=350;
  }
  
   if(keyDown("space")  && monkey.y >= 357.7) {
      monkey.velocityY = -18;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisible_ground);
  
  SpawnBanana ()
  spawnObstacles()
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+survivalTime,500,500)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100,50)
  
 drawSprites(); 
}

function SpawnBanana (){
  if (frameCount % 80 === 0){
  banana = createSprite(600,165,10,40)
  banana.addImage(bananaImage)
  banana.scale=0.2
  banana.y = Math.round(random(120,200));
  banana.velocityX=-3;
  banana.lifetime=166.6;
    FoodGroup.add(banana);
 }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,400,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -3
     obstacle.addImage(obstacleImage);
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}







