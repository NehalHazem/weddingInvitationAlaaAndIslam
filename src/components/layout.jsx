import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Audio from "./audio"
import CountDown from "./countdown"
import Footer from "./footer"
import Location from "./location"
import IntroSection from "./introSection"

const Layout = () => {

     useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });

        AOS.refresh();
    }, [])

    return(
        <>
            <Audio />
            <IntroSection />
            <CountDown />
            <Location />
            <Footer />
        </>
    )
}

export default Layout