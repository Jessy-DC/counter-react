import './App.css';
import './Style/Counter.css'
import {IncrementDecrement} from "./Components/IncrementDecrement";
import {useState} from 'react'

function App() {

   const [counter, setCounter] = useState(0)

   const changeCounter = (value) => {
       setCounter(value)
   }

  return (
    <div>
      <div className="counter">
          <div>
              <p>{counter}</p>
          </div>
      </div>
      <div>
        <IncrementDecrement counter={counter} changeCounter={changeCounter} />
      </div>
    </div>
  );
}

export default App;
