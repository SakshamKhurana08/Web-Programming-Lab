// src/components/HelloWithoutJSX.jsx
import React from 'react';

const HelloWithoutJSX = () => {
  return React.createElement('h1', null, 'Hello, React! (Without JSX)');
};

export default HelloWithoutJSX;
