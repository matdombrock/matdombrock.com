<steelsky>
{
    "title":"ADSR Envelopes",
    "description":"An exploration of ADSR envelopes for DSP.",
    "tags":"#programming #thoughts",
    "type":"post",
    "date":"2025-09-01"
}
</steelsky>

# ADSR Envelope
This post discusses my thoughts on implementing an ADSR envelope for real-time DSP applications. There are many, many ways to go about this. I'm not claiming this is the best or perfect soution but after careful consideration, I belive this approach is the best I have found so far. 

## Interactive Demo

<center>
  <canvas id="mainCanvas" style="background-color: rgb(27,27,27)"></canvas>
  <br/>
  <div id="controls">
    <button onClick="state.noteOn()">Note ON</button>
    <button onClick="state.noteOff()">Note OFF</button>

    <br/>
    <label for="attack">A:</label>
    <input type="range" id="attack" name="attack" min="0.1" max="5" value="5" step="0.1" oninput="state.updateADSR(this)">

    <br/>
    <label for="decay">D:</label>
    <input type="range" id="decay" name="decay" min="0.1" max="5" value="1" step="0.1" oninput="state.updateADSR(this)">

    <br/>
    <label for="sustain">S:</label>
    <input type="range" id="sustain" name="sustain" min="0" max="1" value="1" step="0.1" oninput="state.updateADSR(this)">

    <br/>
    <label for="release">R:</label>
    <input type="range" id="release" name="release" min="0.1" max="5" value="1" step="0.1" oninput="state.updateADSR(this)">
  </div>

  <br/>
  <div id="readOut" style="white-space: pre-wrap;"></div>
  <div id="about">
  </div>
</center>

<script>

// State
const state = {
  wavetables: [],
  adsr: {
    attack: 1, // Seconds
    decay: 2, // Seconds
    sustain: 0.5, // 0 to 1
    release: 3, // Seconds
  },
  sustainCache: 0.5,
  position: 0, // 0 to 1
  speed: 0, // Increment per frame
  isNoteOn: true,
  sampleRate: 60, // 60 Hz
};

// Generate wavetables for each ADSR section
// This only needs to be generated once at start and again when the sustain level changes
// It would be simple to use multiple tables instead of recalculating on sustain change
state.generateADSRWavetables = function() {
  // Each wavetable is an array of normalized [0,1] samples
  // `N = 41;` sets the number of samples (points) used to generate each ADSR wavetable segment (attack, decay, sustain, release). This means each segment is represented by 42 points (from 0 to 41 inclusive). A higher N gives smoother curves but uses more memory and computation; a lower N makes the curves more jagged.
  const N = 41;
  const sustainYNorm = 1 - state.adsr.sustain;
  // Helper for exponential curve
  function expInterp(x, y0, y1, k) {
    return y0 + (y1 - y0) * (1 - Math.exp(-k * x)) / (1 - Math.exp(-k));
  }
  // Attack
  const attack = [];
  for (let i = 0; i <= N; ++i) {
    const t = i / N;
    attack.push(expInterp(t, 1, 0, 4)); // y: 1 (bottom) to 0 (top)
  }
  // Decay
  const decay = [];
  for (let i = 0; i <= N; ++i) {
    const t = i / N;
    decay.push(expInterp(t, 0, sustainYNorm, 3));
  }
  // Sustain (flat)
  const sustain = [];
  for (let i = 0; i <= N; ++i) {
    sustain.push(sustainYNorm);
  }
  // Release
  const release = [];
  for (let i = 0; i <= N; ++i) {
    const t = i / N;
    release.push(expInterp(t, sustainYNorm, 1, 2.5));
  }
  state.wavetables = { attack, decay, sustain, release };
}

