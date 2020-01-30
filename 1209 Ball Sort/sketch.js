//  Kai Seed
// 	december 13
// Red Ball Sort

var balls = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  frameRate(10);
  loadBalls(20);
}
//  The draw function is called @ 30 fps
function draw() {
  background(200, 20, 100);
  runBalls();
  bubbleSort();
  textSize(70)
}

function loadBalls(n){
    for(var i =0; i < n; i++){
      balls[i] = new Ball((40*i), 400);
  }
}

function runBalls(){
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
  }
}
function bubbleSort(){
  for (var j = 0; j < balls.length-1; j++){
      if(balls[j].r < balls[j+1].r){
        swap(balls, j, j+1)
        changeX();
      }
    }
}

function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}

function changeX(){
  for(var i=0; i<balls.length; i++){
    balls[i].ballX(i);
  }
}
