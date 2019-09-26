// Kai Seed
// sep16
var mouseLoc;
class Paddle{
  constructor(x, y, w, h) {
    this.clr = color(255, 0, 0);
    this.loc = createVector(x, y);
    this.w = w
    this.h = h
}

  run(){
  //  console.log(this.loc);
    this.render();
    this.update();
}

  render(){
  // console.log(this.loc);
    fill(255);
    rect(this.loc.x, this.loc.y, this.w, this.h);
}

update(){

  var mouseLoc = createVector(mouseX, 700);
  this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
}
checkEdges(){
  if(this.loc.x < 0){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x > width){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y > height){
    this.vel.y = -this.vel.y;
  }
}
}
