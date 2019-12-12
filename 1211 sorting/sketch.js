//  Kai
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var nums = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 50, 100);
  loadNumbers(11);
  mySort();
  logNumber();
  findAv();
  findMedian();
}

function loadNumbers(n){
for(var i = 0; i < n; i++){
  nums[i]= int(random(100));
  }
}

function logNumber(){
  console.log(nums);
}

function swap(nums,a,b){
  var temp=nums[a];
  nums[a]=nums[b]
  nums[b]=temp;
}

function findAv(){
  var sum=0;
  for (var i=0; i<11; i++){
    sum = (sum+nums[i]);
  }
  console.log(sum/nums.length)
}

function findMedian(){
  console.log(nums[(nums.length-1)/2])
}
function mySort(){
  for(var i=0; i<nums.length; i++){
    for (var x=0; x<nums.length;x++){
      if(nums[x]>nums[x+1]){
        swap(nums,x,x+1);
      }
    }
  }
}
