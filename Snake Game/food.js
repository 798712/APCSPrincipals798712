//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var mouseLoc;
class Food{
  constructor(x, y, w, h) {
    this.clr = color(random(255), random(255), random(255));
    this.loc = createVector(x, y);
    this.w = w
    this.h = h
}

  run(){
    this.render();
    this.update();
}

  render(){
  // console.log(this.loc);
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
}

update(){

  var mouseLoc = createVector(mouseX, 600);
  this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.5);
}
}
