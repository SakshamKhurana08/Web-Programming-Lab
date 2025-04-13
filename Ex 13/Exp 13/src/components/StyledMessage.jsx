import React from 'react';

const StyledMessage = () => {
  const messageStyle = {
    color: 'white',
    backgroundColor: 'blue',
    padding: '10px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return <h1 style={messageStyle}>This is a styled message!</h1>;
};

export default StyledMessage;
