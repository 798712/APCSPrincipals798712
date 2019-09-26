//  Your Name
// 	Date or version number
//  This is a comment
//var b1, b2;
//  The setup function function is called once when your program begins
var balls = []
var mainBall = []
var paddle
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //b1 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  //b2 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  //b3 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  loadobjects(20)
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20)
  runobjects();
}

function loadobjects(n){
  mainBall = new Ball(width/2, height/2, random(-1, 1), random(-1, 1), -1);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-2, 2), random(-2, 2), i);
  }
    paddle = new Paddle(250, 700, 200, 25);
}
function runobjects(){
  paddle.run();
  mainBall.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
