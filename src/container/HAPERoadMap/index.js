import style from './HAPERoadMap.module.scss'
import img1 from '../../media/PHASE1.webp'
import img2 from '../../media/PHASE2.webp'
import img3 from '../../media/PHASE3.webp'

function HAPERoadMap(){
    return(
        <section className={style.HAPERoadMap}>
            <div className={style.HAPERoadMapTitle}>
                <h3>ROADMAP TEASER</h3>
            </div>
            <div className={style.container}>
                <div className={style.HAPERoadMapitem}>
                    <img src={img1} alt=""/>
                    <div className={style.HAPERoadMapitemtitle}>
                        <h3>PHASE 1:</h3>
                        <h3>IN THE BEGINNING</h3>
                        <div className={style.HAPERoadMapitemtitleP}>
                            <p>A new dimension</p>
                            <p>First drop</p>
                            <p>Music to HAPE to</p>
                        </div>
                    </div>
                </div>
                <div className={style.HAPERoadMapitem}>
                    <img src={img2} alt=""/>
                    <div className={style.HAPERoadMapitemtitle}>
                        <h3>PHASE 2:</h3>
                        <h3>THE HAPE MACHINE</h3>
                        <div className={style.HAPERoadMapitemtitleP}>
                            <p>Second drops</p>
                            <p>Special collections</p>
                            <p>Simian engineering</p>
                        </div>
                    </div>
                </div>
                <div className={style.HAPERoadMapitem}>
                    <img src={img3} alt=""/>
                    <div className={style.HAPERoadMapitemtitle}>
                        <h3>PHASE 3:</h3>
                        <h3>THE HAPEWALK</h3>
                        <div className={style.HAPERoadMapitemtitleP}>
                            <p>Clothing collabs</p>
                            <p>HAPE Couture</p>
                            <p>The runway to fame</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HAPERoadMap