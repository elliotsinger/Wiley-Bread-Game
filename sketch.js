
let students = [];
let slices = [];
//create a variable to hold your avatar
let me;
let breadroll;
let wileypic;
let sign;
let instructions;
let instructions2;
let score = 0
let instructions3;

function preload(){
  breadroll = loadImage('breadroll.png')
  wileypic = loadImage('wiley.png')
}


function setup() {
  createCanvas(500, 400);
  //make one avatar called me
  me = new Avatar(width/2, height/2, 3);

  for (let i = 0; i < 100; i++){
      let b = new Bread(random (200,315), random (175,240),false);
      slices.push(b);


  }
}

function draw(){
	background(255, 221, 0);
  strokeWeight(4);
  stroke(51);
  fill(0,0,0, 10);
  rect(200, 175, 125, 75);

    let sign = 'Ann Maisel Caf';
    color(246, 255, 0);
    textSize(30);
    fill(255, 255, 255);
    noStroke();
    text(sign, 10, 30);

    let instructions = 'You are Ms. Wiley and your mission is to protect the bread from bread-stealing frosh!';
    textSize(12.5);
    fill(0, 0, 0);
    noStroke();
    text(instructions, 10, 365);

    let instructions2 = 'Use the arrow keys to move Ms. Wiley and take back the bread!';
    textSize(12.5);
    fill(0, 0, 0);
    noStroke();
    text(instructions2, 10, 378);

    let instructions3 = 'Ms. Wiley doesnt sit in the breadbox, so neither should you!';
    textSize(12.5);
    fill(0, 0, 0);
    noStroke();
    text(instructions3, 10, 394);


    // text("score = " + score, 400, 20);




  for (let i = 0; i < slices.length; i++) {
          slices[i].drawBread();
          slices[i].dropBread();
    }

    me.drawMe();
    me.moveMe();

  if (frameCount % 200 == 0) {
      let  b = new Students(width, random(0,height), -3, false, "not yet");
      students.push(b);
    }

if (frameCount % 200 == 0) {
        let  b = new Students(0, random(0,height), 3, false, "not yet");
        students.push(b);
    }

	for (let i = 0; i < students.length; i++) {
	 	      students[i].drawStudents();
       	  students[i].moveStudents();
        	students[i].loseBread();
          students[i].takeBread();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = (5,5);
	}

	drawMe(){  // draw the running person
    image(wileypic, this.x, this.y);
    		// stroke("green");
        // strokeWeight(3);
    		// fill("blue");
		    // ellipse(this.x,this.y,20,20);
        // line(this.x,this.y, this.x, this.y+40);
        // line(this.x, this.y+40, this.x-20, this.y+60);
        // line(this.x, this.y+40, this.x+10, this.y+50);
        // line(this.x+10, this.y+50, this.x+5, this.y+60);
        // line(this.x, this.y+15, this.x-10, this.y+25);
        // line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
      }
	}

  die(){
    // ifbreadrolls= 0, then game over

  }

}


class Students {
	constructor(x,y, speed, hitWiley, hasBread){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.hitWiley = hitWiley;
    this.hasBread = hasBread;
	}

	drawStudents(){
    stroke(130, 13, 19);
    strokeWeight(3);
    fill(24, 27, 186);
    ellipse(this.x,this.y,20,20);
    line(this.x,this.y, this.x, this.y+40);
    line(this.x, this.y+40, this.x-20, this.y+60);
    line(this.x, this.y+40, this.x+10, this.y+50);
    line(this.x+10, this.y+50, this.x+5, this.y+60);
    line(this.x, this.y+15, this.x-10, this.y+25);
    line(this.x-10, this.y+25, this.x+10, this.y+35);
      if(this.hasBread == "yes"){
        image(breadroll, this.x+1, this.y);
      }
      if(this.hasBread == "drop it"){
        print("fall bread!")


      }
	}

	moveStudents(){
		this.x = this.x+ this.speed;
    if (this.y <200){
      this.y = this.y+(200+this.y)/250;
    }
    if (this.y >200){
        this.y = this.y -(200+this.y)/250;
    }
	}

takeBread (){
  if(this.x>width/2-50 && this.x<width/2+50 && this.y> height/2-50 && this.y< height/2+50 && this.hasBread == "not yet"){
    this.hasBread = "yes";
    slices.pop();
  }
}

  loseBread(){
    	if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-30 && this.y < me.y+60 && this.hitWiley == false){
          this.hitWiley = true
          this.speed = -this.speed;
          print("hit Wiley")
          this.hasBread = "drop it"
          if (this.hasBread == "yes"){
          }



    		}
  	}
}

class Bread {
constructor(x,y, follow){
  this.x = x;
  this.y = y;
  this.follow = follow;

}

drawBread (){
  image(breadroll, this.x, this.y);
}


dropBread(){
   for(let i=0; i<students.length; i++){
     if (students[i].hasBread == "yes" && students[i].hitWiley == true){
       students[i].hasBread == "drop it"
       score=score+1;

         }
       }
 }

}
