<steelsky>
{
  "title":"Neural Web",
  "description":"Exploring Neural Nets In The Browser",
  "tags":"#radio #link"
}
</steelsky>

## Exploring Neural Nets In The Browser

<div class="wrapper">
    <div class="input">
        <input type="color" id="input" oninput="checkColor()">
        <br>
        <h4>Select a color!</h4>
        <button onclick="random()">Randomize</button>
        <hr>
        This software is powered almost entirely by a series of small neural networks 
        (or "mini-nets"). Each one is responsible for determining a different property
        of the color. This is running entirely in your web browser!
    </div>
    <div id="output">
        ...
    </div>
</div>

<script>
    (function () {
'use strict';

function likely(obj, map = {}){
    let top = ['IDK',0];
    let second = ['IDK',0];
    for(let [key, val] of Object.entries(obj)){
        if(val > top[1]){
            top = [key,val];
            continue;
        }
        if(val > second[1]){
            second = [key,val];
            continue;
        }
    }
    const value = (map[top[0]] ? map[top[0]] : top[0]);
    const value2 = (map[second[0]] ? map[second[0]] : second[0]);
    const percent = (top[1]*100).toFixed();
    return [percent, value, value2];
}

var rgb2norm = (rgb)=>{
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
};

function anonymous$2(input
) {
return {"d":1/(1+1/Math.exp((3.1040520668029785-7.0267014503479*1/(1+1/Math.exp((-1.742794394493103+9.730846405029297*(input[0]||0))))-1.500612497329712*1/(1+1/Math.exp((-0.850113570690155+2.91298246383667*(input[0]||0))))+1.4769114255905151*1/(1+1/Math.exp((0.4718296527862549-1.000786304473877*(input[0]||0))))))),"b":1/(1+1/Math.exp((-3.1454811096191406+7.0166239738464355*1/(1+1/Math.exp((-1.742794394493103+9.730846405029297*(input[0]||0))))+1.5518741607666016*1/(1+1/Math.exp((-0.850113570690155+2.91298246383667*(input[0]||0))))-1.4331409931182861*1/(1+1/Math.exp((0.4718296527862549-1.000786304473877*(input[0]||0)))))))};
}

function anonymous$1(input
) {
return {"r":1/(1+1/Math.exp((-0.5311358571052551-5.5094313621521*1/(1+1/Math.exp((-0.3776005208492279-2.3450746536254883*(input[0]||0)+6.397401332855225*(input[1]||0)-2.0922303199768066*(input[2]||0))))-5.364185333251953*1/(1+1/Math.exp((-0.42260363698005676-2.0069634914398193*(input[0]||0)-2.2474381923675537*(input[1]||0)+6.361815929412842*(input[2]||0))))+3.3930163383483887*1/(1+1/Math.exp((-0.2628178894519806+6.300031661987305*(input[0]||0)-2.051769971847534*(input[1]||0)-2.437774658203125*(input[2]||0))))))),"y":1/(1+1/Math.exp((-5.56922721862793+3.6157193183898926*1/(1+1/Math.exp((-0.3776005208492279-2.3450746536254883*(input[0]||0)+6.397401332855225*(input[1]||0)-2.0922303199768066*(input[2]||0))))-5.043540000915527*1/(1+1/Math.exp((-0.42260363698005676-2.0069634914398193*(input[0]||0)-2.2474381923675537*(input[1]||0)+6.361815929412842*(input[2]||0))))+3.8453660011291504*1/(1+1/Math.exp((-0.2628178894519806+6.300031661987305*(input[0]||0)-2.051769971847534*(input[1]||0)-2.437774658203125*(input[2]||0))))))),"g":1/(1+1/Math.exp((-0.17454378306865692+3.1632063388824463*1/(1+1/Math.exp((-0.3776005208492279-2.3450746536254883*(input[0]||0)+6.397401332855225*(input[1]||0)-2.0922303199768066*(input[2]||0))))-5.667236328125*1/(1+1/Math.exp((-0.42260363698005676-2.0069634914398193*(input[0]||0)-2.2474381923675537*(input[1]||0)+6.361815929412842*(input[2]||0))))-5.506833553314209*1/(1+1/Math.exp((-0.2628178894519806+6.300031661987305*(input[0]||0)-2.051769971847534*(input[1]||0)-2.437774658203125*(input[2]||0))))))),"c":1/(1+1/Math.exp((-5.4039626121521+3.785426139831543*1/(1+1/Math.exp((-0.3776005208492279-2.3450746536254883*(input[0]||0)+6.397401332855225*(input[1]||0)-2.0922303199768066*(input[2]||0))))+3.5260753631591797*1/(1+1/Math.exp((-0.42260363698005676-2.0069634914398193*(input[0]||0)-2.2474381923675537*(input[1]||0)+6.361815929412842*(input[2]||0))))-5.704789161682129*1/(1+1/Math.exp((-0.2628178894519806+6.300031661987305*(input[0]||0)-2.051769971847534*(input[1]||0)-2.437774658203125*(input[2]||0))))))),"b":1/(1+1/Math.exp((-0.24869006872177124-5.272212028503418*1/(1+1/Math.exp((-0.3776005208492279-2.3450746536254883*(input[0]||0)+6.397401332855225*(input[1]||0)-2.0922303199768066*(input[2]||0))))+3.0490713119506836*1/(1+1/Math.exp((-0.42260363698005676-2.0069634914398193*(input[0]||0)-2.2474381923675537*(input[1]||0)+6.361815929412842*(input[2]||0))))-5.4028191566467285*1/(1+1/Math.exp((-0.2628178894519806+6.300031661987305*(input[0]||0)-2.051769971847534*(input[1]||0)-2.437774658203125*(input[2]||0))))))),"m":1/(1+1/Math.exp((-5.608136177062988-5.605924129486084*1/(1+1/Math.exp((-0.3776005208492279-2.3450746536254883*(input[0]||0)+6.397401332855225*(input[1]||0)-2.0922303199768066*(input[2]||0))))+3.8874704837799072*1/(1+1/Math.exp((-0.42260363698005676-2.0069634914398193*(input[0]||0)-2.2474381923675537*(input[1]||0)+6.361815929412842*(input[2]||0))))+3.6749556064605713*1/(1+1/Math.exp((-0.2628178894519806+6.300031661987305*(input[0]||0)-2.051769971847534*(input[1]||0)-2.437774658203125*(input[2]||0)))))))};
}

function anonymous(input
) {
return {"v":1/(1+1/Math.exp((-2.851224899291992-6.9077935218811035*1/(1+1/Math.exp((1.7535384893417358-6.4406938552856445*(input[0]||0)-5.519856929779053*(input[1]||0)-5.78088903427124*(input[2]||0))))+6.646029472351074*1/(1+1/Math.exp((-0.3975197970867157+2.066161870956421*(input[0]||0)-9.319145202636719*(input[1]||0)+2.10994029045105*(input[2]||0))))+6.718785285949707*1/(1+1/Math.exp((-0.6700934171676636-4.956906318664551*(input[0]||0)+7.031759738922119*(input[1]||0)-4.967671871185303*(input[2]||0))))))),"m":1/(1+1/Math.exp((2.8563897609710693+6.936727046966553*1/(1+1/Math.exp((1.7535384893417358-6.4406938552856445*(input[0]||0)-5.519856929779053*(input[1]||0)-5.78088903427124*(input[2]||0))))-6.656985282897949*1/(1+1/Math.exp((-0.3975197970867157+2.066161870956421*(input[0]||0)-9.319145202636719*(input[1]||0)+2.10994029045105*(input[2]||0))))-6.730003833770752*1/(1+1/Math.exp((-0.6700934171676636-4.956906318664551*(input[0]||0)+7.031759738922119*(input[1]||0)-4.967671871185303*(input[2]||0)))))))};
}

function avg(arr){
    let sum = 0;
    for(let item of arr){
        sum += item;
    }
    return sum / arr.length;
}

function check(color = [0, 255, 170]){
    const test = rgb2norm(color);

    const rgbl = likely(anonymous$1(test),{
        'r':'red',
        'y':'yellow',
        'g':'green',
        'c':'cyan',
        'b':'blue',
        'm':'magenta'
    });
    const dbl = likely(anonymous$2([avg(test)]),{
        'd':'dark',
        'b':'bright'
    });
    const vml = likely(anonymous(test),{
        'v':'vibrant',
        'm':'muted'
    });

    let out = "";
    out += `I'm ${rgbl[0]}% sure this is ${rgbl[1]}.`;
    if(rgbl[0] < 75){
        out += "<br>";
        out += `However, it could also be ${rgbl[2]}.`;
    }
    out += "<br><br>";
    out += `I'm ${dbl[0]}% sure this is ${dbl[1]}.`;
    out += "<br><br>";
    out += `I'm ${vml[0]}% sure this is ${vml[1]}.`;
    return out;
}

function hexToRGB(hex) {
    // Check if the input is a valid hex color string
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
        console.error("Invalid hex color string.");
        return;
    }

    // If the hex string is 3 characters long (e.g. #fff), we need to expand it to 6 characters (e.g. #ffffff)
    if (hex.length === 4) {
        hex = "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }

    // Parse the hex string into its individual R, G, and B values
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    // Return the RGB values as an array
    return [r, g, b];
}

function RGBToHex(rgb) {
    // Check if the input is a valid RGB array
    if (!Array.isArray(rgb) || rgb.length !== 3 || rgb.some(isNaN)) {
        console.error("Invalid RGB array.");
        return;
    }
    rgb[0] = Math.round(rgb[0]);
    rgb[1] = Math.round(rgb[1]);
    rgb[2] = Math.round(rgb[2]);
    // Convert the RGB values to hexadecimal strings
    let r = Math.max(0, Math.min(rgb[0], 255)).toString(16).padStart(2, "0");
    let g = Math.max(0, Math.min(rgb[1], 255)).toString(16).padStart(2, "0");
    let b = Math.max(0, Math.min(rgb[2], 255)).toString(16).padStart(2, "0");
    
    // Return the hex color string
    return "#" + r + g + b;
    }

function checkColor(){
    const hex = document.getElementById('input').value;
    const rgb = hexToRGB(hex);
    document.getElementById('output').innerHTML = check(rgb);
}
function random(){
    const randRGB = RGBToHex([Math.random()*255,Math.random()*255,Math.random()*255]);
    document.getElementById('input').value = randRGB;
    checkColor();
}
random();
window.random = random;

window.checkColor = checkColor;

})();

