import React from 'react';

const SumOfSquares = ({ num1, num2 }) => {
  const sum = num1 ** 2 + num2 ** 2;

  return <p>The sum of squares of {num1} and {num2} is {sum}.</p>;
};

export default SumOfSquares;
