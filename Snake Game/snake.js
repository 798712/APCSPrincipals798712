//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
// Kai Seed
// sep16
var mouseLoc;
class Snake{
  constructor(x, y, w) {
    this.clr = color(255, 0, 0);
    this.loc = createVector(x, y);
    this.w = w;
    this.vel = createVector(0, 0);
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
  if(KeyIsPressed &&
  keyCode === RIGHT_ARROW){
    this.vel.x = 3
    this.vel.y = 0
  }else if(KeyIsPressed &&
  keyCode === LEFT_ARROW){
    this.vel.x = -3
    this.vel.y = 0
  }else if(KeyIsPressed &&
  keyCode === DOWN_ARROW){
    this.vel.x = 0
    this.vel.y = -3
  }else if(KayIsPressed &&
    keyCode === UP_ARROW){
      this.vel.x = 0
      this.vel.y = 3
    }
    this.loc.add(this.vel);
}
}
