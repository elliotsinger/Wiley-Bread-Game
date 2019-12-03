//create an empty array called balls
let students = [];
let slices = [];

//create a variable to hold your avatar
let me;
let breadroll;

function preload(){
  breadroll = loadImage('breadroll.png')
}


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, height/2, 3);

  for (let i = 0; i < 300; i++){
      let b = new Bread(random (175,315), random (150,240),false);
      slices.push(b);

  }


}


function draw(){
	background(220);




  strokeWeight(4);
  stroke(51);
  fill(0,0,0, 10);
  rect(175, 150, 150, 100);

  for (let i = 0; i < slices.length; i++) {
          slices[i].drawBread();

    }

    me.drawMe();
    me.moveMe();

  if (frameCount % 100 == 0) {
      let  b = new Students(width, random(0,height), -3, false);
      students.push(b);
    //  console.log(balls); //print the balls array to the console
    }

if (frameCount % 100 == 0) {
        let  b = new Students(0, random(0,height), 3, false, false);

        students.push(b);
      //  console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
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
        this.speed = random(1,5);
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
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

  }

}


//ball class from which to create new balls with similar properties.
class Students {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed, hitWiley, hasBread){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.hitWiley = hitWiley;
    this.hasBread = hasBread;

	}

	// draw a ball on the screen at x,y
	drawStudents(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveStudents(){
		this.x = this.x+ this.speed;
		//this.y = this.y+random(.5,5);
    if (this.y <200){
      //slope = [y+{200-y}]/250);
      this.y = this.y+(200+this.y)/250;
    }
    if (this.y >200){
    //  slope = [y-{200-y}]/250);
    this.y = this.y -(200+this.y)/250;
    }

	}

takeBread (){
  for(let i=0; i<slices.length; i++){
    if (this.x>= slices [i].x && this.x<= slices[i].x + 10 && this.y <=slices[i].y && this.y <=slices[i].y + 10 && this.hasBread == false){
      slices[i].follow = true
      this.hasBread = true
      print("got a bread")
    }
  }

}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	loseBread(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-30 && this.y < me.y+60 && this.hitWiley == false){
          this.hitWiley = true
          this.speed = this.speed;

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

moveBread (){
for(let i=0; i<students.length; i++){
  if (this.hasBread = true){
    this.follow = true
    // this.x = students[i].x
    // this.y = students[i].y

 this.x = 100;
 this.y = 100;

      }
    }
  }
}
