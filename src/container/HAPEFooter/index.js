import style from './HAPEFooter.module.scss'
import imgdiscord from '../../media/discord.webp'
import imgtwitter from '../../media/twitter.webp'
import imginstagram from '../../media/instagram.webp'

function HAPEFooter(){
    return(
            <section className={style.HAPEFooter}>
                <div className={style.HAPEFooterWrapper}>
                    <div className={style.HAPEFooterDec}>
                        <h1>CURIOUS?</h1>
                        <h1>GET IN TOUCH</h1>
                        <h6>We can't promise a reply but we'd love to hear your thoughts.</h6>
                    </div>
                    <div className={style.HAPEFooterAbout}>
                        <div className={style.HAPEFooterAboutFollow}>
                            <h4>FOLLOW US</h4>
                            <div className={style.HAPEFooterAboutFollowIcon}>
                                <img src={imgdiscord} alt=""/>
                                <img src={imgtwitter} alt=""/>
                                <img src={imginstagram} alt=""/>
                            </div>
                        </div>
                        <div className={style.HAPEFooterAboutContact}>
                            <h4>FOLLOW US</h4>
                            <div className={style.HAPEFooterAboutContactEmail}>
                                <a href="mailto:contact@hapebeast.com" target="_self">contact@hapebeast.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.HAPEFooterCopyright}>
                    <p>© 2022 HAPEBEAST. Apedemption Genesis. Apes forever.</p>
                </div>
            </section>
    )
}
export default HAPEFooter