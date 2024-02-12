import React from 'react';
import happy from './happy-cat-happy-happy-cat.gif';

function Yes() {
  return (
    <div style={{ width: '70vw', height: '70vh' }}>
    <img src={happy} alt="happy GIF" style={{ width: '70vw', height: '100vh', objectFit: 'cover' }} />
  </div>
  );
}

export default Yes;
