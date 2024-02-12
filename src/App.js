import React, { useState } from 'react';
import './App.css';
import gato from './elgato.jpeg'
import Yes from './yes'; 

function App() {
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 47.7, y: 56 });
  const [showBlankComponent, setShowBlankComponent] = useState(false); 

  const handleNoClick = () => {
    setYesButtonSize(yesButtonSize + 10);
    const newLeft = Math.random() * 90;
    const newTop = Math.random() * 90;
    setNoButtonPosition({ x: newLeft, y: newTop });
  };

  const handleYesClick = () => {
    setShowBlankComponent(!showBlankComponent);
  };

  if (showBlankComponent) {
    return <Yes />;
  } else {
    return (
      <>
        <h2>Will you be my Valentine?</h2>
        <div className="App">
          <img src={gato} alt="gato" className="valentine-image" />
          <button
            className="yes-button"
            style={{ position: 'absolute', transform: `scale(${yesButtonSize})` }}
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            className="no-button"
            style={{
              position: 'absolute',
              left: `${noButtonPosition.x}%`,
              top: `${noButtonPosition.y}%`,
              transition: 'left 0.5s, top 0.5s',
            }}
          >
            No
          </button>
        </div>
      </>
    );
  }
}

export default App;