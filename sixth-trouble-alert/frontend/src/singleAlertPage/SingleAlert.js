import '../styles/style.css'
import PictureBox from './PictureBox'
import AlertTitle from './AlertTitle'
import HandleAlertsArea from './HandleAlertsArea'

export default function SingleAlert({alert, resetAlerts}){
    // master page for showing a single alert
    return (
        <div style={{margin: 0}} className="body">
            <div className='pageContent'>
                {/* The picture box */}
                <PictureBox/>

                {/* The title of the alert */}
                <AlertTitle alert={alert}/>

                {/* The area to that has buttons that allows us to change the alert data
                After a change we'll need to reset the alerts in the app state */}
                <HandleAlertsArea alert={alert} resetAlerts={resetAlerts} />
            </div>
        </div>
    )
}
