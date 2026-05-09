import style from './style.module.css'

const Footer = () => {

    return(
        <div className={style.footer}>
            <span data-aos="fade-up" className={style.heartIcon}>♥</span>

            <p data-aos="fade-up" className={style.names}>Islam &amp; Alaa</p>

            <p data-aos="fade-up" className={style.date}>June 6, 2026</p>

            <p className={style.endingPara}>Lots of love</p>
        </div>
    )
}

export default Footer