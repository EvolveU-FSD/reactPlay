import {useState} from 'react'

export default function AlertSubmissionArea({resetAlerts}){
    const [alertTitle, setAlertTitle] = useState('')                        // we use state because we are going to reset it back to empty after submitting

    function CreateNewAlert(){
        fetch('http://localhost:8081/alerts', {                             // send a post to alerts to create the new alert
            method: 'post',
            headers: {"Content-Type": "application/json"},                  // add a header to tell the seerver to expect json
            body: JSON.stringify({newAlert: alertTitle})                    // add the body with the new title
        })
        .then(resetAlerts)
        .then(setAlertTitle(''))    
    }

    function changeNewTitle(event){
        setAlertTitle(event.target.value)                                   // as the title changes set the state title
    }
    
    return (
        <div>
            <div id='submitAlertArea' className='alertArea'>
            <div className='tabIn' >Submit a new alert</div>
            <div id='addAlertWidget'>
                <input className='textInput' id='newAlertTitle' type="text" placeholder="Enter alert details" 
                    value = {alertTitle}                                    // display the state value
                    onChange={changeNewTitle}                               // when someone types it fires an event that will change the title in state
                />

                <div className='button' onClick={CreateNewAlert}>Submit</div>   
                </div>
            </div>
        </div>
    )}