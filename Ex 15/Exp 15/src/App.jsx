import React, {useState} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import StyledButton from './StyledButton';
import StyledButton2 from './StyledButton2';
import StyledButton3 from './StyledButton3';
import LifecycleDemo from './LifecycleDemo';
import CounterReducer from './CounterReducer';
import JokeFetcher from './JokeFetcher';
import FocusInput from './FocusInput';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import Parent from './Parent';
import FormWithRef from './FormWithRef';
import FormWithState from './FormWithState';
import './App.css';

const App = () => {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="app-container">
      <Header title="Welcome to the Joke App 🤣" />
      <Content />
      <Footer />
      <h1>Inline Styled Button Example</h1>
      <StyledButton label="Click Me" onClick={handleClick} />
      <h1>Internal Styled Button Example</h1>
      <StyledButton2 label="Click Me" onClick={handleClick2} />
      <h1>External CSS Styled Button</h1>
      <StyledButton3 label="Click Me" onClick={handleClick3} />
      <h1>React Lifecycle Methods (Class Component)</h1>
      <button onClick={() => setShowComponent(prev => !prev)}>
        {showComponent ? 'Unmount' : 'Mount'} LifecycleDemo
      </button>
      {showComponent && <LifecycleDemo />}
      <CounterReducer></CounterReducer>
      <JokeFetcher></JokeFetcher>
      <FocusInput></FocusInput>
      <ThemeProvider> <ThemeToggle /> </ThemeProvider>
      <Parent></Parent>
      <FormWithState />
      <hr />
      <FormWithRef />
    </div>
  );
};

const handleClick = () => {
  alert('Inline Styled Button Clicked!');
};

const handleClick2 = () => {
  alert('Internal Styled Button Clicked!');
};

const handleClick3 = () => {
  alert('External Styled Button Clicked!');
};

export default App;
