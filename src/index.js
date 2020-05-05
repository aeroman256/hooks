import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
    )
}

const HookSwitcher = () => {
  const [color, setColor] = useState('grey')

  const [fontSize, setFontSize] = useState(14)
  return (
    <div style={{
      padding: '10px', 
      backgroundColor: color,
      fontSize: `${fontSize}px`
      }}>
      <button onClick={() => {return setColor("grey")}}>
        Dark
      </button>
      <button onClick={() => {return setColor("white")}}>
        Light
      </button>
      <button onClick={() => {return setFontSize((fontSize) => {
        return fontSize + 2
      })}}>
        +
      </button>
      <button onClick={() => {return setFontSize((fontSize) => fontSize - 2)}}>
        -
      </button>
      <p>Hello world!</p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
