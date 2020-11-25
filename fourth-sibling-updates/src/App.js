import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import CounterDisplay from './CounterDisplay'
import IncrementButton from './IncrementButton'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <CounterDisplay counter={counter}/>
        <IncrementButton counter={counter} updateCounter={setCounter}/>
      </header>
    </div>
  );
}

export default App;