// Get ADSR value at current state.position (0..1)
state.getADSRValueAt = function() {
  // position: 0..1
  const sectionLength = 1 / 4;
  let localT, table;
  if (state.position < sectionLength) {
    localT = state.position / sectionLength;
    table = state.wavetables.attack;
  } else if (state.position < 2 * sectionLength) {
    localT = (state.position - sectionLength) / sectionLength;
    table = state.wavetables.decay;
  } else if (state.position < 3 * sectionLength) {
    localT = (state.position - 2 * sectionLength) / sectionLength;
    table = state.wavetables.sustain;
  } else {
    localT = (state.position - 3 * sectionLength) / sectionLength;
    table = state.wavetables.release;
  }
  // Interpolate between nearest samples
  const N = table.length - 1;
  const idx = localT * N;
  const i0 = Math.floor(idx);
  const i1 = Math.min(i0 + 1, N);
  const frac = idx - i0;
  return 1-(table[i0] * (1 - frac) + table[i1] * frac);
}

// Return current section string
state.checkSection = function() {
  return ["attack", "decay", "sustain", "release"][Math.floor(state.position * 4)];
}

// Cache the sustain value
state.cacheSustain = function() {
  state.sustainCache = state.adsr.sustain;
}

// Get the cached sustain value
state.getCachedSustain = function() {
  state.adsr.sustain = state.sustainCache;
  state.generateADSRWavetables();
}

// Recalculate the sustain value
state.recalcSustain = function() {
  state.cacheSustain();
  state.adsr.sustain = state.getADSRValueAt();
  state.generateADSRWavetables();
}

// Trigger note on
state.noteOn = function() {
  state.getCachedSustain();
  state.position = 0;
  state.isNoteOn = true;
}

// Trigger note off
state.noteOff = function() { 
  state.recalcSustain();
  state.position = 0.75; // Jump to release
  state.isNoteOn = false;
}

// Update ADSR from slider input
state.updateADSR = function(slider) {
  const name = slider.name;
  const value = parseFloat(slider.value);
  state.adsr[name] = value;
  if (name === "sustain") {
    state.generateADSRWavetables();
    state.cacheSustain();
  }
  state.noteOn();
}

// View
const view = {
  width: Math.min(window.innerWidth * 0.8, 720),
  height: 360,
  sectionColors: {
    attack: "#00ff00",
    decay: "#00ffff",
    sustain: "#ffff00",
    release: "#ff00ff"
  },
  canvas: document.getElementById("mainCanvas"),
  ctx: document.getElementById("mainCanvas").getContext("2d"),
  readOutDiv: document.getElementById("readOut"),
};

// Draw the ADSR wavetables to the canvas
view.drawADSRWavetables = function() {
  // Draw each wavetable to the canvas
  const total = 4;
  const scaleX = view.width / total;
  // Attack
  view.ctx.beginPath();
  view.ctx.moveTo(0, view.height * state.wavetables.attack[0]);
  for (let i = 0; i < state.wavetables.attack.length; ++i) {
    const t = i / (state.wavetables.attack.length - 1);
    const x = t * scaleX;
    const y = view.height * state.wavetables.attack[i];
    view.ctx.lineTo(x, y);
  }
  view.ctx.strokeStyle = view.sectionColors.attack;
  view.ctx.lineWidth = 2;
  view.ctx.stroke();

  // Decay
  view.ctx.beginPath();
  view.ctx.moveTo(scaleX, view.height * state.wavetables.decay[0]);
  for (let i = 0; i < state.wavetables.decay.length; ++i) {
    const t = i / (state.wavetables.decay.length - 1);
    const x = scaleX + t * scaleX;
    const y = view.height * state.wavetables.decay[i];
    view.ctx.lineTo(x, y);
  }
  view.ctx.strokeStyle = view.sectionColors.decay;
  view.ctx.lineWidth = 2;
  view.ctx.stroke();

  // Sustain
  view.ctx.beginPath();
  view.ctx.moveTo(2 * scaleX, view.height * state.wavetables.sustain[0]);
  view.ctx.lineTo(3 * scaleX, view.height * state.wavetables.sustain[0]);
  view.ctx.strokeStyle = view.sectionColors.sustain;
  view.ctx.lineWidth = 2;
  view.ctx.stroke();

  // Release
  view.ctx.beginPath();
  view.ctx.moveTo(3 * scaleX, view.height * state.wavetables.release[0]);
  for (let i = 0; i < state.wavetables.release.length; ++i) {
    const t = i / (state.wavetables.release.length - 1);
    const x = 3 * scaleX + t * scaleX;
    const y = view.height * state.wavetables.release[i];
    view.ctx.lineTo(x, y);
  }
  view.ctx.strokeStyle = view.sectionColors.release;
  view.ctx.lineWidth = 2;
  view.ctx.stroke();
}

