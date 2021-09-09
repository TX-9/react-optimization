import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [ showDemo, setShowDemo ] = useState(false);
  console.log('App RUNNING!');

  // brand new funtion evertime App is executed
  const clickHandler = ()=> {
    setShowDemo(prevShowDemo => !prevShowDemo);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* React.memo(Button) not working because clickHandler is object */}
      <Button onClick={clickHandler}>Toggle Demo</Button>
      {/* false is premitive */}
      <DemoOutput show={false}></DemoOutput>
    </div>
  );
}

export default App;
