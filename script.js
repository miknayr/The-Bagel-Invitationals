document.addEventListener('DOMContentLoaded',domloaded,true);
function domloaded(){
    // your code here.

const swingButton = document.querySelector('input[type="reset"]')
// const swingButton = document.querySelector('button[class="button"]')

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  swingButton.addEventListener('click', (e) => {  
    var elem = document.getElementById("myBar");   
    var swingPower = 0;
    var reverse = false;
   
    var id = setInterval(power, 10); // <-- power is fucntion, 1000 is ms, 10 is good
    function power() {
       
       
            if (reverse == true) {
                
                console.log(swingPower)
                swingPower--;
                elem.style.width = swingPower + '%'
                if (swingPower < 1) {
                    reverse = false
                }
             
            } else {
               
                console.log(swingPower)
                swingPower++; 
                elem.style.width = swingPower + '%';
                if (swingPower > 99) {
                    reverse = true
                }
            }
        
    }
  })


var teeToGreen = document.getElementById("myCanvas");
var holeDistance = teeToGreen.getContext("2d");
var greenHole = teeToGreen.getContext("2d");
var teePin = teeToGreen.getContext("2d");

// coordinates for the hole
var xStart = randomInteger(100, 400)
var yStart = randomInteger(800, 950)
var xHole = randomInteger(50, 400)
var yHole = randomInteger(50, 250)


const theBrendan = (x, y, x2, y2) => {
    return Math.round(Math.sqrt((x - x2) ** 2 + (y - y2) ** 2));
}

var distanceToHole = theBrendan(xStart, yStart, xHole, yHole);


console.log(distanceToHole);

holeDistance.beginPath(0,0); // <--- not sure what this does.
holeDistance.moveTo(xStart, yStart); // xStart,yStart <---- plug in the above
holeDistance.lineTo(xHole, yHole); // xHole, yHole <--- plug in the above
holeDistance.lineWidth = 0; // <--- figure out what this does
holeDistance.stroke(); // <-- figure out what this does.



greenHole.beginPath();
greenHole.arc(xHole, yHole, 6, 0, 2 * Math.PI);
greenHole.fillStyle = "grey";
greenHole.fill();
greenHole.strokeStyle = "black";
greenHole.stroke();


teePin.beginPath();
teePin.arc(xHole, yHole, 3, 0, 2 * Math.PI);
teePin.fillStyle = "black";
teePin.fill();
teePin.strokeStyle = "black";
teePin.stroke();

  

// interval that goes up to the max distance + 50, and then back down, with bar indicating 25%, 50% and 75% and 90%, at a rate of 50ms ? something possible...
// interval controls the yBall for distance, space bar to toggle power?
// degree to control the aim, like the clock but can be manual moved with indicator for where its pointing. using keyboard? 


// can intervals go to the max and then back down?


// these four, x y w h, control position of the green, should be randomly generated but scaled off of the hole location
//var xGreen = point of xHole, value is xHole minus (more than or equal to 15 but less than or equal to 60 )

// this is the green hole location
var xGreen = xHole - (randomInteger(15, 60));
var yGreen = yHole - (randomInteger(15, 60));
var wGreen = randomInteger(75, 120);
var hGreen = randomInteger(75, 120);


var rectangle = document.getElementById('myCanvas');
var greenBox = rectangle.getContext('2d');
greenBox.rect(xGreen, yGreen, wGreen, hGreen); //can add border for rough edge, 15px maybe  <-- this is aesthetics
greenBox.lineWidth = 1;
greenBox.stroke();
// this is the end of the green hole location



// this is the tee box location
var xTee = xStart - 40
var yTee = yStart - 15


var rectangle = document.getElementById('myCanvas');
var teeBox = rectangle.getContext('2d');
teeBox.rect(xTee, yTee, 75, 30 );
teeBox.lineWidth = 1;
teeBox.stroke();
// this is the end of the tee box location








// ~~~~~~~~~~~~~ this is the end of the dom content loader ~~~~~~~~~~~~~~~ //
}



document.addEventListener('click', () => {
    console.log('clicked canvas');
})














// can you stack canvas's on top of each other !!! yes you can. theyre transparent and you use z-index

// need to figure out how to make teebox into an element to interact with

// document.getElementById("myBtn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";



// !!! this starts the "ball"

// let canvas = document.getElementById('myCanvas')
// let context = canvas.getContext('2d');



// class Circle {
//     constructor(xpoint, ypoint, radius, color) {
//         this.xpoint = xpoint;
//         this.ypoint = ypoint;
//         this.radius = radius;
//         this.color = color;
//     }

//     draw(context) {
//         context.beginPath();
//         context.arc(this.xpoint,this.ypoint, this.radius, 0, Math.PI * 2, false);
//         context.strokeStyle = 'grey'
//         context.lineWidth = 3;
//         context.fillStyle = this.color;
//         context.fill();
//         context.stroke();
//         context.closePath();
//     }

//     changeColor(newColor) {
//         this.color = newColor;
//         this.draw(context);
//     }

   
//     clickCircle(xmouse, ymouse) {
//         const distance = 
//         Math.sqrt(
            
//             ( (xmouse - this.xpoint) * (xmouse - this.xpoint ) ) 
//             + 
//             ( (ymouse - this.ypoint) * (ymouse - this.ypoint ) ) 
//         );
//         if (distance < this.radius) {
//             this.changeColor('#56f');
//             return true;
//         } else {
//             this.changeColor('#f56');
//             return false;
//         }
//             console.log(distance);
//     }

// }


// let circle = new Circle(200,200,100, '#f56');
// circle.draw(context)


// // document.addEventListener('click' () => {
// //     console.log('clicked canvas');
// // });
// // we need to 
// canvas.addEventListener('click', (event) => {
//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     console.log ('x: ' + x + ' y: ' + y)
 
//     console.log(circle.clickCircle(x, y));

//     // console.log('click canvas');
// })

// }










// hit collision for ball into hole
// https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection


// ball moving code here https://billmill.org/static/canvastutorial/move.html maybe? jquery?
// ball moving left to right, maybe golf ball landing, can do three animations, for over under and hole in one
// https://plnkr.co/edit/rnGU4RsR71ShA8kE?p=preview&preview
// ball animation plays after 3 seconds after the ball was hit



//generate ball at xstart, ystart