// Wrapper to generate and draw ADSR
view.drawADSR = function() {
  view.drawADSRWavetables();
}

// Draw current position line and circle
view.drawPosition = function(section) {
  const posX = state.position * view.width;
  view.ctx.beginPath();
  view.ctx.moveTo(posX, 0);
  view.ctx.lineTo(posX, 0 + view.height);
  view.ctx.strokeStyle = view.sectionColors[section];
  view.ctx.lineWidth = 1;
  view.ctx.stroke();
  view.ctx.moveTo(posX, 0 + view.height);
  // Draw a circle at the current value
  const valueY = view.height * (1 - state.getADSRValueAt());
  view.ctx.beginPath();
  view.ctx.arc(posX, valueY, 5, 0, 2 * Math.PI);
  view.ctx.fillStyle = "#ffffff";
  view.ctx.fill();
}

// Update the HTML readout
view.updateReadOut = function(section) {
  let out = "";
  out += `ADSR Times:\n`;
  out += `  Attack: ${state.adsr.attack.toFixed(2)}s\n`;
  out += `  Decay: ${state.adsr.decay.toFixed(2)}s\n`;
  out += `  Sustain: ${state.adsr.sustain.toFixed(2)}\n`;
  out += `  Release: ${state.adsr.release.toFixed(2)}s\n`;
  out += `Note: ${state.isNoteOn ? "on" : "off"}\n`;
  out += `Section: ${section}\n`;
  out += `Position: ${state.position.toFixed(2)}\n`;
  out += `Value: ${state.getADSRValueAt().toFixed(2)}\n`
  out += `Speed: ${(state.speed * state.sampleRate).toFixed(4)} (Normalized to sampleRate=1Hz)\n`;
  view.readOutDiv.innerText = out;
}

// Clear the canvas
view.clearCanvas = function() {
  view.ctx.fillStyle = "rgb(27,27,27)";
  view.ctx.fillRect(0, 0, view.width, view.height);
}

// Main draw function
view.draw = function(section) {
  view.clearCanvas();
  view.drawADSR();
  view.drawPosition(section);
  // Update HTML readout
  view.updateReadOut(section);
}

// Main loop
const mainLoop = function() {
  // if (state.position >= 1) return;
  const section = state.checkSection();
  view.draw(section);
  const isPreSustain = state.isNoteOn && state.position < 0.5;
  const isPostSustain = !state.isNoteOn;
  const isSustain = !(isPreSustain || isPostSustain);
  state.speed = (1 / (state.adsr[section] * 4)) / state.sampleRate;
  // Do not increase position when sustained
  if (isSustain) {
    state.speed = 0;
  }
  state.position += state.speed;
  state.position = state.position > 1 ? 1 : state.position;
  if (state.position === 1) {
    state.getCachedSustain();
  }
}

// Set the canvas size
view.canvas.width = view.width;
view.canvas.height = view.height;

// Reset ADSR sliders to default values
document.getElementById("attack").value = state.adsr.attack;
document.getElementById("decay").value = state.adsr.decay;
document.getElementById("sustain").value = state.adsr.sustain;
document.getElementById("release").value = state.adsr.release;

// Generate the wavetables
state.generateADSRWavetables();
// Run the main loop
setInterval(mainLoop, 1000 / state.sampleRate);

</script>
<style>
#mainCanvas {
  border: 1px solid #fff;
  padding: 10px;
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
}
#readOut,
#controls,
#about {
  width: 100%;
  max-width: 720px;
  text-align: left;
  box-sizing: border-box;
}
#about {
  margin-top: 50px;
}
body {
  max-width: 100vw;
  margin: 0;
  padding: 0;
}
button {
  margin: 5px;
  font-family: monospace;
  font-size: 16px;
  background-color: #222;
  color: #fff;
  border: 1px solid #555;
  cursor: pointer;
}

