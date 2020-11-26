
export default function AlertColumn({title, alerts, setSelectedAlertFunction}){
    return (
        <div className="alertColumn" id="newAlerts">
            {/* Set the title for the column */}
            <div className="alertColumnTitle">{title}</div>

            {/* Show all the alerts by using map
            Note: you'll get a warning if you don't set a unique key when using map
            Each display can select a specific alert when it gets clicked so we pass that with the alert */}
            {alerts.map(alert => <AlertDisplay key={alert.id} alert={alert} setSelectedAlertFunction={setSelectedAlertFunction}/>)}
        </div>
    )
}

function AlertDisplay({alert,setSelectedAlertFunction }) {
    return <div className='alertItem' onClick={()=>{
        // onclick we'll set the app state to show the selected alert
        setSelectedAlertFunction(alert)
    }}>
        {/* Show the alert title */}
        {alert.title}</div>
}