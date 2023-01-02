<steelsky>
{
  "title":"Downloading Files with NodeJS",
  "description":"NodeJs gives us native access to the local drives. Learn how to download files.",
  "tags":"#programming #js #guide"
}
</steelsky>
# Downloading Files with NodeJS

NodeJs gives us native access to the local drives. The code below is an example of how to create a custom module that will download a file via promises. No external libraries are required for this example.


## Setup Our Modules
Create a new file called 'download.js'.
```javascript
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
```
The 'http' and 'https' modules are required to make our connection to the site we want to download from.

The 'fs' module allows us to access the local file system.

The 'path' module allows us to split the URL into useful information.

## Setup The Download Function
Below the previous code enter the following:
```javascript
function download(options){
    return new Promise(function(resolve,reject){
        
    }
}
```
Here we setup the new 'download' function. We also gave it a parameter named 'options' which represents and object that we will use to submit the options for our download (more on that later).

Additionally, we told this function to return a new promise. If you are not sure exactly how promises work, don't worry, it's not critical to making this work.

## Setup The Data
Let's edit the 'download' function to look like this:
```javascript
function download(options){
    return new Promise(function(resolve,reject){
        let spec_url = new URL(options.input_url);
        let file_name = path.basename(options.input_url);
        let file = fs.createWriteStream(options.save_location+file_name);

        let return_data = {
            "options":options,
            "file_name":file_name,
            "save_location":options.save_location,
            "success":false
        };
    }
}
```
The 'spec_url' variable will store our "special" URL. The one that can be parsed by our ```path``` module. We will use this to determine our protocol. 

The 'file_name' variable will store the name of our file including its file extension. 

The 'file' variable will store a reference to the actual file will we write.

The 'return_data' object will store the data that we will return when the function completes.

## Determine Our Protocol
You might have noticed that we needed to import both the 'http' and 'https' modules. When we want to download a file we need to know if we are going to be accessing it via HTTP or HTTPS so that we can use the right protocol. It would be possible to do this simply by supplying another parameter to the function or adding this to the options object. However we can avoid this (any any potential errors it may cause) by using our special URL we setup earlier.

Go ahead and edit the 'download' function to match this:
```javascript
function download(options){
    return new Promise(function(resolve,reject){
        let spec_url = new URL(options.input_url);
        let file_name = path.basename(options.input_url);
        let file = fs.createWriteStream(options.save_location+file_name);

        let return_data = {
            "options":options,
            "file_name":file_name,
            "save_location":options.save_location,
            "success":false
        };

        if(spec_url.protocol == "https:"){
            var protocol = https;
        }
        else if (spec_url.protocol == "http:"){
            var protocol = http;
        }
        else{
            console.error("INVALID PROTOCOL");
            resolve(return_data);
        }

        protocol.get(spec_url, function(response) {
            response.pipe(file);
            return_data.success = true;
            resolve(return_data);
        }).on('error', function(e) {
            //console.error(e);
            resolve(return_data);
        });
    })
}
```
First, you can see we setup some super simple logic to check if the protocol is HTTP or HTTPS. If we can determine the protocol we setup a new 'protocol' variable and assign the correct (corresponding) module to it. If we can not determine what protocol we are using, this means we did not supply a valid URL. Here we still resolve the promise, but the 'return_data' will still have a value of 'false' in the 'success' field.

Once we know the correct protocol, we can go ahead and actually download the file, set the 'success' field to 'true' and resolve our promise with the return data.

We also setup some simple error handling in case something goes wrong. 

## Final Download.js Code
The final code for the 'download.js' file should look like this:
```javascript
//NodeJS
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function download(options){
    return new Promise(function(resolve,reject){
        let spec_url = new URL(options.input_url);
        let file_name = path.basename(options.input_url);
        let file = fs.createWriteStream(options.save_location+file_name);

        let return_data = {
            "options":options,
            "file_name":file_name,
            "save_location":options.save_location,
            "success":false
        };

        if(spec_url.protocol == "https:"){
            var protocol = https;
        }
        else if (spec_url.protocol == "http:"){
            var protocol = http;
        }
        else{
            console.error("INVALID PROTOCOL");
            resolve(return_data);
        }

        protocol.get(spec_url, function(response) {
            response.pipe(file);
            return_data.success = true;
            resolve(return_data);
        }).on('error', function(e) {
            //console.error(e);
            resolve(return_data);
        });
    })
}

exports.get = function(options){
    return download(options);
};
```
Notice that we added an export (at the very bottom) for this function so that we can use it as a custom module.

## Using Our Module
Let's setup a test script so that we can see how our download module actually works. 

First we need to make a new directory to store our downloads. Do this now:
```bash
#bash
mkdir downloads
```
If you are using Windows just make a new folder called 'downloads' in our current directory.

Then make a new file called 'test.js' and give it the following content:
```javascript
const DL = require('./download.js');
let test = DL.get({
    "input_url":"https://i.imgur.com/crtV5VDg.jpg",
    "save_location":"downloads/"
});
test.then(function(return_data){
    if(return_data.success){
        console.log("Downloaded "+return_data.file_name);
    }
    else{
        console.log("Could Not Download "+return_data.file_name);
    }
});
```
This slightly more complex example will read a text file full of URLs and try to download each of the pages listed in this file.
```javascript
const DL = require('./download.js');
const fs = require('fs');

var list = [];
var download_loc ="downloads/";
var tests = [];

fs.readFile('./urls.txt', "utf8", function read(err, data) {
    if (err) {
        throw err;
    }
    processFile(data);
});

function processFile(data) {
    list = data.split("\n");
    Run(list);
}

function Run(list){
    for(item in list){
        tests.push(DL.get({"input_url":list[item],"save_location":download_loc}));
    }
    for(test in tests){
        tests[test].then(function(return_data){
            if(return_data.success==true){
                console.log("DOWNLOADED: "+return_data.options.input_url);
                console.log("///");
            }
            else{
                console.log("ERROR: "+return_data.options.input_url);
                console.log("///");
            }
        }).catch(function(error) {
            console.log(error);
        });
    };
}
```
You can find some URLS to use as your 'urls.txt' file [on GitHub](https://gist.github.com/demersdesigns/4442cd84c1cc6c5ccda9b19eac1ba52b).

-------
Thanks for reading!