/* Responsive adjustments for small screens */
@media (max-width: 800px) {
  #mainCanvas,
  #readOut,
  #controls,
  #about {
    max-width: 100vw;
    font-size: 14px;
  }
}

</style>

## General Idea

The idea here is to use a single, uniform, static wavetable to represent an ADSR envelope. The speed at which we move through the table is determined by the time we want each stage to last.

### Simple Version
- Generate a wavetable where every stage has an X length of 1/4. 
- Calculate the `speed` at which to move through each stage of this wavetable based on the sample rate and stage time.
- Move through the table at this varying `speed` to determine our current `position` in the table. 
- Find the envelope value at our current `position`. 

### Less Simple Version
- Precompute a single, normalized ADSR wavetable that represents the shape of the envelope (attack, decay, sustain, release) at a fixed resolution.
- When a note is triggered, determine the desired durations for each ADSR phase (attack, decay, sustain, release) in samples or milliseconds.
- For each phase (attack, decay, sustain, release):
    - Calculate how quickly you need to move through the corresponding section of the wavetable so that it matches the desired duration.
    - This is done by setting a “speed” value: how many wavetable samples to advance per output sample.
- Initialize a phase accumulator for each ADSR stage to keep track of your position within the wavetable.
- As the envelope progresses:
    - For each output sample, increment the phase accumulator by the calculated speed for the current stage.
    - Use the accumulator to look up the current value from the wavetable (using interpolation if needed).
    - When the accumulator reaches the end of the current phase’s wavetable section, move to the next ADSR stage and update the speed accordingly.
- Continue this process until all stages are complete and the envelope reaches zero.
- This approach allows you to use a single, static wavetable for all envelopes, adjusting only the speed to fit any desired ADSR timing.

### Why this approach makes sense
- **Efficiency:** Using a precomputed wavetable (or "super-table") for the envelope shape allows for fast, sample-accurate envelope generation with minimal CPU usage.
- **Flexibility:** By varying the speed at which you traverse each segment, you can easily accommodate arbitrary ADSR times without regenerating the table (except for sustain level changes).
- **Commonality:** This is a well-established and widely used approach in both software and hardware synthesizers. Many synth engines (including those in DAWs and hardware synths) use either wavetable-based or mathematical function-based envelopes with similar logic.
- **Alternatives:** Some implementations use direct mathematical formulas (e.g., exponential or linear equations) instead of lookup tables, especially when CPU resources are plentiful or when parameter modulation is frequent. However, the wavetable approach is often preferred for its speed and predictability, especially in embedded or real-time systems.

### Notes on Example Code
- Example code here is written in JavaScript.
- Examples are based off the code powering this page but changed for simplicity and illustrative purposes.

## The ADSR Envelope Wavetable
First we generate an ADSR Envelope wavetable. This is really a set of 4 wavetables, one for each stage of the envelope. I'll refer to the entire set as the super-table.

So the tables are:
- Attack -- Transition from 0 to 1
- Decay -- Transition from 1 to sustain level
- Sustain -- Always a flat line at sustain level
- Release -- Transition from sustain level to 0

Each individual table has an X length of 1/4. This means the Envelope super-table always has an X length of 1.

Since each stage always has a length of 1/4, we only need to regenerate the table if the sustain level changes. *We do not need to regenerate the table if the attack, decay, or release times change*. The attack, decay, and release shapes are independent of their durations because the speed of traversal is what changes.

The structure of the super-table is something like:
```js
superTable = [
    attackTable, 
    decayTable, 
    sustainTable, 
    releaseTable
];
```

