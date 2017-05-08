var isGameOver; 
var player; 
var playerImage; 
var enemy; 
var enemyImage; 
var backgroundImage; 
 
 
function preload() { 
  playerImage = loadImage("https://ivobrett.github.io/hackclubcode/dodge/images/png/playerRight.png "); 
  enemyImage = loadImage("https://ivobrett.github.io/hackclubcode/dodge/images/png/laserRed.png   "); 
  backgroundImage = loadImage("https://lh3.googleusercontent.com/K3UdS0t311DpKIiq614Ix6cRanFYxueEFaLF3T0bPQLGcJtqzw5ps3ClI85nK7jB4ElbKBs8xg=s640-h400-e365"); 
} 
 
 
function setup() { 
  isGameOver = false; 
  createCanvas(256, 256); 
  player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0); 
  player.addImage(playerImage); 
  enemy = createSprite(width / 2, 0, 0, 0); 
  enemy.addImage(enemyImage); 
  enemy.rotationSpeed = 2.0; 
} 
 
 
function draw() { 
  if (isGameOver) { 
    gameOver(); 
  } else { 
    if (enemy.overlap(player)) { 
      isGameOver = true; 
    } 
    if (enemy.overlap(player)) { 
      gameOver(); 
    } 
    background(backgroundImage); 
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) { 
      player.position.x += 3; 
    } 
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) { 
      player.position.x -= 3; 
    } 
    enemy.position.y = enemy.position.y + 3; 
    if (enemy.position.y > height) { 
      enemy.position.y = 0; 
      enemy.position.x = random(5, width - 5); 
    } 
    drawSprites(); 
  } 
} 
 
 
function gameOver() { 
  background(0); 
  textAlign(CENTER); 
  fill("white"); 
  text("Game Over!", width / 2, height / 2); 
  text("Click anywhere to try again", width / 2, 3 * height / 4); 
} 
 
 
function mouseClicked() { 
  isGameOver = false; 
  player.position.x = width / 2; 
  player.position.y = height - (playerImage.height / 2); 
  enemy.position.x = width / 2; 
  enemy.position.y = 0; 
} 