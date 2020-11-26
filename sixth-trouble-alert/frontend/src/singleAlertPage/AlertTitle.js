export default function AlertTitle({alert}){
    
    // show the alert title
    return <div id='alertTextArea' className='alertArea'>
        <div id='alertText'>{alert.title}</div>
    </div>
}