### Generating the Tables
```js
function generateADSRWavetables(sustainVal) {
  // Each wavetable is an array of normalized [0,1] samples
  // `N = 41;` sets the number of samples (points) used to generate each ADSR wavetable segment (attack, decay, sustain, release). 
  // This means each segment is represented by 42 points (from 0 to 41 inclusive). 
  // A higher N gives smoother curves but uses more memory and computation; a lower N makes the curves more jagged.
  const N = 41;
  const sustainYNorm = 1 - sustainVal;
  // Helper for exponential curve
  // `k` controls 'steepness'
  function expInterp(x, y0, y1, k) {
    return y0 + (y1 - y0) * (1 - Math.exp(-k * x)) / (1 - Math.exp(-k));
  }
  // Attack
  const attack = [];
  for (let i = 0; i <= N; ++i) {
    const t = i / N;
    attack.push(expInterp(t, 1, 0, 4)); // y: 1 (bottom) to 0 (top)
  }
  // Decay
  const decay = [];
  for (let i = 0; i <= N; ++i) {
    const t = i / N;
    decay.push(expInterp(t, 0, sustainYNorm, 3));
  }
  // Sustain (flat)
  const sustain = [];
  for (let i = 0; i <= N; ++i) {
    sustain.push(sustainYNorm);
  }
  // Release
  const release = [];
  for (let i = 0; i <= N; ++i) {
    const t = i / N;
    release.push(expInterp(t, sustainYNorm, 1, 2.5));
  }
  return { attack, decay, sustain, release };
}
```

**Notes:**
- **Using a single wavetable:** In my opinion, storing the envelope wavetable (super-table) in 4 parts is a better way to illustrate what is really happening here. That being said, a single wavetable is more efficient and easier to manage, especially for real-time or embedded applications. The only tradeoff is you need to track the index ranges for each stage, but this is straightforward.

- **Table Resolution:** Higher resolution (more samples) gives smoother curves but uses more memory and may be slower. Choose a resolution that balances quality and performance for your use case.

## Calculating the Stage

We can represent the current position in the super-table with a `position` value between `0..1`. 

The relationship between the `position` in the super-table and the individual tables is:
```
| Stage    | Start  | End   |
|----------|--------|-------|
| Attack   | 0.00   | 0.25  |
| Decay    | 0.25   | 0.50  |
| Sustain  | 0.50   | 0.75  |
| Release  | 0.75   | 1.00  |
```

These relationships between the position and super-table stage never change. *Instead of stretching the table to fit the time we want, we just vary the rate at which we change our position*.

Since each stage of the super-table has a known, static X length of `0.25` we can get the current stage very easily. 

For example, if we want to return the current stage index we might do something like:
```js
function pos2Stage(position) {
    if (position < (1/4)) {
        return 0; // Attack
    }
    else if (position < (2/4)) {
        return 1; // Decay
    }
    else if (position < (3/4)) {
        return 2; // Sustain
    }
    else {
        return 3; // Release
    }
}
superTable[pos2Stage(position)];
```

This demonstrates the concept clearly but is not the most efficient or elegant way to get the super-table index.

A better way to get the current super-table index is simply:
```js
superTable[Math.min(Math.floor(position * superTable.length), superTable.length - 1)];
```

## Calculating the Speed
The `speed` value is the rate of change of the position in the super-table. The `speed` value is determined by the time we want each stage to last.

This value is calculated with the following formula:
```js
speed = (1 / (time * 4)) / sampleRate;
```
- Where `time` is the amount of time in seconds we want this stage to last. 
- We multiply the `time` by `4` because each stage only takes up `1/4` of the entire super-table.
- We divide by the `sampleRate` to adjust for the number of samples per second.

For simplicity assume the sample rate is `1` and say we want a `1` second attack time. The speed would be:
```js
speed = (1 / (1 * 4)) / 1;
// or
speed = (1 / 4);
// Either way:
// speed = 0.25
```

In this simplified example we can think of the entire table as having a period of `1` second. The attack stage takes up `1/4` of that period, so the speed is `0.25`.

For a more realistic example, suppose we have defined our attack time as `10` seconds. 

We can calculate the rate of change (`speed`) for the attack stage as:
```js
speed = (1 / (10 * 4)) / sampleRate;
```

Every sample we increment our position by this `speed` amount. This will take `10` seconds to move through the attack stage of the table.

If we once again simplify this by assuming a sample rate of `1` we get:
```js
speed = (1/ (10 * 4)) / 1;
// speed = 0.025
```

