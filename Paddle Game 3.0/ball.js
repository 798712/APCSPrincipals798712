// Kai Seed
// aug21

class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.accA = createVector(0, 10);
    this.accB = createVector(0, -9.9);
    this.clr = color(random(255), random(255), random(255));
    this.score = 0;
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.isColliding();
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
      this.loc.y = height-2;
      this.score = this.score - 2;
    }
  }
  isColliding(){
    if(this.loc.x > paddle[0].loc.x &&
    this.loc.x < paddle[0].loc.x + paddle[0].W &&
    this.loc.y > paddle[0].loc.y &&
    this.loc.y < paddle[0].loc.y + paddle[0].h){
      this.vel.y = -this.vel.y;
      this.score = this.score + 1;
    }
  }
  update(){
    this.vel.add(this.accA);
    this.vel.add(this.accB);
    this.loc.add(this.vel);
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 15, 15);
    text(this.score, 350, 75);
  }
}
// end of ball
