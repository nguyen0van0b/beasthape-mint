import style from './HAPEimage.module.scss'
import img from '../../media/five.webp'

function HAPEimage() {
    return(
        <section className={style.HAPEimage}>
            <img src={img} alt=""/>
        </section>
    )
}
export default HAPEimage