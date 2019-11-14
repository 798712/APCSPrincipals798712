//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var food = []
var snake = []
var gameMode;
var gameState = 2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
loadsnake(1);
loadfood(1);

}

//  The draw function is called @ 30 fps
function draw() {
background(5, 5, 5)
runsnake();
runfood();
}

function loadsnake(n){
  for(var i = 0; i < n; i++){
    snake[1] = new snake(random(400), random(400), 0, 0)
  }
}
function loadfood(x){
  for(var i = 0; i < x; i++){
    food[i] = new food(600, 600);
  }
}
function runsnake({
 for(var i = 0; i < snake.lenth; i++){
   snake[i].run();
  }
}
function runfood(){
  for(var i = 0; i < food.lenth; i++){
    food[i].run();
  }
}