</script>
<style>
    html{
        background:rgb(16, 16, 16);
        color:rgb(220,220,220);
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .wrapper{
        min-height:420px;
        margin:0 auto;
        position:relative;
        width:calc(100vw - 2.5rem);
        background:rgb(33,33,33);
        /* top:25vh; */
        padding:1rem;
    }
    .input{
        max-width:45vw;
        padding:0;
        word-wrap: break-word;
        /* text-align: center; */
    }
    .input #input{
        height:256px; 
        width:calc(100% - 4rem);
        max-width: 256px;
        margin:0 auto;
    }
    #output{
        padding:1rem;
        position:absolute;
        right:0;
        left:50vw;
        top:0;
        bottom:0;
        background:rgb(22,22,22);
    }
</style>

---

## Neural Network Basics

As software developers, we often need to build applications that can make predictions or classify data in real-time. One way to do this is by using neural networks, which are powerful machine learning models that can learn to perform tasks by analyzing patterns in data. While traditionally, running neural networks requires specialized hardware and software, it is now possible to run them directly in a web browser using JavaScript libraries like Brain.js.

Neural networks are a type of computer program that can learn to do certain tasks, like recognize patterns or make predictions, by analyzing data. They are made up of layers of interconnected "neurons," which are like tiny processing units. To train a neural network, we give it a bunch of data and tell it what we want it to do with it. It then figures out the best way to do that by adjusting the connections between neurons. One of the benefits of neural networks is that they can learn and get better at their tasks over time, without being specifically programmed for each one. This makes them useful for a lot of different things, like identifying objects in photos or understanding language. However, running neural networks can require a lot of computer power. That's where libraries like Brain.js come in - they allow you to use neural networks in your web browser, using JavaScript, which makes it easier to build and run them.

