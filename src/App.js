
import React from 'react';
import './App.css';

function App() {

  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {

    if(count === 0) {
      setCount(0);
    } else {
      setCount(count-1);
    }
    
  }

  const reset = () => {
    setCount(0);
  }

  const textStyle = () => {
    if(count > 0 && count % 3 === 0) {
      return {color: 'red'};
    } else if(count % 3 === 1) {
      return {color: 'green'};
    } else if(count > 0){
      return {color: 'blue'};
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h2 className='counter-text'> Counter </h2>
        <h1 style={textStyle()} > {count} </h1>
        <button className='minus' onClick={onClickMinus}>
          -
        </button>
        <button className='plus' onClick={onClickPlus} >
          +
        </button>
        <br></br>
        <button className='reset' onClick={reset}>
          Reset 
        </button>
      </div>
    </div>
  );
}

export default App;
