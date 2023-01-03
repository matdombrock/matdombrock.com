<steelsky>
{
  "title":"NodeJS read CLI input asynchronously.",
  "description":"Read CLI input without callback hell.",
  "tags":"#js #programming #example"
}
</steelsky>

# NodeJS read CLI input asynchronously

Source: [https://stackoverflow.com/questions/43638105/how-to-get-synchronous-readline-or-simulate-it-using-async-in-nodejs](https://stackoverflow.com/questions/43638105/how-to-get-synchronous-readline-or-simulate-it-using-async-in-nodejs)

## Simple

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, //or fileStream 
  output: process.stdout
});

const start = async () =>{
    for await (const line of rl) {
        console.log(line)
    }
}
start()
```

## Useful

```javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, //or fileStream 
  output: process.stdout
});
const start = async () =>{
  console.log('Enter Something:');
  for await (const line of rl) {
      console.log('>>>'+line);
      if(line.includes('test')){
        test(line);
      }
      console.log('Enter Something:');
  }
}
function test(line){
  console.log('The full line was:'+line);
}
start()
```