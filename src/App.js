import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState([0]);

  return (
    <div className="App">
  


      <div className="counter">
        <button
          disabled={counter <= 0 && true}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>

        <p className="zero">{counter}</p>
        <button
          disabled={counter >= 10 && true}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button >
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
     className="reset" >
        RESET
      </button>

<button onClick={()=>{
const newCounter = [...counter];

newCounter.push({useState})

setCounter(newCounter);
console.log(newCounter)
}}>Add counter</button>

    </div>
  );
}

export default App;
