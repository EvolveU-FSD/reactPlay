export default function StatusArea({alert}){
    // shows the alert status
    return <div id='statusBlock'>
        
        {/* Show the alert state */}
        <div id='statusTitle'>Status: {alert.state}</div>
    </div>
}