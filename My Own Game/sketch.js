
/*var bg, bgImage , gameState="start";
var mermaid,mermaidImg;
var shark, sharkImg;
var jf, jfImg;
var jGroup, sGroup;
var go, goImg;
var score = 0;
var  highestScore = 0;



function preload()
{
  bgImage=loadImage("./assets/UnderWaterBg3.jpg");
  mermaidImg = loadAnimation("assets/m00.png", "assets/m01.png", "assets/m02.png", "assets/m03.png", "assets/m04.png"
  , "assets/m05.png", "assets/m06.png", "assets/m07.png", "assets/m08.png", "assets/m09.png");

  sharkImg = loadAnimation("assets/s00.png","assets/s01.png", "assets/s02.png","assets/s03.png","assets/s04.png");
  jfImg = loadImage("./assets/j0.png");
  goImg = loadImage("./assets/gameOver.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg= createSprite(windowWidth / 2, windowHeight / 2 ,windowWidth+100, windowHeight);
  bg.addImage(bgImage);
  bg.scale = 5.5;
  bg.velocityX = -7;

  mermaid= createSprite(windowWidth / 5, windowHeight /2);
  mermaid.addAnimation("mermaid image", mermaidImg);
  mermaid.debug = true;
  mermaid.setCollider("rectangle", 0,0, 300, 100)



 jGroup = new Group();
 sGroup = new Group();



 
}

function draw() 
{
  background(0);
  

  if(gameState == "start") {
    //infinte bg
    if(bg.x <100){
      bg.x = windowWidth-100
    }

    //movement of the mermaid
    if(keyDown("UP_ARROW")){
     mermaid.y -= 5
    }
    if(keyDown("DOWN_ARROW")){
      mermaid.y += 5
     }
     if(keyDown("Right_ARROW")){
     mermaid.x += 5
     }
     if(keyDown("Left_ARROW")){
      mermaid.x -= 5
      }
  }
  
  if(frameCount % 25 == 0){
  score = score+ 50
}


    
  spawnJellyfish();
  spawnShark();  

    /* if(jGroup.isTouching(mermaid) || sGroup.isTouching(mermaid)){
        mermaid.destroy();
        jGroup.destroyEach();
        sGroup.destroyEach();
        go = createSprite(windowWidth /2, windowHeight /2);
        go.addImage(goImg);
        score = 0
          if (score > highestScore) {
            highestScore = score;
          respawnDelay = 100;
          mermaid.destroy();
          jGroup.destroyEach();
          sGroup.destroyEach();
          go = createSprite(windowWidth / 2, windowHeight / 2);
          go.addImage(goImg);

          }
      }*/

  /*if (jGroup.isTouching(mermaid) || sGroup.isTouching(mermaid)) {
    if (score > highestScore) {
      highestScore = score;
    }
    score = 0;
    respawnDelay = 900;
    mermaid.destroy();
    jGroup.destroyEach();
    sGroup.destroyEach();
    go = createSprite(windowWidth / 2, windowHeight / 2);
    go.addImage(goImg);
  }
  


  
  drawSprites();

  textSize(40)
  text("Score: " + score, windowWidth - 400, 50);
}

function spawnJellyfish(){
  if(frameCount % 200 == 0){
    jf = createSprite(200, -50);
    jf.x = Math.round(random(windowWidth /5,windowWidth - 250 ));
    jf.velocityY = 2;
    jGroup.add(jf);
    jf.addImage(jfImg);
    jf.scale = 0.7


  } 
}

function spawnShark(){
  if(frameCount % 250 ==0){
    shark= createSprite(windowWidth +300, windowHeight /2);
    shark.addAnimation("shark image", sharkImg);
    shark.scale=0.7;
    shark.y = Math.round(random(100, windowHeight - 100));
    shark.velocityX = -2;
    sGroup.add(shark)

  }
}*/


var bg, bgImage, gameState = "start";
var mermaid, mermaidImg;
var shark, sharkImg;
var jf, jfImg;
var jGroup, sGroup;
var go, goImg;
var score = 0;
var highestScore = 0;
var respawnDelay = 0; // Added for delaying enemy re-spawning

function preload() {
  bgImage = loadImage("./assets/UnderWaterBg3.jpg");
  mermaidImg = loadAnimation("assets/m00.png", "assets/m01.png", "assets/m02.png", "assets/m03.png", "assets/m04.png", "assets/m05.png", "assets/m06.png", "assets/m07.png", "assets/m08.png", "assets/m09.png");
  sharkImg = loadAnimation("assets/s00.png", "assets/s01.png", "assets/s02.png", "assets/s03.png", "assets/s04.png");
  jfImg = loadImage("./assets/j0.png");
  goImg = loadImage("./assets/gameOver.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(windowWidth / 2, windowHeight / 2, windowWidth + 100, windowHeight);
  bg.addImage(bgImage);
  bg.scale = 5.5;
  bg.velocityX = -7;

  mermaid = createSprite(windowWidth / 5, windowHeight / 2);
  mermaid.addAnimation("mermaid image", mermaidImg);
  mermaid.debug = true;
  mermaid.setCollider("rectangle", 0, 0, 300, 100);

  jGroup = new Group();
  sGroup = new Group();
}

function draw() {
  background(0);

  if (gameState == "start") {
    if (bg.x < 100) {
      bg.x = windowWidth - 100;
    }

    if (keyDown("UP_ARROW")) {
      mermaid.y -= 5;
    }
    if (keyDown("DOWN_ARROW")) {
      mermaid.y += 5;
    }
    if (keyDown("Right_ARROW")) {
      mermaid.x += 5;
    }
    if (keyDown("Left_ARROW")) {
      mermaid.x -= 5;
    }
  }

  if (frameCount % 25 == 0) {
    score += 50;
  }

  if (frameCount % 25 == 0) {
    score = score + 50;
  }

  if (jGroup.isTouching(mermaid) || sGroup.isTouching(mermaid)) {
    if (score > highestScore) {
      highestScore = score;
    }
    score = 0;
    respawnDelay = 900; // Delay the respawn
    mermaid.destroy();
    jGroup.destroyEach();
    sGroup.destroyEach();
    go = createSprite(windowWidth / 2, windowHeight / 2);
    go.addImage(goImg);
  }

  // Decrement the respawn delay
  if (respawnDelay > 0) {
    respawnDelay--;
  }

  // Prevent spawning enemies during the respawn delay
  if (respawnDelay === 0) {
    spawnJellyfish();
    spawnShark();
  }

  drawSprites();

  textSize(40);
  text("Score: " + score, windowWidth - 400, 50);
  text("Highest Score: " + highestScore, 50, 50);
}

function spawnJellyfish() {
  if (frameCount % 200 == 0) {
    jf = createSprite(200, -50);
    jf.x = Math.round(random(windowWidth / 5, windowWidth - 250));
    jf.velocityY = 2;
    jGroup.add(jf);
    jf.addImage(jfImg);
    jf.scale = 0.7;
  }
}

function spawnShark() {
  if (frameCount % 250 == 0) {
    shark = createSprite(windowWidth + 300, windowHeight / 2);
    shark.addAnimation("shark image", sharkImg);
    shark.scale = 0.7;
    shark.y = Math.round(random(100, windowHeight - 100));
    shark.velocityX = -2;
    sGroup.add(shark);
  }
}
