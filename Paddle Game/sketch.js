//  Kai Seed
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadobjects(5)
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20)
  runobjects();
}

function loadobjects(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(800), random(800), random(-5, 5), random(-5, 5))
  }
  paddle = new Paddle(250, 700, 200, 25)
}
function runobjects(){
  paddle.run();
  for(var i = 0; i < balls.lenth; i++) balls[i].run();
  }