### Dealing with Sustain
Each stage of our envelope aside from sustain deals with transitioning from value A to value B. Each other stage also has a known length in seconds. 

Sustain is the exception here. It doesn't really represent a time based value at all. 

Instead, sustain can go on for *any* (an unknown) length of time.

During sustain, position does not advance until `noteOff`, at which point position jumps to the start of release.

For example:
```js
speed = ...;// Calculate the speed
// Do not increase position when sustained
if (isSustain) {
  speed = 0;
}
```

This means that if we are in the sustain stage, we are **always at `position == 0.5`**. 

Because of this, we need to remember that when we get a `noteOff` event we must move our position to the start of the release stage:
```js
position = 0.75;
```

Alternatively, this could be handled by setting the `position` value to `0.75` as soon as we enter the release stage:
```js
speed = ...;// Calculate the speed
// Do not increase position when sustained
if (isSustain) {
  speed = 0;
  position = 0.75;
}
```

It doesn't functionally matter if the position is set when we enter the sustain stage or when we get a `noteOff` event. In my opinion it makes more sense to set the `position` value when we get the `noteOff` event because we also should set the `position` value to `0.0` when we get the `noteOn` event (reset).

We use this `speed` value to iterate through our envelope. We might implement a full function to do this as:
```js
function iterateEnv(adsr, position, isNoteOn) {
  const section = Math.min(Math.floor(position * 4), adsr.length - 1);
  const isPreSustain = isNoteOn && position < 0.5; // Note is on and position is less than 0.5
  const isPostSustain = !isNoteOn; // Note is off
  const isSustain = !(isPreSustain || isPostSustain); // Are we sustaining the note?
  let speed = (1 / (adsr[section] * 4)) / sampleRate;
  // Do not increase position when sustained
  if (isSustain) {
    speed = 0;
  }
  position += speed;
  // Clamp position to max 1.0
  position = Math.min(position, 1.0);
  return position;
}
```

**Note:**
- **Sample Rate Independence:** The approach is sample-rate independent as long as you calculate speed based on the current sample rate.

## Calculating the Current Value
Given a `wavetables` super-table and our current `position` in the super-table we can calculate our current envelope output value as follows: 
```js
function getADSRValueAt(wavetables, position) {
  // position: 0..1
  const stages = ['attack', 'decay', 'sustain', 'release'];
  const sectionLength = 1 / stages.length; // 1/4
  // Current stage index
  const stageIndex = Math.min(Math.floor(position / sectionLength), stages.length - 1);
  // Normalized position within our current stage
  const localT = (position - stageIndex * sectionLength) / sectionLength;
  // Target table
  const table = wavetables[stages[stageIndex]];
  // Interpolate between nearest samples
  const N = table.length - 1;
  const idx = localT * N;
  const i0 = Math.floor(idx);
  const i1 = Math.min(i0 + 1, N);
  const frac = idx - i0;
  return 1 - (table[i0] * (1 - frac) + table[i1] * frac);
}
```

**Note:**
- **Interpolation:** Linear interpolation is usually sufficient, but higher-order interpolation (e.g., cubic) can further smooth transitions if needed.


## Final Thoughts

- **Release from Non-Sustain:** If note-off occurs before reaching sustain, ensure the release phase starts from the current value, not always from the sustain level. The only thing that needs to change to make the new table is the sustain level. Calculating a new table where `sustain = envVal` will give the correct release values. This can be done either be re-calculating the table or switching to the correct pre-calculated table. Be sure you cache your current sustain value / table so that it can be restored when the envelope resets. *This is implemented in the demo but not implemented in the example code for simplicity*.

- **Envelope Re-triggering:** Decide how to handle rapid note retriggers (e.g., should the envelope restart, or continue from its current value?). *The demo/example code restarts when a new note is triggered*.

- **Anti-Aliasing:** For very fast envelopes, consider anti-aliasing if the output is used for audio-rate modulation. *This is not implemented in the example code*.

- **Stage Boundaries:** Take care when advancing between stages to avoid discontinuities or glitches, especially if using a single table.

