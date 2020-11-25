import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [alerts, setAlerts] = useState([])

  useEffect(
    function(){
      fetch('http://localhost:8081/alerts', {cache: 'no-store'})
      .then(response => response.json())
      .then(alerts => setAlerts(alerts))
    },
    [])

  return (
    <div className="App">
      <header className="App-header">
        <div>{
          alerts.map(alert => {
            return <div>{alert.title}</div>
          })
          }</div>
      </header>
    </div>
  );
}

export default App;
