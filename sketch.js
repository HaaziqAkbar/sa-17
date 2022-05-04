var box;

function setup() 
{
  createCanvas(400, 400);
  box = new Box (100,100,50,50,2,-2);
}
function draw() 
{
  background(220);
  box.show();
  //box.moveX();
  box.moveY();
}