## "Hello World" With Brain.js

While Brain.js can run entirely in your browser, for these examples, I will be using the NodeJS version. You can install it with:

```bash
npm install --save brain.js
```

```js
const brain = require('brain.js');

// Create a new neural network with 1 input layer and 1 output layer
const net = new brain.NeuralNetwork({
  input: 1,
  output: 1
});

// Train the network with a single training example
net.train([
  { input: [0], output: [0] },
  { input: [1], output: [1] }
]);

// Test the network with a single test example
const output = net.run([1]);
console.log(output); // [0.9]
```

We could also train this as a LTSM like this:
```js
// Create a new LTSM network with 1 input layer and 1 output layer
const net = new brain.recurrent.LSTM({
  input: 1,
  output: 1
});
```

## Terms

**Models** are mathematical representations of a system or process that is trained to perform a specific task. For example, a model might be trained to classify images into different categories, or to predict the likelihood of a customer churning. A model is trained using a set of input data and corresponding labels, and the goal is to learn a function that can map the input data to the labels as accurately as possible. Once a model has been trained, it can be used to make predictions or classify new, unseen data.

**Networks**, in the context of machine learning, are a set of interconnected nodes or units that can process and transmit information. Networks can be used to model a wide range of systems, including biological networks, social networks, and transportation networks. In the context of neural networks, a network is composed of layers of interconnected "neurons," which process and transmit information using weighted connections and activation functions. Neural networks are a powerful tool for machine learning, and they can be used to learn complex patterns in data and make predictions or decisions.

