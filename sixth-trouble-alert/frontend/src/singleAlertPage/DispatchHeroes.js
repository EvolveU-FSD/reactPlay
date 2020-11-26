export default function DispatchHeroes({alert, resetAlerts}){
    function dispatchHeroes(){
        fetch(`http://localhost:8081/alert?alertNumber=${alert.id}`, {
            method: 'PATCH',                                                        // a patch
            headers: {'Content-Type': 'application/json'},                          // body is json
            body: JSON.stringify({state: 'In Progress'})                            // just send the thing we want to change
        })
        .then(resetAlerts)                                                          // after the heroes are dispatch we'll call to reset the alerts in state
    }
    return <div className="button" id='dispatchButton' onClick={dispatchHeroes}>Dispatch heroes</div>
}
