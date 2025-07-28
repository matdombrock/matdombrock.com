<steelsky>
{
  "title":"Detecting A Key Press In JavaScript",
  "description":"Detecting and accepting keyboard input on your web app or site or game is something that can greatly improve the experience of your users.",
  "tags":"#programming #js",
  "type":"post",
  "date":"2018-09-01"
}
</steelsky>
# Detecting A Key Press In JavaScript

## Introduction
Detecting and accepting keyboard input on your web app or site or game is something that can greatly improve the experience of your users. HTML already has ways to collect text based input like this:

```
<input type="text">
```
However, that's not what we're going for here. We want to detect keyboard input without the user having to type into an input field. 

## Detecting A Key Press
```javascript
document.onkeypress = function () {
    console.log("Key was pressed")
};
```
So now we can detect when the user has pressed a key but that's not super useful on it's own.

In order to make this a little more useful we need to know which key was pressed. We can check this by looking at the 'keyCode' sent by the `onkeypress` event:
```javascript
document.onkeypress = function (e) {
    e = e || window.event
    console.log(e.keyCode)
};
```
This will output any subsequent key press 'keyCode' to the command line. 

Now we just need to know the 'keyCode' of the key we want to detect. We can tell from our output that they 'keyCode' for "a" is 97. So if we wanted to detect when the "a" key was pressed we could do:
```javascript
document.onkeypress = function (e) {
    e = e || window.event
    console.log(e.keyCode)
    if(e.keyCode = 97){
	    console.log('"a" was pressed')
    }
};
```
## Detecting Key Up And Key Down
We can get a little more specific and look for when the key is pressed down and when the key is released. This can be useful for games and also for detecting key combinations.

Let's detect the "a" key again but this time only when it is released:
```javascript
document.onkeyup = function (e) {
    e = e || window.event
    console.log(e.keyCode)
    if(e.keyCode = 97){
	    console.log('"a" was released')
    }
};
```

We can detect the opposite with:
```javascript
document.onkeydown = function (e) {
	//...
}
```
It seems like 'keydown' and 'keypressed' do the same thing but they are slightly different. One happens before the other:
```javascript
window.addEventListener("keyup", log);
window.addEventListener("keypress", log);
window.addEventListener("keydown", log);

function log(event){
  console.log( event.type );
}
// output after pressing a key:
// keydown
// keypress
// key up
```
