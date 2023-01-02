<steelsky>
{
  "title":"VueJS Components Guide",
  "description":"This guide will attempt to explain and demonstrate the powerful \"components\" system used in VueJS.",
  "tags":"#programming #js #vue #guide"
}
</steelsky>
# VueJS Components Guide

## Introduction
**NOTE:** *This guide assumes that you are already somewhat familiar with VueJS. This is not a guide for basic VueJS usage. If you want to learn the basics of VueJS there is an excellent tutorial on [VueJS.org](https://vuejs.org/v2/guide/installation.html).*

This guide will attempt to explain and demonstrate the powerful "components" system used in VueJS. There is already great documentation available on [VueJS.org](https://vuejs.org/v2/guide/components.html). However, this guide will go more in-depth and will demonstrate how to nest elements within other elements. It also includes a slightly less trivial example than what is shown in the main documentation.

What we will do here is setup a small "database" with information about a few [SNES](https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System) games. We will then render the list elements using VueJS components. 

**You can see all of this code in action on [repl.it](https://repl.it/@mathieudombrock/VueJS-Components)!**

## Setting Up Our Data
To get started we need to sample data to play with. Let's set that up now. 

To do this, we simply need to supply our list of games to the Vue instance inside of it's data object. Our Vue instance might look something like this:
```javascript
var app =  new  Vue({
	el:  '#app',
	data:  {
		games:[
			{
				title:  "The Legend of Zelda: A Link to the Past",
				publisher:  "Nintendo",
				developer:  "Nintendo",
				year:  1992
			},
			{
				title:  "Super Mario World",
				publisher:  "Nintendo",
				developer:  "Nintendo",
				year:  1991
			},
			{
				title:  "Super Metroid",
				publisher:  "Nintendo",
				developer:  "Intelligent Systems",
				year:  1994
			},
			{
				title:  "Chrono Trigger",
				publisher:  "Square Co., Ltd.",
				developer:  "Square Co., Ltd.",
				year:  1995
			},
			{
				title:  "Donkey Kong Country",
				publisher:  "Nintendo",
				developer:  "Rare, Ltd.",
				year:  1994
			},
			{
				title:  "Secret of Mana",
				publisher:  "Square Co., Ltd.",
				developer:  "Square Co., Ltd.",
				year:  1993
			},
			{
				title:  "Super Mario World 2: Yoshi's Island",
				publisher:  "Nintendo",
				developer:  "Nintendo",
				year:  1995
			},
		]
	},
})
```
## Rendering The Data Without Components
Since rendering this data would be somewhat trivial, it's easy to do this without using components. For the sake of comparison, I will show how we can render the data without components, and then we will rebuild the system using components. 

```
<div  id="app">
	<div  v-for="game in games">
		<div>
			{{game.title}} - {{game.year}}
		</div>
		<div>
			Publisher: {{game.publisher}} | Developer: {{game.developer}}
		</div>
		<hr>
	</div>
</div>
```
To make things a little more complex. Let's sort our list of games by year. To do this we will need to add a method to our Vue instance.

Add a new method to your view instance like this:
```javascript
var app =  new  Vue({
	el:  '#app',
	data:  {
		games:[
			// your data from before
		]
	},
	mounted(){
		this.sortByYear()
	},
	methods:{
		sortByYear:  function(){
			this.games.sort(function(a,b){
				if(a.year < b.year){
					return  -1
				}
				if(a.year > b.year){
					return  1
				}
				return  0
			})
		},
	}
})
```
**NOTE:** *I won't get into the sorting function here because that's outside the scope of this guide. Also, there is probably a better "Vue-style" way to do this anyways.*

Notice that we also call the 'sortByYear()' function on `mounted()` this makes sure that our data is sorted as soon as Vue loads.

## Creating A VueJS Component
As stated in the official documentation, "Components are reusable Vue instances with a name".

Let's start with a super simple example. 

Add this code **above** your main Vue instance:
```javascript
Vue.component('example-component', { 
	template: '<div>example content</div>' 
})
// main view instance code
// ...
```
This creates a new element called:
```
<example-component>
```
We can use this anywhere inside of our main Vue instance in the HTML file:
```
<div id="app">
	<example-component></example-component>
</div>
```
This will render out to:
```
<div id="app">
	<div>example content</div>
</div>
```
That on it's own is pretty useful, but the true power of components lie in their ability to use their own data structures.

**NOTE:** *Each component template must contain exactly ONE root element or it will not work!*

## Passing Parameters To A Component
In order to get data from your parent Vue instance into a child component you need to pass in some data parameters in Vue land these are called "props" (short for properties). 

Lets pass some parameters to the component we created above:
```javascript
Vue.component('example-component-2', {
	props: [
		'title',
		'year'
	],
	template: `
		<div>
			<div>
				{{title}}
			</div>
			<div>
				{{year}}
			</div>
		</div>
	` 
})
// main view instance code
// ...
```
**NOTE:** *This time I'm calling it 'example-component-2' to avoid confusion.

Here we passed some parameters (props) called **'title'** and **'content'** and rendered them out inside of the div. 

Notice the use of JS backticks ([template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)) so that we could write the template out in multiple lines.

We include this in our HTML file just like we did before. However this time we need to pass are parameters as properties.

Something like:
```
<div id="app">
	<example-component-2 title="Super Mario World"  year="1991"></example-component-2>
</div>
```
### Passing All Data As One Parameter
If we need to pass a lot of data to a child component, it could get very cumbersome very quickly. Imagine working with something like this:
```
<example-component-X title="Super Mario World" year="1991" publisher="Nintendo" developer="Nintendo"></example-component-X>
```
It's certainly manageable, but it's not ideal. With a very complex data model, it can become nearly impossible to maintain. The good news is that there is a better way.

We can actually pass an **object** to as a parameter through the properties just like we can with a JavaScript function. 

Consider this vanilla JS code:
```javascript
const gameData = {
	title:  "Super Mario World",
	publisher:  "Nintendo",
	developer:  "Nintendo",
	year:  1991
}
function example(data){
	console.log(data.title)
	console.log(data.year)
}
example(gameData)
/*outputs*/
// Super Mario World
// 1991
```

We can do something very similar with Vue. Consider the following Vue HTML:
```
<div v-for="game in games">
	<example-component-3 v-bind:data="game"></example-component-3>
</div>
```
This will iterate through each game in our list object called 'games' and it will pass each individual 'game' object into our example component as a property parameter. Notice the use of 'v-bind:' prefixed to the property to make sure it's hooked into the Vue instance. If we didn't use 'v-bind:' we would just be passing in a string "game". Since we are using 'v-bind:' we instead are passing the Vue object known as "game" that was created by our 'v-for' loop.

To make this work we need to register the 'example-component-3' component:
```javascript
Vue.component('example-component-3', {
	props: [
		'data',
	],
	template: `
		<div>
			<div>
				{{data.title}}
			</div>
			<div>
				{{data.year}}
			</div>
		</div>
	` 
})
// main view instance code
// ...
```
Notice that that each piece of info like **'year'** and **'title'** are now prefixed with **'data.'** because they are a child object of the data property. 

If we try this out we will see a list of all of our games and the years they were released. 

### Passing ALL Parent Data
Sometimes it's useful to just pass all of your parent/root element's data to your child object. There are actually two ways to go about this but one is not *really* passing the data. This isn't something we will use in the main example project for the guide but I will demonstrate anyway.

#### Actually passing the data
To actually **pass** the parent's full data we can do something like this:
```javascript
Vue.component('example-component-4', {
	props: [
		'parent',
	],
	template: `
		<span>
			<div v-for="game in parent.games">
				{{game.title}}
			</div>
		</span>
	` 
})
// main view instance code
// ...
```
**NOTE:** *Each component needs exactly ONE root element, and this element can not contain 'v-for' logic. So in this case the root element is a span.*
```
<example-component-4 v-bind:parent="this"></example-component-4>
```
By passing **'this'** as our property argument, we sent a full reference to our self (the Vue parent element) and we can now access our parent's data just like we would in the parent element it's self. Except now we need to append the references with 'parent'.

**NOTE:** *Since we are passing an instance of 'self' down to the child, this means that the child can not alter the original parent data. So for instance, you could not change the data in **'parent.games[0].title'** and have it affect the actual parent data. In most cases this is a desired behavior.*

#### Using Global this.$parent
There is another way to get data from your parent element into a child component. However, not only is this method not actually passing anything, it's also usually a bad idea. None the less here it is. 
```javascript
Vue.component('example-component-5', {
	template: `
		<span>
			<div v-for="game in this.$parent.games">
				{{game.title}}
			</div>
		</span>
	` 
})
// main view instance code
// ...
```
```
<example-component-5></example-component-5>
```

Trying out **'example-component-5'** you will see that the output is exactly the same as **'example-component-4'**. However, using this code directly exposes the parent data as a global variable which allows you to alter that data directly from a child. Thus breaking the parent child relationship to some extent. For instance you could now write a method that says:
```javascript
this.$parent.games[0].title = "Not the actual title"
```
This might sound like a good idea and it either isn't because you don't know what you're doing, or it actually is because you really know what you're doing. I'll leave that part up to you. Usually we aim to build modular and reusable components, but sometimes building components that are intrinsically linked makes sense.

**NOTE:** *If you **do** need to alter data in the parent element, then the best way to do that is with [emitters](#pushing-data-back-up-to-the-parent-the-right-way-emitters).*

## Using Component Data
Components can also have their own internal data that is not passed down or inherited from their parent. This is also not something that will be used in the main example project in this guide but it is worth mentioning none the less. 

Since this is not something that is used in the example project. I will be using the code examples found on [VueJS.org](https://vuejs.org/v2/guide/components.html#Reusing-Components).

Using internal data for a component works like this:
```javascript
Vue.component('button-counter', { 
	data: function () {
		return { 
			count: 0 
		} 
	}, 
	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>' 
})
```
The way this works is very similar to the way that the data in the root/parent Vue element works, except for the fact that the data must be stored in a function (essentially a constructor function). This is because this data is **unique** to each individual instance of the component and is **NOT** shared between them. Meaning this data is local and **not global**.

If you were to try the following HTML it would output 3 counter buttons.
```
<div id="app">
	<button-counter></button-counter>
	<button-counter></button-counter>
	<button-counter></button-counter>
</div>
```

Since each button has it's own instance of 'count', clicking one button does not affect the data in the other buttons.

### Using Data And Props Together
You can of course use data and properties together but at the time of writing this is not clearly demonstrated in the docs. Consider this example:
```javascript
Vue.component('button-counter-2', { 
	data: function () {
		return { 
			count: 0 
		} 
	},
	props: [
		'offset',
	],
	template: '<button v-on:click="count++">You clicked me {{ count + parseInt(offset) }} times.</button>'
})
```
```
<div id="app">
	<button-counter-2 offset="1"></button-counter-2>
	<button-counter-2 offset="5"></button-counter-2>
	<button-counter-2 offset="-1"></button-counter-2>
</div>
```

Notice that that both the data and the props are treated equally as local variables. However since in the case the props we are using are passed as a string, in order o do math on them we need to convert them to integers using the inbuilt JS function 'parseInt()'. 

**NOTE:** *This would be a good place to point out that generally speaking you can use any inbuilt JS functions as part of your VueJS markup.*

## Nesting Components
To create complex and truly modular apps, we can take advantage of the ability to "nest" components. Put simply, we can use components inside of other components. 

First let's build a component that will take a property called "games" (the list of games in the parent element's data), and output all of the data in an organized way. Then we will split it up into child components.
```javascript
Vue.component('example-component-parent-1', {
	props: [
		'games',
	],
	template: `
		<div>
			<div v-for="game in games">
				<div>
					{{game.title}} - {{game.year}}
				</div>
				<div>
					Publisher: {{game.publisher}} | Developer: {{game.developer}}
				</div>
				<hr>
			</div>
		</div>
	` 
})
// main view instance code
// ...
```
```
<div id="app">
	<example-component-parent-1 v-bind:games="games"></example-component-parent-1>
</div>
```
Notice that this is so far, very similar to our original non-component based example.

What we will do from here is split this up into two more parts. One part will handle displaying the title and year, and the other will handle displaying the publisher and developer.

Let's rewrite our 'component-parent-1' component to support this split:
```javascript
Vue.component('games-list',  {
	data:  function  ()  {
		return  {
			games_list:  [...this.games]
		}
	},
	props:  [
		'games',
	],
	mounted(){
		this.sortByYearReverse()
	},
	methods:{
		sortByYearReverse:  function(){
			this.games_list.sort(function(a,b){
				if(a.year > b.year){
					return  -1
				}
				if(a.year < b.year){
					return  1
				}
				return  0
			})
		},
	},
	template:  `
		<div>
			<div v-for="game in games_list">
				<title-and-year v-bind:game="game"></title-and-year>
				<publisher-and-developer v-bind:game="game"></publisher-and-developer>
				<hr>
			</div>
		</div>
	`
})
// main view instance code
// ...
```
Notice that we took in the prop 'games' and assigned it to a value 'games_list' in the data constructor function as a new array. It is important to use the correct syntax for creating a new array:
```javascript
var new_array = [...old_array]
```
If we created the new array like this:
```javascript
games_list:  this.games
```
It would actually create a reference to the parent games array instead of creating a new copy of the array. So if we made changes to our new 'games_list' variable, it can have unintended consequences on the 'games' array in the parent. Since we don't want the changes we make to the array here to affect the parent we need to **clone** the array instead of **copying** it.

This would not be the case with most other types of objects in JS (strings ect). To put it simply, JS arrays are just kind of strange. For more information on this see [this guide by Samantha Ming](https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array).

Notice that we also added two new child components that do not exist yet:
```
<title-and-year>
```
And
```
<publisher-and-developer>
```
Each of these take a prop that is an instance of the object "game" created by our 'v-for' loop.

Let's create these components now:
```javascript
Vue.component('title-and-year', {
	props: [
		'game',
	],
	methods:{
		twoDigitYear: function(year){
			// converts 4 digit year into 2 digit year
			// assumes all dates fall in one century
			return  "'"+year.toString().substring(2)
		}
	},
	template: `
		<div>
			{{game.title}} ({{twoDigitYear(game.year)}})
		</div>
	` 
})
// ...
```
Notice that we added a method called 'twoDigitYear()' that will turn the four digit year into a two digit year. Since this method is only used in this component, the best practice is to write it here instead of in the parent component.
```javascript
Vue.component('publisher-and-developer', {
	props: [
		'game',
	],
	methods:{
		checkSame: function(publisher,developer){
			// Checks if the publisher and developer are the same 
			if(publisher == developer){
				return true
			}
			return false
		}
	},
	template: `
		<div>
			<span v-if="checkSame(game.publisher,game.developer)">
				{{game.publisher}}
			</span>
			<span v-else>
				Publisher: {{game.publisher}} | Developer: {{game.developer}}
			</span>
		</div>
	` 
})
// ...
```
Notice that we created a local method called 'checkSame()' that will check if the developer and the publisher are the same. We then call this in the template to return a bool that is used to check what how we should render the component.

We can put this all together now by creating out custom component 'games-list' in the HTML file:
```
<div id="app">
	<games-list v-bind:games="games"></games-list>
</div>
```
This should output something very much like our original non-components example just with the added functionality we put into the two new methods. 

## Pushing Data Back Up To The Parent The Right Way (Emitters)
In our project, there is no real reason that we need to pass data from a child component back up to the parent, but for the sake of example, let's come up with one. 

Suppose we wanted to allow our user to choose their favorite game and have it display in a special way at the top of the list. The best way to handle this is by "emitting" and event from the child that can be acted upon by the parent. 

We've already technically done something like this when we were working with the button example:
```
<button v-on:click="count++">You clicked me {{ count }} times.</button>
```

Now let's make a new 'games-list' component that supports a custom "favorite item" button:
```javascript
Vue.component('games-list-2',  {
	data:  function  ()  {
		return  {
			games_list:  [...this.games],
			favorite: "None"
		}
	},
	props:  [
		'games',
	],
	mounted(){
		this.sortByYearReverse()
	},
	methods:{
		sortByYearReverse:  function(){
			this.games_list.sort(function(a,b){
				if(a.year > b.year){
					return  -1
				}
				if(a.year < b.year){
					return  1
				}
				return  0
			})
		},
	},
	template:  `
		<div>
			<strong>Favorite Game: {{favorite}}</strong>
			<hr>
			<div v-for="game in games_list">
				<title-and-year v-bind:game="game"></title-and-year>
				<publisher-and-developer v-bind:game="game"></publisher-and-developer>
				<favorite-button v-bind:title="game.title" v-on:setFavorite="favorite = $event">
				</favorite-button>
				<hr>
			</div>
		</div>
	`
})
// main view instance code
// ...
```
Notice the use of **'v-on'**:
```
v-on:setFavorite="favorite = $event"
```
This creates an event listener that can is waiting to do something when the component emits an event called **'setFavortie'**. **'$event'** is the value of the argument that is passed with the emitter, in this case the title of the game.

Since our components are reusable and modular, we can just reuse the **'title-and-year'** and **'publisher-and-developer'** components we already created. We just need to create a new component for our **'favorite-button'**:
```javascript
Vue.component('favorite-button', {
	props: [
		'title',
	],
	template: `
		<div>
			<button v-on:click="$emit('setFavorite', title)">
				{{title}} is my favorite game
			</button>
		</div>
	` 
})
// ...
```
Here we are emitting the **'setFavorite'** event on click and sending the value 'title' along with it. The value of title is passed up as **'$event'**.

Notice that we put the event listener on:
```
<favorite-button>
```
Not on the root element like this:
```
<div v-on:setFavorite="favorite = $event">
	<strong>Favorite Game: {{favorite}}</strong>
	<hr>
	<div v-for="game in games_list">
		<title-and-year v-bind:game="game"></title-and-year>
		<publisher-and-developer v-bind:game="game"></publisher-and-developer>
		<favorite-button v-bind:title="game.title">
		</favorite-button>
		<hr>
	</div>
</div>
```
This is because an emitter can only pass data to its direct parent. The code above will never see the emitter fire. In other words, emitters are **not global**, they can only go one level up.