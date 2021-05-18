OBJECTIVES: 
focus on topdown game


And then work on everything else.

Win condition?
// hole in one, matching interval with power thats has leeway of +10%, with correct degree,
// if ball = hole U WIN



// stretch condition 1, getting "different clubs" for chipping and putting
// stretch condition 2, getting putting as its own shooting game within the game but with a smaller grid.
// celebration gifs, using music to make silly montage of people going super saiyan while hitting the ball


ball flying across the screen:
https://billmill.org/static/canvastutorial/library.html


ball dropping js thing:
https://plnkr.co/edit/rnGU4RsR71ShA8kE?p=preview&preview

collision detection:
https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection




need a canvas for ball moving over hole,

can you stack canvas's on top of each other !!! 
 - yes you can. theyre transparent and you use z-index
https://html5.litten.com/using-multiple-html5-canvases-as-layers/



get help with making a math.random function to spit out numbers, ( done)


need to integrate this into the power bar function
https://stackoverflow.com/questions/5496576/increase-and-decrease-a-variable-until-a-number-is-reached-in-javascript

this bar needs to get the distanceToHole[x] 
i need it fit whtin 100%


the interval goes up from 1-100 and then back down
850 --> 100%, 10% 850, 20% of 850 ~
x = 850

make interval goes up and down

24% = 204yd

100% power interval  ==.01 ~ 1

interval = ()


also plotting out points on canvas is confusing.



power bar is made, thanks for Jorge Casique!
but need to finesse when clicking "swing" - line 12 
need to only take two clicks to turn off and on


toggling two clicks? seems to be a lot of onclick events.
maybe from tictactoe?



can you use turn function to implement the button toggle?

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

console log shows width 0-100 

when swing is pressed, variable is set to X
when swing is pressed again, variable is set to O

when swing variable is set to X: execute 


overlay visual on powerbar to indicate the power? draw it using transparent png maybe...



if swing button is pressed twice, log swingpower and clear interval?





ball has to travel the equivalent of swingPower percent x distanceToHole






curving mechanic??
https://www.geeksforgeeks.org/how-to-draw-smooth-curve-through-multiple-points-using-javascript/
https://www.geeksforgeeks.org/p5-js-curve-function/



https://www.html5rocks.com/en/tutorials/canvas/performance/#toc-mul-canvas



plotting the graph point
// y = mx + b
// var yGraph = (yHole - yStart)
// var xGraph = (xHole - xStart)

// var m = yGraph / xGraph

// b = xStart - m * yStart  // <-- maybe useful.

 
review this solution tomorrow
 https://stackoverflow.com/questions/17083580/i-want-to-do-animation-of-an-object-along-a-particular-path


all useful information is being console logged, just interpret it.
figure out how to update or subtract ball coordinates values to hole coordinates with a variable to move "the ball" its a function that can be called on.
 

this is an infinite function.
function draw() {
    
    drawBall();
     
    while(xGraph !== xHole && yGraph !== yHole) {
      if(xStart < xHole) {
          xGraph++
          console.log(xGraph)
      } else {
          xGraph--
          console.log(xGraph)
      }
      if(yStart < yHole) {
          yGraph++
          console.log(yGraph)
      } else {
          yGraph--
          console.log(yGraph)
      }
    }
    
}

var swingDistance = (swingPower * .1) * distanceToHole
console.log("Your Swing Distance is: " + swingDistance)

