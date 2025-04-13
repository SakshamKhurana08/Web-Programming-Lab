import React from 'react';
import HelloWithoutJSX from './components/HelloWithoutJSX';
import HelloWithJSX from './components/HelloWithJSX';
import HelloWithVariable from './components/HelloWithVariable';
import FruitList from './components/FruitList';
import StyledMessage from './components/StyledMessage';
import SumOfSquares from './components/SumOfSquares';
import Greeting from './components/Greeting';
import DayOfWeek from './components/DayOfWeek';
import PrimeChecker from './components/PrimeChecker';
import TemperatureConverter from './components/TemperatureConverter';
import PalindromeChecker from './components/PalindromeChecker';
import RandomNumberButton from './components/RandomNumberButton';
import LeapYearChecker from './components/LeapYearChecker';
import UserGreeting from './components/UserGreeting';

const App = () => {
  return (
    <div>
      <HelloWithoutJSX />
      <HelloWithJSX />
      <HelloWithVariable />
      <FruitList />
      <StyledMessage />
      <SumOfSquares num1={3} num2={4} />
      <Greeting isMorning={true} />
      <DayOfWeek />
      <PrimeChecker number={7} />
      <TemperatureConverter />
      <PalindromeChecker />
      <RandomNumberButton />
      <LeapYearChecker />
      <UserGreeting />
    </div>
  );
};

export default App;
