document.addEventListener('DOMContentLoaded',domloaded,true);
function domloaded(){
    // your code here.

const swingButton = document.querySelector('input[type="reset"]')
const reset = document.querySelector('reset[class="button"]')

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    
function tiger() {
    document.getElementById("z").src="./images/tigerlong2.gif"
}
    
function ballwin() {


        setTimeout(function(){
            hype.volume = 0.4
            hype.play();
            tiger();
        }, 4800);
        setTimeout(function(){
            document.getElementById("z").src=""
        }, 3000);
        

}

// ~~~~~~ most variables~~~~~~~~~~~
var shouldStartTimer = true;
var intervalId = null; 
var swingPower = 0;


var canvas = document.getElementById("layerTwo");
var ctx = canvas.getContext("2d");
  
var teeToGreen = document.getElementById("layerOne");
var holeDistance = teeToGreen.getContext('2d');
var shapes = teeToGreen.getContext('2d');





// coordinates for the hole
var xStart = randomInteger(100, 400)
var yStart = randomInteger(800, 950)
var xHole = randomInteger(50, 400)
var yHole = randomInteger(50, 250)


var xBall = xStart
var yBall = yStart


var xGreen = xHole - (randomInteger(15, 60));
var yGreen = yHole - (randomInteger(15, 60));
var wGreen = randomInteger(75, 120);
var hGreen = randomInteger(75, 120);
//tee marker, visuals
var xTee = xStart - 40
var yTee = yStart - 15
var leftPos = xStart - 20
var rightPos = xStart + 20

var gameStatus = null;
var hype = document.getElementById("hype"); 
var lowstinger = document.getElementById("lowstinger"); 
var swing = document.getElementById("swing"); 



// // DOM situation to update a variable?
// var xBall = document.getElementById("xBall").value == "1"
   
// var yBall = document.getElementById("yBall").value == "1"


var xDistance = xStart - xHole;
var yDistance = yStart - yHole;



const theBrendan = (x, y, x2, y2) => {
    return Math.round(Math.sqrt((x - x2) ** 2 + (y - y2) ** 2));
}

var distanceToHole = theBrendan(xStart, yStart, xHole, yHole);

var swingDistance = swingPower * distanceToHole * .01;

var hitDistance = null
var winningDistance = .9 * distanceToHole;


// ~~~~~~~~ end of variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// console.log('x start y start: ' + xStart + " | "+ yStart)
// console.log('x hole y hole: ' + xHole + " | "+ yHole)
// console.log("Your Swing Distance inside power is : " + swingDistance)
// console.log("this is the numeric value of xDistance: " + Math.abs(xDistance))
// console.log("this is the numeric value of yDistance: " + Math.abs(yDistance))
// console.log("this is the distance to hole: " + distanceToHole);
// console.log("this is winning distance: " + winningDistance)


holeDistance.beginPath(0,0); // <--- not sure what this does.
holeDistance.moveTo(xStart, yStart); // xStart,yStart <---- plug in the above
holeDistance.lineTo(xHole, yHole); // xHole, yHole <--- plug in the above

// this is the green hole location
   
shapes.rect(xGreen, yGreen, wGreen, hGreen); //can add border for rough edge, 15px maybe  <-- this is aesthetics
shapes.fillStyle = "#7cfc00"; // this is the green box
shapes.fill();

// for some reason this has to be here??? or else the boxes wont fill properly
shapes.beginPath();
shapes.fillStyle = "white"; // this is the hole cup
shapes.arc(xHole, yHole, 10, 0, 5 * Math.PI);
shapes.fill(); 

shapes.rect(xTee, yTee, 75, 30 );
shapes.fillStyle = "#4ea12b"; // this is the tee box
shapes.fill();


shapes.beginPath();
shapes.fillStyle = "white"; // this is the hole cup
shapes.arc(xHole, yHole, 10, 0, 5 * Math.PI);
shapes.lineWidth = 1;
shapes.strokeStyle = 'black';
shapes.stroke();
shapes.fill();


shapes.beginPath(); // <--- ball canvas 2
shapes.arc(xBall, yBall, 5, 0, Math.PI*2); // <- fill xGraph, yGraph
shapes.fillStyle = "red";
shapes.fill();
shapes.lineWidth = 1;
shapes.strokeStyle = 'black';
shapes.stroke();
shapes.closePath();

// shapes.beginPath();
// shapes.arc(xStart, yStart, 2, 0, 2 * Math.PI);
// shapes.fillStyle = "black"; // this is the ball
// shapes.fill();
// shapes.strokeStyle = "white";
// shapes.stroke();

shapes.beginPath();
shapes.arc(leftPos, yStart, 2, 0, 2 * Math.PI);
shapes.fillStyle = "blue"; // this is the left pin
shapes.fill(); 

shapes.beginPath();
shapes.arc(rightPos, yStart, 2, 0, 2 * Math.PI);
shapes.fillStyle = "blue"; // this is the right pin
shapes.fill();

function drawStatic() {

    shapes.rect(xGreen, yGreen, wGreen, hGreen); //can add border for rough edge, 15px maybe  <-- this is aesthetics
    shapes.fillStyle = "#7cfc00"; // this is the green box
    shapes.fill();

    // for some reason this has to be here??? or else the boxes wont fill properly
    shapes.beginPath();
    shapes.fillStyle = "white"; // this is the hole cup
    shapes.arc(xHole, yHole, 10, 0, 5 * Math.PI);
    shapes.fill(); 

    shapes.rect(xTee, yTee, 75, 30 );
    shapes.fillStyle = "#4ea12b"; // this is the tee box
    shapes.fill();


    shapes.beginPath();
    shapes.fillStyle = "white"; // this is the hole cup
    shapes.arc(xHole, yHole, 10, 0, 5 * Math.PI);
    shapes.lineWidth = 1;
    shapes.strokeStyle = 'black';
    shapes.stroke();
    shapes.fill();


    shapes.beginPath(); // <--- ball canvas 2
    shapes.arc(xBall, yBall, 5, 0, Math.PI*2); // <- fill xGraph, yGraph
    shapes.fillStyle = "red";
    shapes.fill();
    shapes.lineWidth = 1;
    shapes.strokeStyle = 'black';
    shapes.stroke();
    shapes.closePath();

    shapes.beginPath();
    shapes.arc(leftPos, yStart, 2, 0, 2 * Math.PI);
    shapes.fillStyle = "blue"; // this is the left pin
    shapes.fill(); 

    shapes.beginPath();
    shapes.arc(rightPos, yStart, 2, 0, 2 * Math.PI);
    shapes.fillStyle = "blue"; // this is the right pin
    shapes.fill();
}



// ~~~~~second canvas~~~~~~~~

// ctx.beginPath(); // <--- ball canvas 2
// ctx.arc(xBall, yBall, 10, 0, Math.PI*2); // <- fill xGraph, yGraph
// ctx.fillStyle = "#0095DD";
// ctx.fill();
// ctx.closePath();


function drawBall() {
    shapes.beginPath(); // <--- ball canvas 2
    shapes.arc(xBall, yBall, 5, 0, Math.PI*2); // <- fill xGraph, yGraph
    shapes.fillStyle = "red";
    shapes.fill();
    shapes.lineWidth = 1;
    shapes.strokeStyle = 'black';
    shapes.stroke();
    shapes.closePath();
     }
  
function drawCup() {
    shapes.beginPath();
    shapes.fillStyle = "white"; // this is the hole cup
    shapes.arc(xHole, yHole, 10, 0, 5 * Math.PI);
    shapes.lineWidth = 1;
    shapes.strokeStyle = 'black';
    shapes.stroke();
    shapes.fill();
   }
// ~~~~~~~~ second canvas~~~~~~~~~~~~~


// this is the end of the tee box location

// var playerSkill = .01 * swingPower * distanceToHole;


function draw() {
    drawStatic()
    shapes.clearRect(0, 0, canvas.width, canvas.height);
    if(yBall < yHole) {
      yBall++
    } else if (yBall > yHole) {
      yBall--
    }
    if(xBall < xHole) {
      xBall++
    } else if (xBall > xHole) {
      xBall--
    }
    if (xBall == xHole && yBall == yHole) {
      clearInterval(ballMovement)
    }
    drawStatic();
    drawCup();
    drawBall();  
}

function ballMovement() {
    setTimeout(function(){
        var ballMovement = setInterval(draw, 5);
    }, 800);
}



const holeInOne = () => {
    
    if (swingPower < 50) { // if you change this to swingDistance < winning distance, it doesnt work
        
        swing.play();
        swing.volume = 0.6
        gameStatus = false;
       
        console.log('you lose')
        console.log("Your swing Distance is: " + swingDistance)
        console.log("this is winning distance: " + winningDistance)
    } else {
        gameStatus = true;
        lowstinger.volume = .6
        lowstinger.play();
        ballMovement();
        ballwin();
 
        console.log('you win')
     }
}


 swingButton.addEventListener('click', (e) => {  
    var elem = document.getElementById("myBar");   
    var reverse = false;
    let power = () => {
        
        if (reverse == true) {
            swingPower--;
            // console.log(swingPower)
            elem.style.width = swingPower + '%'
            if (swingPower < 1) {
                reverse = false
            }
        } else {
            swingPower++; 
            // console.log(swingPower)
            elem.style.width = swingPower + '%';
            if (swingPower > 99) {
                reverse = true
            }
        }
        window.swingDistance = swingDistance; 
        }
        if (shouldStartTimer) {
            intervalId = setInterval(power, 10);
            shouldStartTimer = false;
        } else {
            clearInterval(intervalId);
            shoudStartTimer = true;
            holeInOne()
        }
      
 })
 


}
// ~~~~~~~~~~~~~ this is the end of the dom content loader ~~~~~~~~~~~~~~~ //


// swingButton.addEventListener('click', () => {
//       console.log(target)
// })

