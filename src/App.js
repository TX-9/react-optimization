import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [ showDemo, setShowDemo ] = useState(false);
  const [ allowToggle, setAllowToggle ] = useState(false);
  console.log('App RUNNING!');

  // store function cross funtion execution not to re-creat every execution
  const clickHandler = useCallback(()=> {
    if (allowToggle) { // to work this line, allowToggle should be in dependency
      setShowDemo(prevShowDemo => !prevShowDemo);
    }
  }, [allowToggle]); // include any function, prop, context used in surounded funtion
  // except state change function(setShowDemo) because React does not change that

  // brand new funtion evertime App is executed
  // const clickHandler = ()=> {
  //   setShowDemo(prevShowDemo => !prevShowDemo);
  // };

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* Without useCallback() React.memo(Button) not working because clickHandler is object */}
      <Button onClick={clickHandler}>Toggle Demo</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      
      {/* false is premitive */}
      <DemoOutput show={showDemo}></DemoOutput>
    </div>
  );
}

export default App;
