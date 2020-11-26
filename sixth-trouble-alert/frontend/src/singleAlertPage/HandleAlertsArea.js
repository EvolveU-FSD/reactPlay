import StatusArea from './StatusArea'
import DispatchHeroes from './DispatchHeroes'
import DeleteAlert from './DeleteAlert'

export default function HandleAlertsArea({alert, resetAlerts}){

    // The section that lets us dispatch heroes and delete alerts
    return <div id="handleAlerts" className='actionSection'>
        {/* Show the alert status */}
        <StatusArea alert={alert}/>

        {/* The buttons that let us change the alerts */}
        <div id='alertActionButtons'>
            {/* Dispatch heroes, and reset the alerts in state */}
            <DispatchHeroes alert={alert} resetAlerts={resetAlerts}/>

            {/* Delete the alert and reset the alerts in state */}
            <DeleteAlert alert={alert} resetAlerts={resetAlerts}/>
        </div>
    </div>
}

