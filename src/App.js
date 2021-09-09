import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [ showDemo, setShowDemo ] = useState(false);
  console.log('App RUNNING!');

  // store function cross funtion execution not to re-creat every execution
  const clickHandler = useCallback(()=> {
    setShowDemo(prevShowDemo => !prevShowDemo);
  }, []); // include any function, prop, context used in surounded funtion
  // except state change function(setShowDemo) because React does not change that

  // brand new funtion evertime App is executed
  // const clickHandler = ()=> {
  //   setShowDemo(prevShowDemo => !prevShowDemo);
  // };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* Without useCallback() React.memo(Button) not working because clickHandler is object */}
      <Button onClick={clickHandler}>Toggle Demo</Button>
      {/* false is premitive */}
      <DemoOutput show={false}></DemoOutput>
    </div>
  );
}

export default App;
