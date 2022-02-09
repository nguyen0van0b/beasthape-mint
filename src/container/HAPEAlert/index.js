import style from './HAPEAlert.module.scss'

function HAPEAlert (){
    return(
        <section className={style.HAPEAlert}>
            <div className={style.container}>
                <h2>PROTECT YOURSELF AND THE COMMUNITY FROM SCAMMERS.</h2>
                <h2>REPORT FAKE COLLECTIONS.</h2>
                <span>RELEASE DATE:</span>
                <h2>JANUARY 28th</h2>
            </div>
        </section>
    )
}
export default HAPEAlert