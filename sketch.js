var hour ,minute ,second
var hourangle ,minuteangle ,secondangle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0); 
  translate(200,200)
  rotate(-90)
  hours=hour()
  minutes=minute()
  seconds=second()
  secondangle=map(seconds,0,60,0,360)
  minuteangle=map(minutes,0,60,0,360)
  hourangle=map(hours%12,0,12,0,360)
  push()
  rotate(secondangle)
  stroke("red")
  line(0,0,100,0)
  pop()
  
  push()
  rotate(minuteangle)
  stroke("blue")
  line(0,0,75,0)
  pop()

  push()
  rotate(hourangle)
  stroke("green")
  line(0,0,50,0)
  pop()
  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()
  stroke("red")
  arc(0,0,300,300,0,secondangle)
  stroke("blue")
  arc(0,0,280,280,0,minuteangle)
  stroke("green")
  arc(0,0,260,260,0,hourangle)
  drawSprites();
}