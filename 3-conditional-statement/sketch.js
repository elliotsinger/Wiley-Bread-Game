//create an empty array called balls
let balls = [];
let crocodile;

//create a variable to hold your avatar
let me;
let mySound;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('cartoonexplosion.wav');
  crocodile = loadImage ('crocodiledrawing.png');
}

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);

    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    	  image (crocodile, this.x, this.y);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("purple");
		  triangle(this.x,this.y, this.x+40, this. y, this.x+20, this.y+20);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            mySound.setVolume(0.1);
            mySound.play();
    		}
  	}

}
