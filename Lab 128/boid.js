class Boid{
  constructer(x, y, dx, dy){
    this.clr = color(random(255), random(255), random(255))
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy)
    this.acc = createVector(0, 0)
  }
  run(){
    this.render()
    this.checkEdges();
    this.update();
  }
  render(){

    var distance;
    for(var i = 0; i < boids.lenth; i++){
      distance = this.loc.dist(boids[i].loc)
      if(distance < 200){
        stroke(this.clr)
        line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y)
      }
    }
  }
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.x;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height-2;
    }
    }

  update(){
    this.loc.add(this.vel);
  }
}
