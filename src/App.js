import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [ showDemo, setShowDemo ] = useState(false);
  console.log('App RUNNING!');
  const clickHandler = ()=> {
    setShowDemo(prevShowDemo => !prevShowDemo);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={clickHandler}>Toggle Demo</Button>
      <DemoOutput show={false}></DemoOutput>
    </div>
  );
}

export default App;