- **Memory Usage:** For embedded or real-time systems, consider the memory footprint of your wavetable(s).

## Implementation Examples

### Simple JavaScript Implementation
This JavaScript code represents the general logic involved in this approach. It can be run in a JS console. 
```js
// For simplicity we will use global variables here
// However, functions will take these as parameters when possible
const sampleRate = 4;// Hz
const adsr = [1.0, 2.0, 0.5, 3.0]; // Time in seconds
// The `wavetables` value should update only when sustain changes
const wavetables = generateADSRWavetables(adsr[2]); // Send the sustain value
let isNoteOn = false;// `isNoteOn` Set to either true or false depending on env state
let position = 0;// `position` Set to our current position in the super-table
// Called when a note is triggered on
function noteOn() {
  isNoteOn = true;
  position = 0; // Reset the position in the super-table
}
// Called when a note is triggered off
function noteOff() {
  isNoteOn = false;
  position = 0.75; // Start of release
}
// Generate the ADSR wavetables
function generateADSRWavetables(sustainVal) {
  // Each wavetable is an array of normalized [0,1] samples
  // `N = 41;` sets the number of samples (points) used to generate each ADSR wavetable segment (attack, decay, sustain, release). 
  // This means each segment is represented by 42 points (from 0 to 41 inclusive). 
  // A higher N gives smoother curves but uses more memory and computation; a lower N makes the curves more jagged.
  const N = 41;
  const sustainYNorm = 1 - sustainVal;
  // Helper for exponential curve
  // `k` controls 'steepness'
  function expInterp(x, y0, y1, k) {
    return y0 + (y1 - y0) * (1 - Math.exp(-k * x)) / (1 - Math.exp(-k));
  }
  // Attack
  const attack = [];
  for (let i = 0; i <= N; ++i) {
    const t = i / N;
    attack.push(expInterp(t, 1, 0, 4)); // y: 1 (bottom) to 0 (top)
  }
  // Decay
  const decay = [];
  for (let i = 0; i <= N; ++i) {
    const t = i / N;
    decay.push(expInterp(t, 0, sustainYNorm, 3));
  }
  // Sustain (flat)
  const sustain = [];
  for (let i = 0; i <= N; ++i) {
    sustain.push(sustainYNorm);
  }
  // Release
  const release = [];
  for (let i = 0; i <= N; ++i) {
    const t = i / N;
    release.push(expInterp(t, sustainYNorm, 1, 2.5));
  }
  return { attack, decay, sustain, release };
}
// Get the ADSR env value at the position
function getADSRValueAt(wavetables, position) {
  // position: 0..1
  const stages = ['attack', 'decay', 'sustain', 'release'];
  const sectionLength = 1 / stages.length; // 1/4
  // Current stage index
  const stageIndex = Math.min(Math.floor(position / sectionLength), stages.length - 1);
  // Normalized position within our current stage
  const localT = (position - stageIndex * sectionLength) / sectionLength;
  // Target table
  const table = wavetables[stages[stageIndex]];
  // Interpolate between nearest samples
  const N = table.length - 1;
  const idx = localT * N;
  const i0 = Math.floor(idx);
  const i1 = Math.min(i0 + 1, N);
  const frac = idx - i0;
  return 1 - (table[i0] * (1 - frac) + table[i1] * frac);
}
// Iterate through the envelope
function iterateEnv(adsr, position, isNoteOn) {
  const section = Math.min(Math.floor(position * 4), adsr.length - 1);
  const isPreSustain = isNoteOn && position < 0.5; // Note is on and position is less than 0.5
  const isPostSustain = !isNoteOn; // Note is off
  const isSustain = !(isPreSustain || isPostSustain); // Are we sustaining the note?
  let speed = (1 / (adsr[section] * 4)) / sampleRate;
  // Do not increase position when sustained
  if (isSustain) {
    speed = 0;
  }
  position += speed;
  // Clamp position to max 1.0
  position = Math.min(position, 1.0);
  return position;
}
// Trigger the initial note on event
noteOn();
// Call the `getEnvValue` function at `sampleRate` Hz. 
setInterval(() => {
  // Trigger a `noteOff` event when we hit sustain
  if (position >= 0.5 && isNoteOn) {
    console.log('\nSustain reached');
    noteOff();
  }
  position = iterateEnv(adsr, position, isNoteOn);
  const val = getADSRValueAt(wavetables, position);
  console.log(`\nPosition: ${position.toFixed(3)}`);
  console.log(`Env Value: ${val.toFixed(3)}`); // Log the current env value
}, 1000 / sampleRate); // 1000 = 1 second
```

