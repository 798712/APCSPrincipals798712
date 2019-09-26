//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x,y;
var speedX,speedY;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x=300;
  y=500;
  speedX=1
  speedY=1


}

//  The draw function is called @ 30 fps
function draw() {
  x= x + speedX;
  y= y + speedY;
  fill(255,0,0)
  ellipse(x,y,100)
  fill(0,255,0)
  ellipse(x,y,100)
  fill(255,0,255)
  ellipse(x,y,100)
}
