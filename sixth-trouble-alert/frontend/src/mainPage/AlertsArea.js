import AlertColumn from './AlertColumn'

export default function AlertsArea({alerts, setSelectedAlertFunction}){
    // filter the alerts into new alerts and in progress alerts
    const newAlerts = alerts.filter(a=>a.state === 'New')
    const inProgressAlerts = alerts.filter(a=> a.state ==='In Progress')
    return (
        <div className='actionSection'>
        <div id="alertsTitle" className='tabIn'>Alerts</div>
        <div id='alertColumns'>

            {/* Show the list of both types of alerts
            The alerts can onClick set the selected reservation, so we need to pass that function */}
            <AlertColumn title="New" alerts={newAlerts} setSelectedAlertFunction={setSelectedAlertFunction}/>                   
            <AlertColumn title='In progress' alerts={inProgressAlerts} setSelectedAlertFunction={setSelectedAlertFunction}/>
        </div>
    </div>
    )
}
