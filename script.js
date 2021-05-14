document.addEventListener('DOMContentLoaded',domloaded,true);
function domloaded(){
    // your code here.



var teeToGreen = document.getElementById("myCanvas");
var holeDistance = teeToGreen.getContext("2d");

// var xStart = (anywhere between 100-400)
// var yStart = (anywhere between 800-950)

// var xHole = (anywhere between 100-400)
// var yHole = (anywhere between 250-100) <--- this is going from bottom up.
holeDistance.beginPath(0,0); // <--- not sure what this does.
holeDistance.moveTo(250, 100); // xStart,yStart
holeDistance.lineTo(250, 950); // xHole, yHole <--- this is the hole location
holeDistance.lineWidth = 0;
holeDistance.stroke();


// interval that goes up to the max distance + 50, and then back down, with bar indicating 25%, 50% and 75% and 90%, at a rate of 50ms ? something possible...
// interval controls the yBall for distance, space bar to toggle power?
// degree to control the aim, like the clock but can be manual moved with indicator for where its pointing. using keyboard? 


// can intervals go to the max and then back down?


// these four, x y w h, control position of the green, should be randomly generated but scaled off of the hole location
//var xGreen = point of xHole, value is xHole minus (more than or equal to 15 but less than or equal to 60 )
//var yGreen = point of yHole, value is yHole minus (more than or equal to 15 but less than or equal to 60) 
//var wGreen = width of green hole value is (xHole - xHole) + 60 + (random number to 100)
//var hGreen = height of green hole is yHole (yHole - yHole) + 35 + (random number to 100)
var rectangle = document.getElementById('myCanvas');
var greenBox = rectangle.getContext('2d');
greenBox.rect(225, 85, 60, 35); // ctxSquare = green?, can add border for rough edge, 15px maybe 
greenBox.lineWidth = 1;
greenBox.stroke();



// this is static and follows the starting point, cant go past the canvas

var rectangle = document.getElementById('myCanvas');
var teeBox = rectangle.getContext('2d');
teeBox.rect(210, 925, 75, 50 ); // ctxSquare = green?, can add border for rough edge, 15px maybe 
teeBox.lineWidth = 1;
teeBox.stroke();


// win condition?
// hole in one, matching interval with power thats has leeway of +10%, with correct degree,
// stretch condition 1, getting "different clubs" for chipping and putting
// stretch condition 2, getting putting as its own shooting game within the game but with a smaller grid.



}





// ball moving code here https://billmill.org/static/canvastutorial/move.html maybe? jquery?
// ball moving left to right, maybe golf ball landing, can do three animations, for over under and hole in one
// https://plnkr.co/edit/rnGU4RsR71ShA8kE?p=preview&preview
// ball animation plays after 3 seconds after the ball was hit



//generate ball at xstart, ystart