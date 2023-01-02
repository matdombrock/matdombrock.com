<steelsky>
{
  "title":"Using Parasails Utility Functions With SailsJS to Re-use Front-End Code",
  "description":"When developing anything but the most trivial web apps, you often end up writing code that you want to use in multiple places. This is a guide for doing that with SailsJS/Vue.",
  "tags":"#programming #js #vue #guide"
}
</steelsky>
# Using Parasails Utility Functions With SailsJS to Re-use Front-End Code

When developing anything but the most trivial web apps, you often end up writing code that you want to use in multiple places. If you have some back-end NodeJS code you want to re-use can use [Sails Helpers](https://sailsjs.com/documentation/concepts/helpers). However, reusing front-end Javascript with Sails is not quite so straight-forward. 

## The Problem

So, here's the problem. Imagine that we have a file ```pageA.page.js``` that looks like this:

```javascript
parasails.registerPage('pageA', {
  data: {
    modal: '',
    content: 'red',
  },
  beforeMount: function() {
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //…
  },
  methods: {
    methodA: function(){
        this.content += " is the best fruit!";
    },
    methodB: function(){
        this.content += " apple!";
    }
  }
});
```

Imagine that we also have a ```pageB.page.js``` that looks like this:

```javascript
parasails.registerPage('pageB', {
  data: {
    modal: '',
    content: 'yellow',
  },
  beforeMount: function() {
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //…
  },
  methods: {
    methodA: function(){
        this.content += " is the best fruit!";
    },
    methodB: function(){
        this.content += " banana!";
    }
  }
});
```

As you can see, in both of these files, ```methodA``` does the exact same thing. Any good programmer will tell you this is a *BAD* practice that should be avoided at all costs. Code should never be duplicated when it can be avoided. 

## The Solution
I would argue that the "best" way to go about this is by using [webpack](https://webpack.js.org/) as illustrated in the write-up by @Noitidart [here](https://medium.com/@Noitidart/adding-code-split-react-frontend-without-losing-vue-to-sails-1-x-app-5642131ed8a0).

However, if you take a look at the source code for the Sails example web app, you will see that they are not using webpack at all. So let's see how the Sails team has chosen to handle it. 

## Parasails Utilities
Parasils utilities give us the ability to re-use code across multiple files in a fairly clean manner. Unfortunately however, at the time of this writing, the documentation on this aspect of Sails is very much lacking. The [Github page for Parasails](https://github.com/mikermcneil/parasails) currently mentions utilities as a feature but doesn't go into any detail about how they work.

If you're using the Sails example web app you can find the utility scripts in ```/assets/js/utilities/```. You can also see an example utility at ```/assets/js/utilities/open-stripe-checkout.js```. 

## Setup A New Utility
Despite the current lack of documentation, implementation of a Parasails utility is pretty straight-forward. to solve the problem above, we would create a new Parasails utility at ```/assets/js/utilities/doA.js```. In this file we would write:
```javascript
/**
 * methodA
 * -----------------------------------------------------------------
 * @param {String} content
 * -----------------------------------------------------------------
 * @returns {String?}  
 * -----------------------------------------------------------------
 */

parasails.registerUtility('doA', async function doA(content) {
    return new Promise((resolve, reject)=>{
      try {
        content += " is the best fruit!";
        resolve(content);
      } catch (err) {
        reject(err);
      }
    });
});
  
```

So now we have a parasails utility that could be called from a ```page.js``` file as follows:
```javascript
parasails.util.doA("some content");
```

## Use Your New Utility
Let's re-write the code for ```pageA.page.js``` to use this new utility:
```javascript
parasails.registerPage('pageA', {
  data: {
    modal: '',
    content: 'red',
  },
  beforeMount: function() {
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //…
  },
  methods: {
    methodA: async function(){
        this.content = await parasails.util.doA(this.content);
    },
    methodB: function(){
        this.content += " apple!";
    }
  }
});
```
The only change that was made was to ```methodA```:
```javascript
methodA: async function(){
    this.content = await parasails.util.doA(this.content);
},
```
Notice that in addition to being setup to call the new utility, ```methodA``` has also been converted to an ```async function```. This is required to use ```await```. 

From here you could easily implement the same logic into the the ```pageB.page.js``` file. Now you will only need to make changes to the code in one place and you will not have to worry about any of the issues related to duplicating code. 