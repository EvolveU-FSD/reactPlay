export default function DeleteAlert({alert, resetAlerts}){
    function deleteAlert(){
        fetch(`http://localhost:8081/alert?alertNumber=${alert.id}`,                    // call delete
            {method: 'DELETE'})                                                         
        .then(resetAlerts)                                                              // then reset the alerts
    }
    return <div className="button" id='deleteButton' onClick={deleteAlert} >Delete</div>
}