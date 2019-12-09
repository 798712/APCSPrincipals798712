//  Kai Seed
// 	November 15
//  This is a comment
//  The setup function function is called once when your program begins
var food;
var snake;
var gameMode;
var gameState = 2;
var colWidth = 20;
var score = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
   loadObjects();
   frameRate(12)
gameState = 1
}

//  The draw function is called @ 30 fps
function draw() {
background(5, 5, 5)
  if(food.isEaten()){
    food = new Food(Math.floor(random(20))*colWidth, Math.floor(random(30))*colWidth, colWidth);
    // add a segment to the snake snake.grow()
    snake.grow();
    score = score + 1
  }

    if(gameState === 1){
      startGame();
    }
    if(gameState === 2){
      playGame();
    }
    if(gameState === 3){
      endGame();
    }

}
function playGame(){
  runObjects();
}

function loadObjects(){
    snake = new Snake(10*colWidth,20*colWidth, colWidth);
    food = new Food(30*colWidth,30*colWidth, colWidth);
    //loads the food and the snake
}

function endGame(){
  textSize(100)
  fill(255, 0, 0)
  textSize(30)
  text(score, 300, 100)
  text('Game Over', 300, 200)
  fill(255, 0, 0)
  text('Play Again', 350, 350)
  rect(400, 600, 60, 60)
  if(mouseIsPressed &&
  mouseX > 400 &&
  mouseX < 460 &&
  mouseY > 600 &&
  mouseY < 660){
    gameState = 1;
  }

}

function runObjects(){
   snake.run();
  food.run();
  //runs the snake and food
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
     snake.vel = createVector(colWidth, 0);
  }else if(keyCode === LEFT_ARROW){
     snake.vel = createVector(-colWidth, 0);
  }else if( keyCode === DOWN_ARROW){
     snake.vel = createVector(0,colWidth);
  }else if( keyCode === UP_ARROW){
    snake.vel = createVector(0, -colWidth);
    // tells what keys should do.
    }
}

function startGame(){

  textSize(100)
  fill(255, 20, 147);
  text('Snake Game', 0, 300);
  // fill(0, 255, 0);
  // textSize(30);
  // text('Easy', 200, 575);
  // rect(200, 600, 60, 60);
  textSize(30)
  fill(255, 255, 0);
  text('Play', 400, 575);
  rect(400, 600, 60, 60);
  // fill(255, 0, 0);
  // text('Hard', 600, 575);
  // rect(600, 600, 60, 60);
//   if(mouseIsPressed &&
//   mouseX > 200 &&
//   mouseX < 260 &&
//   mouseY > 600 &&
//   mouseY < 660) {
//     gameMode = 1;
//     gameState = 2
//     loadsnake(1);
//     loadfood(1);
// }
if(mouseIsPressed &&
mouseX > 400 &&
mouseX < 460 &&
mouseY > 600 &&
mouseY < 660){
  gameState = 2;
}
// else if(mouseIsPressed &&
// mouseX > 600 &&
// mouseX < 660 &&
// mouseY > 600 &&
// mouseY < 660){
//   gameMode = 3;
//   gameState = 2
//   loadsnake(1);
//   loadfood(1);
//   }
}
