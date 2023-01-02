<steelsky>
{
  "title":"Moving With A Matrix",
  "description":"This guide will attempt to explain how we can move (translate) an object (set or shape) in a two dimensional matrix which is a key concept of graphics programming",
  "tags":"#programming #js #guide #hacking #electronics"
}
</steelsky>
# Moving With A Matrix

## Introduction
This guide will attempt to explain how we can move (translate) an object (set or shape) in a two dimensional matrix which is a key concept of graphics programming.

**NOTE:** *All of the code in this guide is in a JavaScript syntax but the concepts should apply to any language you want to write in. JavaScript was chosen because it is commonly understood and makes working with arrays and matrices fairly easy. However, I have made an attempt to keep the example code as verbose as possible so it will make some sense to people who do not know JavaScript.*
 
Say we have an 8x4 2D binary matrix:
```
00000000
00000000
00000000
00000000
```
To bring it into less abstract terms, imagine this as a 2D matrix of LED bulbs. Basically a very low resolution display.

## Origins
It might be tempting to call the bottom left entity "1,1" or "0,0" and call the top right entity "7,3" or "8,4". After all this is the way that we learn coordinates in school. Usually our origin is at the bottom-left. The X axis goes right and the Y axis goes up.

This will technically work in computing but it's not the way things are typically done due to the long and complicated history of early displays. Some would argue that this method (origin at the top-left) makes more sense than than having the origin at the bottom-left. This after all is the way that we read in English; top-left to bottom-right. This is also typically how we store, read, and parse data in computing. It also allows us to treat the first entity of our matrix as the origin which is pretty neat. 

This can be hard to wrap your head around if you are used to the way that graphing works in traditional mathematics. To put it simply though, all we are really doing is inverting our Y axis. 

The obvious down side to this is that in computing we typically use a lot of math. Even more so in computer graphics. So for instance when drawing something using sin, cos or tan you need to invert your y-axis parameter or you will have an inverted result. This of course won't break any of your math but you need to be a little more careful because of it.

