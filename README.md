# d3-wave

d3-wave is a simple and customizable React component library to build faster and beautiful sine waves using D3.

Each wave has an adjustable amplitude, frequency, and position. Visually, the speed and starting placement of the wave can be modified as well. Multiple wave components can be created, then added together. By doing this, a single wave component is built in D3, which represents the sum of the two (or more) waves using additive synthesis.

In the future, there will be different types of waves that can be specified and built, such as saw waves and square waves.

# Installation

```js
// with npm
npm install d3-sine
```

# Usage

#### Basic Sine Wave

```js
import * as React from 'react';
import ReactDOM from 'react-dom';

function App() {
  // create a single wave
  <Waveform amplitude={[1]} frequency={[5]} height={200} width={600} />
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

#### Additive Synthesis

```js
import * as React from 'react';
import ReactDOM from 'react-dom';

function App() {
  // create a single wave
  // combine two waves together
  <Waveform amplitude={[0.5, 0.5]} frequency={[5, 10]} height={200} width={600} />
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

# License
This project is licensed under the terms of the [MIT license](https://github.com/dkharazi/d3-wave/blob/master/LICENSE).
