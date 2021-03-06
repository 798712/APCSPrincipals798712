// Kai Seed
// aug21
class Ball{
  constructor(x,y,dx,dy,id){
    this.w=15;
    this.clr = color(random(255), random(255), random(255))
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0.1);
    this.id = id;
    if(this.id < 0){
      this.w=50;
    }
      else{
        this.w = 15
      }
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 20, 20)
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
    }
  }
  update(){
    var distToMainBall
    if(this.id >= 0){
      distToMainBall = this.loc.dist(mainBall.loc);
      if(distToMainBall < 50){
        this.acc = p5.Vector.sub(mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(.07);
      }
      if(distToMainBall < 1){
        this.acc = p5.Vector.sub(this.loc, mainBall.loc);
        this.acc.normalize();
        this.acc.mult(.5);
      }
    }
    this.vel.limit(5);
    this.vel.add(this.acc)
    this.loc.add(this.vel)
  }
}
