<steelsky>
{
  "title":"Traverse A Filesystem With Node",
  "description":"How to traverse through a local file system with NodeJS.",
  "tags":"#programming #js"
}
</steelsky>
# Traverse A Filesystem With Node

## Introduction

If you want to get a directory listing with NodeJS (similar to the Linux `ls` command) you can use something like `fs.readdirSync(path);`. This will synchronously read all files in the given `path` and return a list of files and directories as an array. 

For example:
```javascript
const fs = require('fs');
const listing = fs.readdirSync(__dirname);

console.log(listing);
```
Might output something like:
```javascript
[ 'index.js',
  'index.old.js',
  'index.test.js',
  'ld.js',
  'node_modules',
  'old',
  'package-lock.json',
  'package.json',
  'reduce.js',
  'source',
  'test.js',
  'testread.js' ]
```

## Going deeper...

This is nice to know, but what if we also want to know what's in the `old` or `node_modules` directories?

We could run the same or similar code again on those directories, then if they contain more directories we repeat the processes. This works, but who knows how far down we have to go?

I think that the best way to solve a problem like this is using a recursive function. Something like what I have below:

```javascript
const fs = require('fs');

function traverse(path, rootPath, list = []){
  const listing = fs.readdirSync(path);
  for(let item of listing){
    const itemPath = `${path}/${item}`
    const isDirectory = fs.lstatSync(itemPath).isDirectory();
    if(isDirectory){
      list = traverse(itemPath,rootPath, list);
    }
    else{
      list.push(itemPath.replace(`${rootPath}/`, ''));
    }
  }
  return list;
}
```

**Note:** *This code is far from perfect but I think it is readable and works for this example!*

What this does is recursively traverse the file tree, creating a `list` array as it goes. When it sees a file it will add that files path to the `list` array. 

-------

Here is a breakdown of the logic:

* Take in a `path` string which is the current path
* Take in a `rootPath` string which is the original/root path
* Take in a `list` array or create a blank `list` array
* Get an array of the items in the current path as `listing`
* For each `item` of `listing`:
  * Create an `itemPath` constant that represents the full location of the item
  * Check if that path is a directory:
    * True: 
      * Traverse the new directory passing down the `list` array
      * Assign the results of the traversal to `list`
    * False:
      * Add the `itemPath` to our list of files
* Return `list`

-------

So with the above function we could try something like:
```javascript
console.log(traverse(__dirname, __dirname));
```
Which might output something like:

```javascript
[ 'index.js',
  'index.old.js',
  'index.test.js',
  'ld.js',
  'node_modules/lodash/add.js',
  'node_modules/lodash/after.js',
  'node_modules/lodash/array.js',
  'node_modules/lodash/ary.js',
  'node_modules/lodash/assign.js',
  'node_modules/lodash/assignIn.js',
  'node_modules/lodash/assignInWith.js',
  ...,
]
```

## The easy way

If you find yourself needing to do something like this in any sort of advanced or truly reliable manner I would suggest looking into the NPM package [directory-tree](https://www.npmjs.com/package/directory-tree). This package will do a lot more than get you a flat list of the files. 