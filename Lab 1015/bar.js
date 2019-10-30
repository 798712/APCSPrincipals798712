//  Kai Seed
// 10/15
//  This is a comment
//  The setup function function is called once when your program begins
class Bar{
  constructor(x, y, barwidth, h, clr){
    this.loc = createVector(x, y);
    this.w = barwidth;
    this.h = h - this.loc.y;
    this.clr = clr;
  }
  render(){
    fill(200, 110, 20);
    rect(this.loc.x, this.loc.y, this.w, this.h)
  }
}
