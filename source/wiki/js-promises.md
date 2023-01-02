<steelsky>
{
  "title":"JS Promises Explained",
  "description":"A guide on JS promises.",
  "tags":"#programming #js #guide"
}
</steelsky>
# JS Promises Explained

## A Quick Example
Before I get started I will show a quick example of an implementation of promises for reference.
```javascript
function createPromise(input){
    return new Promise(function(resolve,reject){
        //do something
        resolve(input);
    })
}
let testPromise = createPromise(1);
testPromise.then(function(data){
    console.log(data);
});
```
## Introduction
A lot of the power of JavaScript comes from the fact that it's an asynchronous language. This means that we don't have to wait for one operation to finish before moving on to another. Some languages do this with threading, but sine JS is a single-threaded language, we use callbacks or promises. 

If you are already familiar with the concept of a callback then a the idea of a promise should be pretty easy to grasp. A promise works in much the same way as a callback but allows us to write cleaner code that is is easier to read and debug. 

A phrase often used in programming is "Callback Hell". Simply put this is the state of having too many callbacks nested inside of each other. One calling the other and each pushing your next block of code further to the right. 

## Callback Hell?

```javascript
function thing(num,data,callback){
    data += " Thing "+num+" ";
    callback(data);
}
let num = 1;//each function will add one thing to our string
thing(num,"Data: ",function(data){
    num+=1;
    console.log(data);
    thing(num,data,function(data){
        num+=1;
        console.log(data);
        thing(num,data,function(data){
            num+=1;
            console.log(data);
            //enter callback hell
            thing(num,data,function(data){
                num+=1;
                console.log(data);
                thing(num,data,function(data){
                    console.log(data);
                });
            });
        });
    });
});
```
Expected Output:
```
Data:  Thing 1,
Data:  Thing 1, Thing 2,
Data:  Thing 1, Thing 2, Thing 3,
Data:  Thing 1, Thing 2, Thing 3, Thing 4,
Data:  Thing 1, Thing 2, Thing 3, Thing 4, Thing 5,
```
Of course this is an overly simplified example that doesn't really do anything that requires callbacks, but hopefully the point has been illustrated. 


## So How Do Promises Help?
Here is the same logic but using promises instead of callbacks.
```javascript
function thing(num,data){
    return new Promise(function(resolve,reject){
        data += " Thing "+num+" ";
        resolve(data);
    });
}
let num = 1;
let result = thing(num,"Data: ");
result.then(function(data){
    num+=1;
    console.log(data);
    return thing(num,data);
}).then(function(data){
    num+=1;
    console.log(data);
    return thing(num,data)
}).then(function(data){
    num+=1;
    console.log(data);
    return thing(num,data)
}).then(function(data){
    num+=1;
    console.log(data);
    return thing(num,data)
}).then(function(data){
    console.log(data);
});
```
As you can see this code isn't much shorter but it is much easier to read and involves less scrolling to the left.

## How Do I Actually Use These Things?
Here is a bare-bones example of how to implement a promise. First we create a new promise, then we resolve it.
```javascript
function createPromise(input){
    return new Promise(function(resolve,reject){
        //duplicate input
        input += input;
        resolve(input);
    })
}

let testPromise = createPromise(1);

testPromise.then(function(data){
    console.log(data);
});

```
The expected output would be:
```
2
```
**Here is the same logic using callbacks for reference:**
```javascript
function createCallback(input,callback){
    //duplicate input
    input+=input;
    callback(input);
}

createCallback(1,function(data){
    console.log(data);
})
```
The expected output would also be:
```
2
```
## What About The Real World?
In real life, none of the examples so far have actually done something asynchronous. Like I said above, this is the real power of promises. So let's go ahead and setup an actual real life example of using promises. 

For this example we are going to read some data from an external JSON file and then iterate through it listing the names in the file.

```javascript
//NodeJS
const fs = require('fs');

function readData(){
    return new Promise(function(resolve,reject){
        fs.readFile('data.json', 'utf8', function(err, contents) {
            contents = JSON.parse(contents);
            resolve(contents);
        });
    })
}

let read = readData();
read.then(function(data){
    for(index in data){
        console.log(data[index].name);
    }
});
```

## [NOTE] Async/Await
We can also make use of the new ```await``` functionality. This allows us to use promises in a little more friendly manner. 
```javascript
var test = function (data){
    return new Promise(function(resolve,reject){
        setTimeout(() => resolve(data), 1000)
    });
}
async function test2(){
    var t = await test("test");
    return t;
}
test2().then(function(data){
    console.log(data);
});
// Outputs "test" after 1 second.
```

## Further Reading

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

[Google Developers](https://developers.google.com/web/fundamentals/primers/promises).