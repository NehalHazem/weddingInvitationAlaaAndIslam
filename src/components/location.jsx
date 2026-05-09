import style from './style.module.css'

const Location = () => {

    return(
        <div className={style.location}>
            <h2 data-aos="fade-up" className={style.title}>Welcome!</h2>
            {/* <h2 data-aos="fade-up" className={style.title}>Location</h2> */}

            <p data-aos="fade-up" className={style.invitationPara}>
                We warmly invite you to celebrate our wedding day with us at Beau Chateau, Zayed. We are looking forward to share this unforgettable moment with you.
            </p>

            <div className={style.locationCard}>
                <div data-aos="fade-up" className={style.locationIconCircle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                                
                <div>
                    <p data-aos="fade-up" className={style.venue}>Beau Chateau</p>
                    <p data-aos="fade-up" className={style.venueArea}>Zayed</p>
                    
                    <div data-aos="fade-up" className={style.clockIconBox}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        
                        <span className={style.time}>at 04:30 PM</span>
                    </div>
                </div>
                
                <iframe
                    data-aos="fade-up" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.684273735873!2d31.001833299999994!3d30.074583299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b003810e89f%3A0x4a94a2e450fe0ccb!2sBeau%20Ch%C3%A2teau!5e0!3m2!1sen!2seg!4v1778085652245!5m2!1sen!2seg"                        
                    width="100%" 
                    height="250"
                    style={{ border: "none" }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
                
                <a 
                    data-aos="fade-up"
                    href="https://maps.app.goo.gl/zZDdHmfopCZpkGgQ9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={style.locationBtn}
                >
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    
                    Open in Maps
                </a>
            </div>
        </div>
    )
}

export default Location