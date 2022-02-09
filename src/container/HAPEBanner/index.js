import img1 from '../../media/Banner-five.webp'
import style from './HAPEBanner.module.scss'

function HAPEBanner(){
    return(
        <section className={style.HAPEBanner}>
            <img src={img1} alt=""/>
        </section>
    )
}
export default HAPEBanner