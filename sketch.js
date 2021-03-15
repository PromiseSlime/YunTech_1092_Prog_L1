let x = 0

function setup() {
  createCanvas(500, 500);
  console.log(x);
}

function draw() {
  //background(220);
  fill(175,mouseX,mouseY);
  noStroke();
  
  if(mouseIsPressed){
  // Draw a circle (x,y,d)
  circle(mouseX,mouseY,10*sin(x));}
  
  else{
  // Draw a rectangle with rounded corners, each having a radius of 20.
  rect(mouseX,mouseY,20*sin(x),20*sin(x),4,4);}
  
  x=x+0.05;
}