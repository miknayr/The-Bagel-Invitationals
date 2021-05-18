5/14 10pm update;
- added random number generators for both the starting tee (bottom square) and the hole (top square)
- added random number generators for both tee box (bottom square) and the green box (top square)
- added "the brendan" to figure out the distance to the hole for gauging "power" (pythagorean theorem via brendan)
- bottom of code has "ball" class constructor to check out and integrate
- cleaned up code to be more efficient


5/15 11pm update;
- added colors on greens and teebox,
- added power bar and determined its value
- added start/stop function on click
- need to figure out how to bring function outside of click

- next steps are to create a object(circle/ball) and apply math formula
- dealing with if 
- ((.01% x swingPower) x distanceToHole) > 95% x distanceToHole = true


5/15 1130pm update;
- we have a "working" game! open console to see your results when you click "swing"


5/16 12am update;
- need to figure out "ball" canvas, write it in and stack it up with z-index maybe?
- otherwise, brendan has an idea.

- figure out bootstrap integration so we can add the meme screen



5/16 4pm update; 
- added audio and visual queues, volume is adjustable, understand how to extend it further right for more full screen usage
- added delay for audio to stop and image to disappear
- still need to figure out 2d interaction.


5/16 11pm update;
- added 2nd canvas, z-index:1, updated names to be layers
- created (for now) static circles that are meant to be ball and cup,
- have console.log logging all useful numbers in order to solve "golf puzzle"
- tasks; need to figure out how to update coordinates with a variable with an end,
- 
- have to figure out how to get "swingDistance < winning distance" line 173 to work.



5/17 1145am update; 
- added ball movement! all on one canvas, can clean up the code for removing multiple canvas'
- tasks; need to figure out how to put the distance into a number


5/17 2pm update;
- added bootstrap
- added background colors for bootstrap
- moved gif to "screen"
- need to work on creating variable swingdistance? maybe put them in menu to have an identity to work off of


5/17 9pm update;
- figure out how to stop the infinite loop, 
- now need to figure out how to split the swing into individual power, whether by interval or something else