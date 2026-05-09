import style from './style.module.css'

const Footer = () => {

    return(
        <div className={style.footer}>
            <span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"  
                    fill="#fff" 
                >
                    <path 
                        fillRule="evenodd" 
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                </svg>
            </span>

            <p data-aos="fade-up" className={style.names}>Islam &amp; Alaa</p>

            <p data-aos="fade-up" className={style.date}>June 6, 2026</p>

            <p className={style.endingPara}>Lots of love</p>
        </div>
    )
}

export default Footer