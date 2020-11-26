import '../styles/style.css'                                
import AlertPicture from './AlertPicture'
import AlertSubmissionArea from './AlertSubmissionArea'
import AlertsArea from './AlertsArea'

export default function MainPage({alerts, setSelectedAlertFunction, resetAlerts}){
    return (
        <div style={{margin: 0}} className="body" >
            <div className='pageContent'>                                   
                {/* show the picture  */}
                <AlertPicture/>                     

                {/* The section for submitting new alerts, because we are changing the list of alerts we'll need to reset the alert list in the app state     */}
                <AlertSubmissionArea resetAlerts={resetAlerts} />

                {/* The section for seeing and selecting specific alerts, we'll be setting the selected alert in state */}
                <AlertsArea alerts={alerts} setSelectedAlertFunction={setSelectedAlertFunction}/>
            </div>
        </div>
    )
}



