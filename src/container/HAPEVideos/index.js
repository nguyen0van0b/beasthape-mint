import video1 from '../../media/file.mp4'
import style from './HAPEVideos.module.scss'

function HAPEVideos(){
    return(
        <video autoplay="autoplay" muted="muted" loop src={video1}></video>
    )
}
export default HAPEVideos