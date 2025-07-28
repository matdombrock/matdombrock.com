<steelsky>
{
  "title":"An argument for statically typed languages",
  "description":"Why I think data types matter.",
  "tags":"#programming #javascript #thoughts",
  "type":"post",
  "date":"2023-02-01"
}
</steelsky>

# An argument for statically typed languages. 

## Why Types matter

Consider the following code:

C:
```c
int someFunction(int a, int b){
  return a+b;
}
```

JS:
```js
function someFunction(a, b){
  return a+b;
}
```

Even if you don't have much familiarity with C code it should be clear what `someFunction` does. It takes into 2 integers and adds them together, returning the result. 

In the JS example, there is no way you can say if that is supposed to take 2 strings and concatenate them or add two numbers. Or some ungodly combination of the two. There is literally no correct and clear answer to what this function does. 

The reason that the JavaScript is ambiguous while the C code is very clear is because C is "statically typed". Meaning that every variable and parameter is assigned an immutable data type on declaration. 

So we can say for sure that the function in the C code is taking 2 integers and the only thing that the "plus" operator can actually do with 2 integers is to add them. We also can say for sure that the C code will ALWAYS return an integer. If the function is not able to return an integer it would cause an error message (which is good!).

Which leads me to the next point. Another very important part of this concept is that we can statically analyses the code to detect problems without even running it. If there is some path in your function that would not produce the given return type then the code will have compiler errors (which is good!). 

If we tried to call `someFunction` from C like this:

```c
char a = "1";
int b = 2;
someFunction(a, b);
```

The code would not compile and we would know that we made a mistake. This is very important because in dynamically typed languages like JavaScript and PHP, serious logic errors often DO NOT produce any actual error messages and they can be very hard to debug. The reason is these are interpreted languages and they need to be run before errors like that can really be detected (There are some static analysis tools for JS but they are rare).

## Why types should not be mutable

The second major benefit aside from having statically typed variables is having immutable variable types. This means that once a variable or parameter is declared, its type can not be changed. 

I don't actually know if/think there is a functional reason for languages like JS and PHP to be dynamically typed (where types can change). But instance in JS you can create a variable that starts as a string, turns into an integer and then later becomes an object. 

I think the main reason that these languages are dynamically typed is to be more beginner friendly. I really can't think of a valid use case for changing a variable type at runtime. 

So the benefit of immutable types is that once we setup a variable we know it won't change its type and if anything tries to change its type that will cause an immediate and obvious error. 


# Typescript

I am really starting to think that [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) can be a valid solution to the problems listed here. 

It's something that can be used as needed and we don't have to fully convert to start using it for some things. We can integrate it slowly over time. 

There is no performance increase like we would get from an actual lower level language but this can help a lot with sanity and team projects. 

```ts
import moment = require('moment');

// An interface is a way of type checking an object
interface User{
  name: string,
  id: number,
  groups: string[],
  age: number
}

// Create and instance based on the type checked interface
const bob:User = {
  name: 'Bob',
  id: 1,
  groups: ['chess','hiking'],
  age: 60
}

// Types can be used to define parameters and return values
// Since we have declared and interface for User it is type checked and automatically validated against missing parameters
// We can know we will get a static error if we supply anything but a valid User object
// We also know we will always return a string
function describe(user:User):string{
  let out:string = `
  ${user.name} has an id of ${user.id} and is in ${user.groups.length} groups.
  ${user.name} was born on ${moment().subtract(user.age, 'years').format()} exactly!
  `;
  return out;
}

// Regular variables can also have static types
const description:string = describe(bob);

console.log(description);

// Since an interface is just a check on an object, you can still declare the object directly
console.log(
  describe({
    name: 'Alice',
    id: 2,
    groups: ['chess', 'biking'],
    age: 72
  })
);

// Another example of function parameters and return types
// We can know we will get a static error if we supply anything but 2 valid User objects
// We also know we will always return a string
function older(a:User, b:User):string{
  if(a.age>b.age){
    return `${a.name} is older than ${b.name}!`;
  }else if(a.age<b.age){
    return `${b.name} is older than ${a.name}!`;
  }
  return `${a.name} is the same exact age as ${b.name}!`;
}

const oldest:string = older(bob, {
  name: 'Alice',
  id: 2,
  groups: ['chess', 'biking'],
  age: 72
});
console.log(oldest);
```
