<steelsky>
{
  "title":"Using require() on the Front-end",
  "description":"How to use require in front-end javascript.",
  "tags":"#programming #js #guide"
}
</steelsky>
# Using require() on the Front-end

## Introduction

**Note: This writeup assumes that you have existing knowledge on NodeJS and the way that modules work in NodeJS (`require()`, `module.exports` ect.). To learn more about this checkout the [NodeJS Docs](https://nodejs.org/api/modules.html).** 

Honestly, I don't do a ton of front-end work these days (at least not professionally). However, something that has always really bothered me about writing front-end JS is the way the sharing code between files works. 

Whenever your front-end code is even slightly complex, you end up with something like this: 

```
<!--HTML-->
<script src ="js/script1.js"></script>
<script src ="js/script2.js"></script>
<script src ="js/script3.js"></script>
<script src ="js/script4.js"></script>
```

# How (I think) it should be

Managing script dependencies in HTML has always seemed really wrong to me. I greatly prefer the way that dependencies work in NodeJS. Take this for example:

```javascript
// JS
const script1 = require('./script1');
const script2 = require('./script2');
const script3 = require('./script3');
const script4 = require('./script4');
```

# Using require() on the Front-end
The best solution I've found for using `require()` on the front-end is with [Browserify](http://browserify.org/). Browserify is software written NodeJS that ads "NodeJS-like" dependency management to the front-end. 

In order to use this solution, you will need to have NodeJS and NPM install for your development environment. 

# About Browserify
Browserify is a tool that will bundle together your JavaScript dependencies into one file so that you don't have to add a million `<script>` tags to your HTML. 

Each time you make a change to one of your script files, you run the `browserify` command to 'build' / 'bundle' your JS into one file.    

# Installing

To install Browserify globally run:

```bash
npm install -g browserify
```

You can test that it is installed and working by running the `browserify` command. You should get some output that looks something like this:

```bash
> browserify
Usage: browserify [entry files] {OPTIONS}
[...]
```

# Setup your files

Imagine that we have a directory tree like this:

```
html/
--js/
----index.js
----requireMe.js
--index.html
```

**index.js**
```javascript
const requireMe = require('./requireMe');
const result = requireMe.func(2,2);
console.log(result)
// 4
console.log(requireMe.content);
// Here is some content
```

**requireMe.js**
```javascript
const content = 'Here is some content!';
function func(a,b){
  return a + b;
}
function ignoreMe(){
  console.log('I feel ignored.');
}
module.exports = {
  content,
  func
};
```

**index.html**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>
    <script src ="js/bundle.js"></script>
  </body>
</html>
```

# Building / Bundling

The actual usage of the `browserify` command looks something like this:

```bash
browserify js/index.js -o js/bundle.js
```

This is telling `browserify` that we want to use `index.js` as the entry point and build / bundle that file (`index.js`) and all of it's dependencies into a new file called `bundle.js`.

After running the above command you should have a directory tree that looks like this:

```
html/
--js/
----index.js
----requireMe.js
----bundle.js
--index.html
```

Notice the new `bundle.js` file. This is the file we setup to require from the HTML.

This new file will include all of the code from `index.js` and `requireMe.js`. 

# Examining the output

**bundle.js**
```javascript
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const requireMe = require('./requireMe');
const result = requireMe.func(2,2);
console.log(result)
// 4
console.log(requireMe.content);
// Here is some content
},{"./requireMe":2}],2:[function(require,module,exports){
const content = 'Here is some content!';
function func(a,b){
  return a + b;
}
function ignoreMe(){
  console.log('I feel ignored.');
}
module.exports = {
  content,
  func
};
},{}]},{},[1]);
```

I'm not going to go too deep into this because most of this is Browserify 'boilerplate' that isn't important for our purposes. However, you can see that after the Browserify code, our original code is included. 

**Note:** *Even though our `requireMe` module only exports `content` and `func` objects, the `ignoreMe` function is also included in `bundle.js`. Everything that is in a required file is included in `bundle.js`.*

# Going a little further

We can keep things a little more organized by storing our source scripts in their own directory:

```
html/
--js/
----source/
------index.js
------requireMe.js
----bundle.js
--index.html
```

Now the code we are actually working on is in the directory `/html/js/source/`. 

So we can run the `browserify` command like this:
```bash
browserify js/source/index.js -o js/bundle.js
```

Since typing out that command can get a little tiring, I thought about writing a shell script to make it a little quicker. Then I remembered that the project I'm currency working on is being developed in a windows environment. So to keep things extra portable, I wrote a Node script that will handle the build processes. This should work on any OS. 

**build.js**
```javascript
const { exec } = require("child_process");
exec('browserify js/source/index.js -o js/bundle.js');
```
---
**UPDATE**

The `build.js` code above does not actually handle errors at all. If you want to make sure you know when something goes wrong try this:

**build.js**
```javascript
const { exec } = require("child_process");

exec('browserify js/source/index.js -o js/bundle.js', (error, stdout, stderr) => {
  if (error){
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr){
    console.log(`stderr: ${stderr}`);
    return;
  }
  if(stdout){
    console.log(`stdout: ${stdout}`);
  }
  else{
    console.log('Build OK!')
  }
});
```