import React, { useState } from 'react';
import { Box, Typography, Button, CssBaseline } from '@mui/material';
import gato from './elgato.jpeg';
import Yes from './yes';

function App() {
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 47.7, y: 56 });
  const [noButtonClickCount, setNoButtonClickCount] = useState(0); 
  const [showBlankComponent, setShowBlankComponent] = useState(false);

  const handleNoClick = () => {
    setYesButtonSize(yesButtonSize + 10);
    const newLeft = Math.random() * 90;
    const newTop = Math.random() * 90;
    setNoButtonPosition({ x: newLeft, y: newTop });
    setNoButtonClickCount(noButtonClickCount + 1);
  };

  const handleYesClick = () => {
    setShowBlankComponent(!showBlankComponent);
  };

  return (
    <Box sx={{ p: 2 }}>
      <CssBaseline />
      {showBlankComponent ? (
        <Yes />
      ) : (
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#ff1493',
              fontFamily: 'Arial, sans-serif',
              zIndex: 10,
            }}
          >
            Will you be my Valentine?
          </Typography>
          <Box
            component="img"
            src={gato}
            alt="gato"
            sx={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '20px',
            }}
          />
          <Button
            sx={{
              position: 'absolute',
              transform: `scale(${yesButtonSize})`,
              backgroundColor: 'rgb(255, 152, 169)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgb(255, 100, 130)',
              },
              borderRadius: '20px',
              m: 1,
            }}
            onClick={handleYesClick}
          >
            Yes
          </Button>
          {noButtonClickCount < 3 && (
            <Button
              onClick={handleNoClick}
              className="no-button"
              sx={{
                position: 'absolute',
                left: `${noButtonPosition.x}%`,
                top: `${noButtonPosition.y}%`,
                backgroundColor: 'red',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'darkred',
                },
                borderRadius: '20px',
                m: 1,
                transition: 'left 0.5s, top 0.5s',
              }}
            >
              No
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
}

export default App;
