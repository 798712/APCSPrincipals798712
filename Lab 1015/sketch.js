//  Kai Seed
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
var numBars, barwidth
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  bars = bubbleSort(bars);

}

function bubbleSort(a){
  for (var j=0; j<n-1-i; j++){
/* compare the two neighbors*/
    if (a[j+1] < a[j]){
/* swap a[j] and a[j+1]*/
      var tmp = a[j];
      a[j] = a[j+1];
      a[j+1] = tmp;
    }
    return(a);
  }
}

function list(a){
  for (var j=0; j<n-1-i; j++){
    loadBars[j] = new Bar(random(h))
  }

}
