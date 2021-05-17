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