**Overfitting** is when a model is too specifically trained on the data it has, and it doesn't work well with new data. This means that the model might work well on the data it's seen before, but it won't be able to make accurate predictions on new data. There are ways to prevent overfitting, like using different techniques while training the model or using the right type of model.

**Hyperparameters** are model parameters that are set before training a machine learning model and that cannot be learned from data. They are used to control the learning process and to tune the model's performance. Examples of hyperparameters include the learning rate, the regularization strength, and the number of hidden units in a neural network. Choosing appropriate hyperparameters is an important part of building and training a machine learning model, as they can significantly affect the model's ability to learn and generalize to new data.

**LTSM** stands for "long short-term memory." It is a type of recurrent neural network, which is a neural network that can process sequential data, such as time series or natural language. LTSM networks are particularly useful for tasks that require the network to remember and use information from long periods of time, as they are able to retain information in their internal state for longer periods than traditional recurrent neural networks. LTSM networks are widely used in natural language processing and speech recognition, among other applications.

**Neurons** are a basic unit of computation in a neural network. They are inspired by the structure and function of neurons in the human brain, and they are responsible for processing and transmitting information. A neuron takes in a set of inputs, processes them using weights and an activation function, and produces an output. The weights of the connections between neurons can be adjusted during training, allowing the network to learn complex patterns in data and make predictions or decisions.

**Stochastic gradient descent (SGD)** is an algorithm that helps us improve a model by adjusting its parameters to make it more accurate. It works by looking at one piece of data at a time and adjusting the model based on that. SGD is good for working with big datasets because it can be used to update the model as it goes along. However, it's also sensitive to how fast we want it to learn, which we call the learning rate, and we need to be careful to set it correctly.

**Layers** are groups of neurons that processes and send information. A neural network has multiple layers, including an input layer, one or more hidden layers, and an output layer. The input layer receives the data that we want the network to analyze, and the output layer produces the final result. The hidden layers use weights and special functions to process the data, and they help the network figure out how to do the task it's been trained for. The number and size of the hidden layers, and the connections between them, all affect how well the network can learn and perform.

## Training Basics

Training a neural network involves adjusting the weights of the connections between neurons in order to minimize the error between the predicted output of the network and the true label of the input data. This process is typically done using an optimization algorithm, such as stochastic gradient descent, which adjusts the weights to reduce the error.

To train a neural network, you need a set of input data and corresponding labels, which are the true outputs for the input data. The input data is fed into the network, and the predicted output is compared to the true label. The error between the predicted output and the true label is then used to adjust the weights of the connections between neurons in order to improve the performance of the network. This process is repeated for multiple epochs, or passes through the training data, until the error is minimized and the network is able to make accurate predictions on the training data.

Once the network is trained, it can be used to make predictions or classify new, unseen data. It is important to evaluate the performance of the network on a separate test set, to ensure that it is able to generalize well to new data.

## Normalizing & Scaling

Normalizing or scaling data is important when training a neural network because it can help to improve the performance of the model. This is because the features in the input data may have different scales and ranges, and this can cause problems for the optimization algorithm that is used to train the network.

For example, consider a dataset with two features, one that ranges from 0 to 1 and another that ranges from 0 to 1000. If the data is not normalized, the optimization algorithm may prioritize adjusting the weights of the feature that ranges from 0 to 1000, because it has a larger scale. This can slow down the training process and make it difficult for the network to converge to a good solution.

Normalizing or scaling the data can help to mitigate these problems by transforming the features to have a similar scale and range. There are several ways to normalize or scale data, such as min-max normalization, standardization, and z-score normalization. By using normalized or scaled data, the optimization algorithm can more easily find a good set of weights for the network, which can improve the performance of the model.

## Ensemble Models

Using multiple purpose-trained neural networks, also known as "ensemble models," can often be more effective and easier to train than a single general-purpose network. This is because ensemble models can combine the predictions of multiple models, which can improve the overall accuracy of the ensemble.

