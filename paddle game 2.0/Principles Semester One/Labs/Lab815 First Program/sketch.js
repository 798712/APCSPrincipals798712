//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255,0,0);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  noStroke()
  fill(255,255,255)
rect(375,300,50,200)
noStroke()
fill(255,255,255)
rect(300,375,200,50)
}
