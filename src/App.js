
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

const hexCodes = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const getCharacter = (index) => hexCodes[index];

function generateJustOneColor() {
    
	let hexColorRep = "#";

  for(let i = 0; i < 6; i++) {
    const randomPosition = Math.floor ( Math.random() * hexCodes.length );
    hexColorRep += getCharacter( randomPosition );
  }

	return hexColorRep

}

  const textStyle = () => {
    if(count > 0) return { color: generateJustOneColor() };
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
