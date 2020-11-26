// can't just point at the src by file location, we need to import it
import imageSource from './TroubleAlert.jpg'                // import image

export default function AlertPicture(){
    return <div id='pictureBox'>
        {/* Set the src */}
        <img src={imageSource} alt='Trouble Alert' id='troubleAlertImage'/>
    </div>
}