### Simple C Implementation
Below is a re-implementation of the JS code in the C programming language.
```c
#include <stdio.h>
#include <math.h>
#include <stdbool.h>
#include <unistd.h> // For usleep

#define N 41
#define STAGES 4
#define SAMPLE_RATE 4

typedef struct {
    float attack[N+1];
    float decay[N+1];
    float sustain[N+1];
    float release[N+1];
} Wavetables;

float expInterp(float x, float y0, float y1, float k) {
    return y0 + (y1 - y0) * (1 - expf(-k * x)) / (1 - expf(-k));
}

void generateADSRWavetables(Wavetables *wt, float sustainVal) {
    float sustainYNorm = 1.0f - sustainVal;
    for (int i = 0; i <= N; ++i) {
        float t = (float)i / N;
        wt->attack[i]  = expInterp(t, 1.0f, 0.0f, 4.0f);
        wt->decay[i]   = expInterp(t, 0.0f, sustainYNorm, 3.0f);
        wt->sustain[i] = sustainYNorm;
        wt->release[i] = expInterp(t, sustainYNorm, 1.0f, 2.5f);
    }
}

float getADSRValueAt(Wavetables *wt, float position) {
    // Note: It would be better/faster to not use strings
    // They are used here to keep things as close to the JS example as possible
    const char *stages[] = {"attack", "decay", "sustain", "release"};
    float sectionLength = 1.0f / STAGES;
    int stageIndex = (int)fminf(floorf(position / sectionLength), STAGES - 1);
    float localT = (position - stageIndex * sectionLength) / sectionLength;
    float *table;
    switch (stageIndex) {
        case 0: table = wt->attack; break;
        case 1: table = wt->decay; break;
        case 2: table = wt->sustain; break;
        case 3: table = wt->release; break;
        default: table = wt->release; break;
    }
    int len = N;
    float idx = localT * len;
    int i0 = (int)floorf(idx);
    int i1 = i0 < len ? i0 + 1 : len;
    float frac = idx - i0;
    float val = table[i0] * (1 - frac) + table[i1] * frac;
    return 1.0f - val;
}

float iterateEnv(float adsr[STAGES], float position, bool isNoteOn) {
    int section = (int)fminf(floorf(position * STAGES), STAGES - 1);
    bool isPreSustain = isNoteOn && position < 0.5f;
    bool isPostSustain = !isNoteOn;
    bool isSustain = !(isPreSustain || isPostSustain);
    float speed = (1.0f / (adsr[section] * STAGES)) / SAMPLE_RATE;
    if (isSustain) speed = 0.0f;
    position += speed;
    if (position > 1.0f) position = 1.0f;
    return position;
}

int main() {
    float adsr[STAGES] = {1.0f, 2.0f, 0.5f, 3.0f};
    Wavetables wt;
    generateADSRWavetables(&wt, adsr[2]);
    bool isNoteOn = true;
    float position = 0.0f;

    printf("Starting ADSR envelope demo (C version):\n");
    while (true) {
        if (position >= 0.5f && isNoteOn) {
            printf("\nSustain reached\n");
            isNoteOn = false;
            position = 0.75f;
        }
        position = iterateEnv(adsr, position, isNoteOn);
        float val = getADSRValueAt(&wt, position);
        printf("Position: %.3f, Env Value: %.3f\n", position, val);
        usleep(1000000 / SAMPLE_RATE); // Sleep for 1/sample_rate seconds
    }
    return 0;
}
```

Compile and run:
```sh
gcc adsr.c -lm
./a.out
```
