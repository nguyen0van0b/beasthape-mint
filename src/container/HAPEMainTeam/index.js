import style from './HAPEMainTeam.module.scss'
import imgDIGIMENTAL from '../../media/leaderMainTeam.webp'
import imgTROU from '../../media/TROU.webp'
import imgRICK from '../../media/RICK.webp'
import imgJUSTCARL from '../../media/JUSTCARL.webp'
import imgMRKRIME from '../../media/MR.krime.webp'
import imgSTALONE from '../../media/STALONE.webp'
import imgCYTRUS from '../../media/CYTRUS.webp'
import imgTW from '../../media/TW.webp'
import imglinktr from '../../media/linktr.webp'

function HAPEMainTeam(){
    return(
        <section className={style.HAPEMainTeam}>
            <div className={style.HAPEMainTeamTop}>
                <div className={style.HAPEMainTeamTopItem}>
                    <img src={imgDIGIMENTAL} alt=""/>
                    <span className={style.HAPEMainTeamName}>DIGIMENTAL</span>
                    <span className={style.HAPEMainTeamCV}>PRIMAL HAPE</span>
                    <span className={style.HAPEMainTeamDes}>Founder of HAPEBEAST, Digimental Studio and Lead Digital Artist on the project. Proud member of BAYC.</span>
                    <div className={style.HAPEMainTeamIcon}>
                        <a href=""><img src={imgTW} alt=""/></a>
                        <a href=""><img src={imglinktr} alt=""/></a>
                    </div>
                </div>
            </div>
            <div className={style.HAPEMainTeamBottom}>
                <div className={style.HAPEMainTeamBottomItem}>
                    <img src={imgTROU} alt=""/>
                    <span className={style.HAPEMainTeamName}>TROU</span>
                    <span className={style.HAPEMainTeamCV}>UTILITY</span>
                    <span className={style.HAPEMainTeamDes}>A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.</span>
                    <div className={style.HAPEMainTeamIcon}>
                        <a href=""><img src={imgTW} alt=""/></a>
                    </div>
                </div>
                <div className={style.HAPEMainTeamBottomItem}>
                    <img src={imgRICK} alt=""/>
                    <span className={style.HAPEMainTeamName}>RICK</span>
                    <span className={style.HAPEMainTeamCV}>SMART</span>
                    <span className={style.HAPEMainTeamCV}>CONTRACTS</span>
                    <span className={style.HAPEMainTeamDes}>Leading Digimental’s interface with the blockchain and securing the future of the HAPES. Tech’s back in fashion.</span>
                    <div className={style.HAPEMainTeamIcon}>
                        <a href=""><img src={imgTW} alt=""/></a>
                    </div>
                </div>
                
                <div className={style.HAPEMainTeamBottomItem}>
                    <img src={imgJUSTCARL} alt=""/>
                    <span className={style.HAPEMainTeamName}>JUSTCARL</span>
                    <span className={style.HAPEMainTeamCV}>STRATEGY</span>
                    <span className={style.HAPEMainTeamDes}>Noise & positioning. Want to talk to the HAPEBEAST team about a commercial arrangement? Carl’s your point of contact.</span>
                    <div className={style.HAPEMainTeamIcon}>
                        <a href=""><img src={imgTW} alt=""/></a>
                    </div>
                </div>
                <div className={style.HAPEMainTeamBottomItem}>
                    <img src={imgMRKRIME} alt=""/>
                    <span className={style.HAPEMainTeamName}>MR.KRIME</span>
                    <span className={style.HAPEMainTeamCV}>MUSIC</span>
                    <span className={style.HAPEMainTeamDes}>Everything in our world moves to a beat. The ape multiverse is no different and Krime has every one of those beats covered.</span>
                    <div className={style.HAPEMainTeamIcon}>
                        <a href=""><img src={imgTW} alt=""/></a>
                    </div>
                </div>
                <div className={style.HAPEMainTeamBottomItem}>
                    <img src={imgSTALONE} alt=""/>
                    <span className={style.HAPEMainTeamName}>STALONE</span>
                    <span className={style.HAPEMainTeamCV}>MOD</span>
                    <span className={style.HAPEMainTeamDes}>Fifty percent of the power behind the mod team: crafting Discords, taking names. Good communities need the best leadership.</span>
                    <div className={style.HAPEMainTeamIcon}>
                        <a href=""><img src={imgTW} alt=""/></a>
                    </div>
                </div>
                <div className={style.HAPEMainTeamBottomItem}>
                    <img src={imgCYTRUS} alt=""/>
                    <span className={style.HAPEMainTeamName}>CYTRUS</span>
                    <span className={style.HAPEMainTeamCV}>MOD</span>
                    <span className={style.HAPEMainTeamDes}>The other half of our moderation enforcement squad. Fighting bots and taking the battle back to the scammers.</span>
                    <div className={style.HAPEMainTeamIcon}>
                        <a href=""><img src={imgTW} alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HAPEMainTeam