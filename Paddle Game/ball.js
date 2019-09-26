// Kai Seed
// aug21

class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0.1);
    this.clr = color(random(255), random(0), random(0));
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.isColliding();
  }
  checkEdges(){
    if(this.loc.x < 0 || this.loc.x > width)this.vel.x = -this.vel.x;
    if(this.loc.y < 0 || this.loc.y > height)this.vel.y = -this.vel.y;
  }
  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 20, 20);
  }
  isColliding(){
    if(this.loc.x > paddle.loc.x &&
    this.loc.x < paddle.loc.x + paddle.w &&
    this.loc.y > paddle.loc.y &&
    this.loc.y < paddle.loc.y + paddle.h){
      this.vel.y = -this.vel.y;
    }
  }
}
