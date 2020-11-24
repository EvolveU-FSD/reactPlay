import './App.css';
import Hello from './Hello'
import HelloDeconstructed from './HelloDeconstructed'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Chris"/>
        <HelloDeconstructed name="Chris"/>
      </header>
    </div>
  );
}

export default App;
