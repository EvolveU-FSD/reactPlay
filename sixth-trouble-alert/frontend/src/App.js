import './App.css';
import {useState, useEffect} from 'react'
import MainPage from './mainPage/main'
import SinglePage from './singleAlertPage/SingleAlert'
 

function App() {
  const [alerts, setAlertsFunction] = useState([])                      // the alerts are listed several places so we'll store them and use state to reset
  const [selectedAlert, setSelectedAlertFunction] = useState(null)      // when a specific single reservation is selected we'll set this 

  
  useEffect( loadAlerts,[])                                             // onLoad loadAlerts

  function loadAlerts(){                                                // we load alerts on load or after changes, so made this its own function
    fetch('http://localhost:8081/alerts', {cache: 'no-store'})          // fetch alerts 
    .then(response => response.json())
    .then(alerts => {
      setAlertsFunction(alerts)})                                       // then set them
  }

  function resetAlerts(){                                               // reset the alerts
    loadAlerts()                                                        // set the selected alert to null
    setSelectedAlertFunction(null)
  }

  return (
    <>
      <header>
      </header>
      <body>
        { 
          // using conditions for our simple navigation
          // if there is NOT a selected alert then show the main page
          (selectedAlert === null) && <MainPage alerts={alerts} setSelectedAlertFunction={setSelectedAlertFunction} resetAlerts={resetAlerts}/> 
        }
        { 
          // if there is a selected alert then show the single page for that alert
          (selectedAlert != null) && <SinglePage alert={selectedAlert} resetAlerts={resetAlerts}/> 
        }
      </body>
    </>
  );
}

export default App;
