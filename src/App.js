import './App.css';
import invert from 'invert-color';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState(randomColor());
  const [chosenHue, setChosenHue] = useState('random');
  const [chosenLuminosity, setChosenLuminosity] = useState('random');
  const newBackgroundColor = randomColor({
    hue: chosenHue,
    luminosity: chosenLuminosity,
  });
  const [width, setWidth] = useState(600);
  const colorBoxWidth = width * (2 / 3);

  return (
    <div className="App">
      <h1>Welcome to the Random Color Generator</h1>
      <h3>It's awesome, trust me!</h3>
      <div
        className="outerBox"
        style={{
          width: width,
          height: width,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          border: '10px white',
          borderRadius: 25,
          backgroundColor: invert(backgroundColor),
          color: invert(backgroundColor, true),
        }}
      >
        <div
          className="colorBox"
          style={{
            width: colorBoxWidth,
            height: colorBoxWidth,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            border: '1px white',
            borderRadius: 25,
            backgroundColor: backgroundColor,
          }}
        >
          Generated Color: {backgroundColor}
        </div>
      </div>
      <br />
      <button onClick={() => setBackgroundColor(newBackgroundColor)}>
        Generate
      </button>
      <br />
      <br />
      <h4>Specify values here!</h4>
      <div>
        <label htmlFor="hue">Specify a hue</label>
        <input
          name="hue"
          id="hue"
          value={chosenHue}
          onChange={(event) => {
            setChosenHue(event.currentTarget.value);
          }}
        />
        <br />
        <label htmlFor="luminosity">Specify a luminosity value</label>
        <input
          name="luminosity"
          id="luminosity"
          value={chosenLuminosity}
          onChange={(event) => setChosenLuminosity(event.currentTarget.value)}
        />
        <br />
        <label htmlFor="resize">Want to resize?</label>
        <input
          type="range"
          name="resize"
          id="resize"
          min="300"
          max="900"
          value={width}
          onChange={(event) => setWidth(event.currentTarget.value)}
        />
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