One way to create an ensemble model is by training multiple neural networks on different subsets of the data and then averaging or weighted averaging their predictions. This is known as "bagging," and it can help to reduce overfitting, which is when a model performs well on the training data but poorly on new, unseen data.

Another approach is to train multiple neural networks on the same data, but with different model architectures or hyperparameters. This is known as "boosting," and it can help to improve the generalization of the ensemble model, as the different models may learn complementary features from the data.

Ensemble models can also be easier to train than a single general-purpose network, as the individual models can be trained in parallel, which can speed up the training process. Additionally, the performance of an ensemble model is often more robust and stable than a single model, as it is less prone to overfitting and can achieve better results on a wide range of tasks.

## Exporting Networks as Vanilla JS

Brain.js is able to export trained networks as JavaScript functions using the toFunction method. This method returns a pure JavaScript function that can be used to run the trained network, without requiring the brain.js library to be included in the project.

Here is an example of how to export a trained Brain.js network as a JavaScript function:

```js
// Export the network as a JavaScript function
const runNetwork = net.toFunction();

// Test the network with a single test example
const output = runNetwork([1]);
console.log(output); // [0.9]
```

The function can then be used to run the network on new input data, and it will return the output of the network. This allows you to use the trained network in any JavaScript project, without having to include the brain.js library.

Note that the toFunction method only works for neural networks, and it is not available for other types of networks, such as LTSM networks.

## Doing A Little With A Lot

The examples above are trivial. However, it is possible for a neural network to achieve high accuracy with a small amount of training data in certain situations. This can occur when the task being learned is simple and the data is easy to classify, or when the data is highly structured and contains strong patterns that are easy for the network to learn.

For example, a neural network might be able to achieve high accuracy on a binary classification task, such as determining whether an image contains a cat or a dog, with only a few hundred training examples. This is because the task is relatively simple and the data is well-structured, with clear visual differences between the two classes.

Another example is a task that involves predicting a continuous value, such as the temperature or humidity, based on a small number of features, such as the day of the week and the time of day. In this case, the data may contain strong patterns that are easy for the network to learn, and the network may be able to achieve high accuracy with only a small amount of training data.

---

## The Training Data

Keeping with the theme of "Doing a little with a lot", the training data used in the example at the top of this page is fairly minimal. The output that you see there is created by running your chosen color input through 3 very simple, but separate neural networks. 

These data sets are composed of RGB color values that have been scaled into the range of 0 -> 1.

### RGB

Perhaps the most "complex" network is the "RGB" network. This network is responsible for determining the base color you have selected. This set consists of 6 basic colors as well as black and white. 

**KEY:**
```text
r - red
y - yellow
g - green
c - cyan
b - blue
m - magenta
```

```js
// Color Spectrum
{ input: [1,0,0], output: {r:1,y:0,g:0,c:0,b:0,m:0} },
{ input: [1,1,0], output: {r:0,y:1,g:0,c:0,b:0,m:0} },
{ input: [0,1,0], output: {r:0,y:0,g:1,c:0,b:0,m:0} },
{ input: [0,1,1], output: {r:0,y:0,g:0,c:1,b:0,m:0} },
{ input: [0,0,1], output: {r:0,y:0,g:0,c:0,b:1,m:0} },
{ input: [1,0,1], output: {r:0,y:0,g:0,c:0,b:0,m:1} },
// Black & White
{ input: [1,1,1], output: {r:0,y:0,g:0,c:0,b:0,m:0} },
{ input: [0,0,0], output: {r:0,y:0,g:0,c:0,b:0,m:0} }
```

### Dark/Bright

This network is trained to return the brightness of the color. This is the simplest network as it is only trained on rows of data.

**KEY:**
```text
d - dark
b - bright
```

```js
{ input: [avg([0,0,0])], output: {d:1, b:0} },
{ input: [avg([1,0,0])], output: {d:0, b:1} }
```

### Vibrant/Muted

The Vibrant/Muted network needs a bit more in-depth training due to some edge cases.

**KEY:**
```text
v - vibrant
m - muted
```

```js
{ input: [1,0,0], output: {v:1, m:0} },
{ input: [1,1,0], output: {v:1, m:0} },
{ input: [0,1,0], output: {v:1, m:0} },
{ input: [0,1,1], output: {v:1, m:0} },
{ input: [0,0,1], output: {v:1, m:0} },
{ input: [1,0,1], output: {v:1, m:0} },
// Black, White, Grey
{ input: [1,1,1], output: {v:0, m:1} },
{ input: [0,0,0], output: {v:0, m:1} },
{ input: [0.5,0.5,0.5], output: {v:0, m:1} }
```

