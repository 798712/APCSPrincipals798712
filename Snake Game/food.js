//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var mouseLoc;
class Food{
  constructor(x, y, w) {
    this.clr = color(0, 255, 255);
    this.loc = createVector(x, y);
    this.w = w;
    this.vel = createVector(0, 0);

    this.segments = [];
}

  run(){
    this.update();
    this.render();


}

  render(){
  // console.log(this.loc);
    fill(255);
    rect(this.loc.x, this.loc.y, this.w, this.w);
    //perameters of the food
}

update(){

  //var mouseLoc = createVector(mouseX, 600);
//  this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.5);
}
isEaten(){
  if(this.loc.x === snake.loc.x && this.loc.y === snake.loc.y){
    return true;
    //what to do when food gets eaten.
  }
  return false;
}

}
