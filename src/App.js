import './App.css';
import {Counter} from './Components/Counter'
import './Style/Counter.css'
import {IncrementDecrement} from "./Components/IncrementDecrement";

function App() {
  return (
    <div>
      <div className="counter">
        <Counter counterValue={0} />
      </div>
      <div>
        <IncrementDecrement counterValue={0} />
      </div>
    </div>
  );
}

export default App;