Anyway, the purpose of this guide is not to debate this topic (though that might be a good article to write at some point). So moving forward, let's assume that our origin is at the top-left and let's call that origin "0,0" since we are working with computing and programmers like counting from zero ([unless you <3 Lua](http://lua-users.org/wiki/CountingFromOne)).

So let's call the first matrix entity "0,0" and the last "7,3".

```
 X-------
Y00000000
|00000000
|00000000
|00000000
```

## Objects
Now that we've agreed on our origins and axes we can work on defining an "object". An "object" in our case is just going to be a collection (specifically a 2D array) of X,Y coordinates.

Our object might look something like this:
```javascript
object = [
	[0,0],
	[1,0],
	[2,0]
]
```
We can "draw" to our binary matrix by changing the values from 0 to 1. If this were an LED matrix display we could imagine that 0 means the lights are off and 1 means the lights are on.

Drawn onto our matrix this would something like this:
```
11100000
00000000
00000000
00000000
```
Let's try something a little more complex:
```javascript
object = [
	[0,0],
	[1,0],
	[2,0],
	[0,1],
	[1,1],
	[2,1],
	[0,2],
	[1,2],
	[2,2]
]
```
Now we have drawn a simple 3*3 square at our origin. It might not look like a square because of the font being used but rest assured it is.
```
11100000
11100000
11100000
00000000
```
If this is hard to conceptualize, try thinking of the object we defined like this:
```javascript
object = [
	[0,0],[1,0],[2,0],
	[0,1],[1,1],[2,1],
	[0,2],[1,2],[2,2]
]
```
## Moving Objects
When moving or "translating" (as they call it in geometry) and object or "shape/set" (as they call it in geometry) in a 2D matrix there are 4 basic directions that you can move. Up, down, left and right. Technically you could argue that it's possible to move in 8 directions, because you can also move diagonally but since that is really just doing two translations so I don't think that counts.

Consider how each entity in our object is a pair of X,Y coordinates. You can think of each of these entities as a "bit" or "part" or "pixel" or "chunk" or "atom" of the object (or whatever makes sense to you). In this specific case they are in fact representing bits, but this concept remains the same no matter what they represent. To keep this guide open ended I will refer to them as "chunks".

### Creating Rules
In order to move an object within our matrix, we need to move each "chunk" by some given amount  in some given direction. Since all we are doing right now is translating the object, this is actually really easy because we're not worried about changes in rotation or scale at this point. What that means is that each "chunk" of the object will be moving the same distance in the same direction.

So let's make some rules about what it actually means to move something in a matrix:
```
Up: y+1
Down: y-1
Left: x-1
Right: x+1
```

Wait a second! Have we already forgotten that we have to flip our Y axis when we do math? It looks like we have (or maybe that was just to make a point). We have to remember that [**up is now down and down is now up**](https://www.youtube.com/watch?v=6KqL4Uh2nHo). 

So what I actually meant is:
```
Up: y-1
Down: y+1
Left: x-1
Right: x+1
```
To demonstrate what I wrote before about diagonals not being real translations consider this:
```
Up-Right: y-1 + x+1 or Up + Right 
Down-Right: y+1 + x+1 or Down + Right
Up-Left: y-1 + x-1 or Up + Left
Down-Left: y+1 + 1-x or Down + Left
```
You can also think of these rules as functions:
```javascript
function up(x,y){
	return [x,y-1]
}
function down(x,y){
	return [x,y+1]
}
function left(x,y){
	return [x-1,y]
}
function right(x,y){
	return [x+1,y]
}
```
We could also write these functions to take our object entities (coordinate pairs) as a single parameter:
```javascript
function down(coords){
	return [coords[0],coords[1]+1]
}
```

### Using Rules
So how do we actually make use these rules we created? This is where programming comes into play.

Like I was saying, to translate and object in a matrix, we just need to move all of it's "chunks" in the same direction by the same distance. So to move an object we simply apply our rule for the given direction to all of the entities (coordinate pairs) in our object.

Consider the following code:
```javascript
// This is JavaScript and you can run it
function down(coords){
	return [coords[0],coords[1]+1]
}
var object = [
	[0,0],[1,0],[2,0],
	[0,1],[1,1],[2,1],
	[0,2],[1,2],[2,2]
]

// move the object
var length = object.length
for(var i = 0; i < length; i++){
	object[i] = down(object[i])
}
```
We could also make a function to move an entire object at once:
```javascript
function moveObjectDown(object){
	for(var i = 0; i < object.length; i++){
		object[i] = down(object[i])
	}
	return object
}
```
We could print the object onto the matrix with the following code:
```javascript
function printMatrix(length, height, object){
	for(var y = 0; y < height; y++){
		var out = ""
		for(var x = 0; x < length; x++){
			var isOn = false
			for(var i = 0; i < object.length; i++){
				if(object[i][0]==x && object[i][1]==y){
					isOn = true
				}
			}
			if(isOn){
				out += "1"
			}else{
				out += "0"
			}
		}
		console.log(y+": "+out)
	}
}
printMatrix(8,4,object)
```
## Code Example
Putting this all together we could try the code:
```javascript
// This is JavaScript and you can run it
function printMatrix(length, height, object){
	for(var y = 0; y < height; y++){
		var out = ""
		for(var x = 0; x < length; x++){
			var isOn = false
			for(var i = 0; i < object.length; i++){
				if(object[i][0]==x && object[i][1]==y){
					isOn = true
				}
			}
			if(isOn){
				out += "1"
			}else{
				out += "0"
			}
		}
		console.log(y+": "+out)
	}
}
function moveObjectDown(object){
	for(var i = 0; i < object.length; i++){
		object[i] = down(object[i])
	}
	return object
}
function down(coords){
	return [coords[0],coords[1]+1]
}
var object = [
	[0,0],[1,0],[2,0],
	[0,1],[1,1],[2,1],
	[0,2],[1,2],[2,2]
]
// show the default matrix
console.log("starting matrix")
printMatrix(8,4,object)

// move the object down
console.log("move the object down")
object = moveObjectDown(object)
printMatrix(8,4,object)

/// move the object down again
console.log("move the object down again")
object = moveObjectDown(object)
printMatrix(8,4,object)
```

## Conclusion
We have now translated an object in a 2D matrix. You can easily apply what we did above to move the object in any direction and by any amount you want. Based on this, how do you think you would rotate or scale an object? How can you translate a 3D object in a 3D matrix? These are all questions for another guide.