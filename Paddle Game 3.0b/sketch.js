//  Kai Seed
// 	9/20
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle = []
var gameState = 1
var gameMode;
var a;
var b;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //b1 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  //b2 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  //b3 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  loadballs(5);
  loadpaddle(1);
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    startGame();
  }
  if(gameState === 2){
    playGame();
  }
  if(gameState === 3){
    endGame();
  }
  background(20, 20, 20)
  fill(2, 2, 2)
}
function startGame(){
  if(gameMode === 1){
    a = 4
    b = 5
  }
  else if(gameMode ===2){
    a = 14
    b = 15
  }
  else if(gameMode === 3){
    a = 29
    b = 30
  }
  textSize(100)
  fill(255, 20, 147);
  text('REMUS SPHERA', 0, 300);
  fill(0, 255, 0);
  textSize(30);
  text('Easy', 200, 575);
  rect(200, 600, 60, 60);
  fill(255, 255, 0);
  text('Medium', 400, 575);
  rect(400, 600, 60, 60);
  fill(255, 0, 0);
  text('Hard', 600, 575);
  rect(600, 600, 60, 60);
  if(mouseIsPressed &&
  mouseX > 200 &&
  mouseX < 260 &&
  mouseY > 600 &&
  mouseY < 660) {
    gameMode = 1;
    gameState = 2;
  }
  else if(mouseIsPressed &&
  mouseX > 400 &&
  mouseX < 460 &&
  mouseY > 600 &&
  mouseY < 660){
    gameMode = 2;
    gamestate = 2;
  }
  else if(mouseIsPressed &&
  mouseX > 600 &&
  mouseX < 660 &&
  mouseY > 600 &&
  mouseY < 660){
    gameMode = 3;
    gameState = 2;
  }
}

function loadballs(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(800), random(5), random(-4, -5), random(4, 5));
  }
}
function runballs(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
function runpaddle(){
  for(var i = 0; i < paddle.lenth; i++){
    paddle[i].run();
  }
}
function loadpaddle(x){
  for(var i = 0; i < x; i++){
    paddle[i] = new Paddle(250, 700, 200, 50);
  }
}
function playGame(){
  loadballs(n);
  loadpaddle(x);
  runballs();
  runpaddle();
}
