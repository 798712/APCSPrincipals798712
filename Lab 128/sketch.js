//  Kai Seed
// 	1/28/20
//  This is a comment
//  The setup function function is called once when your program begins
var boids = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  loadBoids(100);
}
function draw() {
  background(255, 255, 255)
  runBoids();
}

function loadBoids(n){
  for(var i=0; i < n; i++){
    boids[i] = new Boid(random(width), random(height), random(-2, 2), random(-2, 2));
  }
}

function runBoids(){
for(var i = 0; i < boids.lenth; i++){
  boids[i].run(;)
  }
}
