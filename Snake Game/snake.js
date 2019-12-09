//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
// Kai Seed
// sep16
class Snake{
  constructor(x, y, w) {
    this.clr = color(255, 0, 255);
    this.loc = createVector(x, y);
    this.w = w;
    this.vel = createVector(0, 0);
    this.segments = [];
  }

  run(){
    this.update();
    this.render();
    this.checkEdges();
  }

  update(){
    // update the segments from back to front
    if(this.isTangled()){
      gameState = 3;
    }else{
      this.loc.add(this.vel);
    }

    for (var i=this.segments.length-1; i>=0; i--) {
      if (i===0) {
        // follow the head
        this.segments[i].x = this.loc.x;
        this.segments[i].y = this.loc.y;
      } else {
        // follow segment in front if the i-th segment
        this.segments[i].x = this.segments[i-1].x;
        this.segments[i].y = this.segments[i-1].y;
      }
    }



  }

  grow() {
    // add a segment to the segment array
    this.segments.push(createVector(0,0));
  }

  render(){
    // console.log(this.loc);
    fill(this.clr);

    // draw the segments
    for (var i=0; i<this.segments.length; i++) {
      rect(this.segments[i].x, this.segments[i].y, this.w, this.w );
    }

    rect(this.loc.x, this.loc.y, this.w, this.w);
  }
  //ends game when snake hits walls.
  checkEdges(){
    if(this.loc.x < 0){
      gameState = 3
    }
    if(this.loc.x > width){
      gameState = 3
    }
    if(this.loc.y < 0){
      gameState = 3
    }
    if(this.loc.y > height){
      gameState = 3
    }
  }

  isTangled(){
    if(this.segments.length > 1){
      for(var i = 0; i < this.segments.length; i++){
        if(this.loc.x === this.segments[i].x && this.loc.y === this.segments[i].y){
          return true;
        }
      }
    }

    return false;

  }
}
