import style from './HAPEone.module.scss'

function HAPEone(){
    return(
        <section className={style.HAPEone}>
            <div className={style.HAPEoneTitle}>
            <h1>HAPEBEAST</h1>
            <span><span>8K NEXT-GENERATION, </span><br></br><span>HIGH FASHION HAPES</span></span>
            <p className={style.HAPEoneTitleP}>Unique, fully 3D and built to unite the ape multiverse.</p>
            <button type="">Connect wallet</button>
            <div className={style.HAPEoneinfo}>
                <p className={style.HAPEoneTitlemt6}>BONUS SALE: 478/800 LEFT</p>
                <p className={style.HAPEoneTitlemt8}>Price per HAPEBEAST is 0.1 ETH.</p>
                <p className={style.HAPEoneTitlemt9}>Designed and styled by <a href="#">Digimental</a>.</p>
            </div>
            </div>
        </section>
    )
}
export default HAPEone