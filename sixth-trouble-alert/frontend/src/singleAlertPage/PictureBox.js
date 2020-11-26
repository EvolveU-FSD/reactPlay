// can't use image directly, it needs to be imported
import wonderTwins from './wondertwins.jpg'

export default function PictureBox() {
    return <div id='pictureBox'>
        {/* The picture box for the single alert */}
        <img src={wonderTwins} alt='Trouble Alert' id='alertImage'/>
    </div>
}