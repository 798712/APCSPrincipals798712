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

    this.loc.add(this.vel);
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
    endGame();
    }
    if(this.loc.x > width){
    endGame();
    }
    if(this.loc.y < 0){
    endGame();
    }
    if(this.loc.y > height){
      endGame();
    }
  }
  function endGame(){
    if(this.loc === this.segments.loc){
      endGame();
    }
  }
}
