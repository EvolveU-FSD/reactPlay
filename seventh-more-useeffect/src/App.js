import './App.css';
import {useEffect, useState} from 'react'

const buttonStyle = {borderWidth: 3, borderColor: 'black', borderStyle: 'solid', borderRadius: 8, color: 'black', backgroundColor: 'yellow', padding: 20, width: 200, margin: 20}

function App() {
  const [counter, setCounterFunction] = useState(0)

  useEffect(function(){
    console.log('hi')
    return function cleanUp(){
      console.log('bye!')
    }
  })

  return (
    <div className="App">
      <div style={buttonStyle} onClick={()=>setCounterFunction(counter+1)}>Increment Counter</div>
    </div>
  );
}

export default App;

/* <div style={buttonStyle}onClick={()=>setOtherCounterFunction(otherCounter+1)}>Increment Another Counter</div> */
// const [otherCounter, setOtherCounterFunction] = useState(0)


// useEffect(function(){
//   document.title = `No Guard: ${counter}`
// })

// useEffect(function(){
//   document.title = `OnLoad: ${counter}`
// }, [])



// ---

// useEffect(function(){
//   document.title = `Counter changed: ${counter}`
// }
// , [counter])

// useEffect(function(){
//   document.title=`Other counter changed: ${counter}`
// }
// , [otherCounter])

// useEffect(function(){
//   alert('either changed')
// }, [counter, otherCounter])