when implementing club selection logic.
if game status != true (null)
    if distancetohole != 0 {
        swing 
       if swingpower% * maxClubDistance(300(driver),200(fairway),150(Iron),100(Wedge),50(Putter) > distancetoHole {
        update distanceToHole;
        update ball position
       } else {
           play ballWin() (celebration track)
       }

    }
if distance to hole - clubDistance is < clubDistance
update distanceToHole, choose club, swing again.

else you win!

swing again, choose club, update distance to hole




// new problem; 
need to convert this local function into a global function to access variables.




clean up the buttons situation. swing, new hole ( add celebration button after you got hole in one)





math is 
set the  value of the hole
set the value of the ball

dont update eveyrtime


let xIncrement = xBall / xHole
let yIncrement = yBall / yHole

var x = 10;
var interval = 1000;

for (var i = 0; i < x; i++) {
    setTimeout(function () {
        // Do Something
    }, i * interval)
}


can you set the interval? and that selects the 

distance = set increment? to adjust the incremenet to basically move the ball??

if x/y is greater > , --
if x/y is less than > , ++
x start y start: 234 | 924
x hole y hole: 309 | 52

we are 
xBall++ || yBall--

((xBall + 5) > (xHole) && (xBall - 10) < (xHole + 5) || && || (yBall + 5) > (yHole) && (yBall - 10) < (yHole-5))

leftside
if x ball + 5 is greater than x hole 
&and& 
rightside
x ball - 10 is less than xHole + 5 

&&
top
if yball + 5  > y Hole  
&and&
bottom 
yball - 5 greater than yHole + 15

314 > 309 && 299 < 309

57 > 52 && 57 > 52





y=mx+b
http://zonalandeducation.com/mmts/functionInstitute/linearFunctions/new/lsif0.php#:~:text=The%20formula%20y%20%3D%20mx%20%2B%20b,(x%2C%20y)%20plane.&text=When%20the%20function%20for%20a,'slope%2Dintercept%20form'.




choosing club, max hitting distance 
angle affects distance
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate <--- integrate this into ball>




Object.keys(club)[0] = will return the name
Object.values(club)[0] = will return the "value" of the club ( the distance)



need to disable the swing button after being clicked twice.


swing distance = swing power * club selection  * .01 = this updates to max club distance



so you take the hypotenuse, square it, divide that number by 2, get the square root of that number, 
when you swing, that swing distance # updates your pythagorean theorem???
ball location --> new ball location


new ball location updates ball location



collision detection : win condition.
if ball comes into contact with hole, you win
if ((xBall + 20) > (xHole) && (xBall - 5) < (xHole + 15) && (yBall - 10) > (yHole) && (yBall - 5) < (yHole + 15)) {
        clearInterval(ballMovement);
        console.log("ball is cleared");
    }



interval set instead of let, do a while loop
roundswingdistance = math.round(swingPower * distanceToHole * 0.01)

need to adjust ball movement function ( draw function ) 
loop this function x amount of times based on the swing index which is determined by swing power * distance to hole * .01
for i = 0; i < wholeSwingDistance; i++ {
    
}

var ySumBtH = Math.abs(xBall - xHole)
var xSumBtH = Math.abs(yBall - yHole)


var sumBtH = xSumBtH + ySumBtH
distance to hole = su

this is the distance to hole: 855
this is the numeric interval ball to hole: 1013

how do you get distance to hole = to sumBth
795
sumBtH * swingPower * 0.01

interval is Math.round(sumBtH * swingPower * 0.01);


maybe change club automatically based on distance to hole with if statements.



club value * swing power * .01 = hitDistance
300 * 100 * 0.01 = 300

ball start (xball,yBall) 
xincrement 

number of times this repeats = hitDistance

xincremenet += xBall coordinate

angle of hit distance 

(360,888). y=mx+b or 888=3 × 360+b, or solving for b: b=888-(3)(360). b=-192.
y = mx + b
888=(3×360)+b,
B = -192
yBall = slopeIndex * xBall + bBall


what am i trying to find:
im trying to find the increment

end coordinate?

if ball goes out of canvas, reset to , + 1 stroke.
angle of ball = player chooses arrow keys over 360 degrees



for hitDistance number {
playerAngle + xBall += xBall 
playerangle +  yBall += yBall 
}




pythagorean is needed to know how far away the hole is  (distance to hole)
And then y = mx + b is to get the ball towards the hole but based on the angle the player chooses (new ball coordinates)


click button choose an array 