import React from 'react';
import { Box } from '@mui/material';
import happy from './happy-cat-happy-happy-cat.gif';

function Yes() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={happy}
        alt="Happy cat"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}

export default Yes;
