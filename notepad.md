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

when swing is pressed, variable is set to X
when swing is pressed again, variable is set to O

when swing variable is set to X: execute 


overlay visual on powerbar to indicate the power? draw it using transparent png maybe...