## Setting Up A Trainer

To facilitate training multiple models, I wrote a simple trainer class take care of some basic tasks involved in training.

```js
import brain from 'brain.js';
import fs from 'fs';
const trainer = {
    network: new brain.NeuralNetwork(),
    name: "net",
    trainingData: [],
    options: {
        // Defaults values --> expected validation
        iterations: 20000, // the maximum times to iterate the training data --> number greater than 0
        errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
        log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
        logPeriod: 10, // iterations between logging out --> number greater than 0
        learningRate: 0.3, // scales with delta to effect training rate --> number between 0 and 1
        momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
        callback: ()=>{}, // a periodic call back that can be triggered while training --> null or function
        callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
        timeout: 1024*1024, // the max number of milliseconds to train for --> number greater than 0. Default --> Infinity
    },
    setType(type){
        switch(type){
            case "nn":
                this.network = new brain.NeuralNetwork();
                break;
            case "ltsm":
                this.network = new brain.recurrent.LSTM();
                break;
        }
    },
    loadSet(set){
        this.trainingData.push(...set);
    },
    loadSetStatic(set, out){
        for(let item of set){
            this.trainingData.push({input:item, output:out});
        }
    },
    train(orLoad = false, saveNet = true){
        if(orLoad){
            if(fs.existsSync('./nets/builds/'+this.name+'.net.json')){
                this.load();
                console.log('Loading Network...');
                return;
            }
        }
        this.network.train(this.trainingData, this.options);
        if(saveNet){
            this.save();
        }
    },
    checkData(){
        let ins = [];
        let outs = [];
        for(let item of this.trainingData){
            if(ins.includes(item.input)){
                console.log(item);
                return;
            }
            if(outs.includes(item.output)){
                console.log(item);
                return;
            }
        }
        console.log('OK');
    },
    test(set){
        let correct = 0;
        let incorrect = [];
        let i = 0;
        for(let item of set){
            const res = this.likely(item.input);
            if(JSON.stringify(item.output).includes(res)){
                correct++;
            }else{
                incorrect.push([item.output, res]);
            }
            i++;
        }
        const out = {
            string: (correct / set.length)*100 + "%",
            correct: correct,
            incorrect: incorrect
        }
        return out;
    },
    save(){
        const json = this.network.toJSON();
        fs.writeFileSync('./nets/builds/'+this.name+'.net.json',JSON.stringify(json, null, 2));
        const func = this.network.toFunction().toString();
        fs.writeFileSync('./nets/builds/'+this.name+'.net.js','export default '+func);
    },
    load(){
        const text = fs.readFileSync('./nets/builds/'+this.name+'.net.json');
        this.network.fromJSON(JSON.parse(text));
    },
    toFunction(){
        return this.network.toFunction();
    },
    run(test){
        return this.network.run(test) || 'NA';
    },
    likely(test){
        return brain.likely(test, this.network);
    }
};

export default trainer;
```

## Using The Trainer

```js
import trainer from '../trainer.js';

trainer.name = "rgb";
trainer.setType('nn');

trainer.loadSet([
  { input: [1,0,0], output: {r:1,y:0,g:0,c:0,b:0,m:0} },
  { input: [1,1,0], output: {r:0,y:1,g:0,c:0,b:0,m:0} },
  { input: [0,1,0], output: {r:0,y:0,g:1,c:0,b:0,m:0} },
  { input: [0,1,1], output: {r:0,y:0,g:0,c:1,b:0,m:0} },
  { input: [0,0,1], output: {r:0,y:0,g:0,c:0,b:1,m:0} },
  { input: [1,0,1], output: {r:0,y:0,g:0,c:0,b:0,m:1} },
  // Black & White
  { input: [1,1,1], output: {r:0,y:0,g:0,c:0,b:0,m:0} },
  { input: [0,0,0], output: {r:0,y:0,g:0,c:0,b:0,m:0} }
]);

trainer.train(false, true);
```

This will output two files to `./nets/builds/`. One file will be a `.net.js` file and the other is a `.net.json`. The only file needed to run the network in the future is the `.net.js` file. The JSON can be loaded as well, but that is not the default behavior. 

Note that the `.net.json` and `.net.js` file suffixes are not a Brain.js related suffix and just something I've used to help sort files in this example code. 

## The Rest Of The Code

The rest of the code is mostly boilerplate, but if you are interested in checking it our or running it yourself it is hosted on [GitHub.com](https://github.com/matdombrock/colorBrainJS).