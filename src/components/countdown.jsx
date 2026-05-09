import { useEffect, useState } from 'react';
import style from './style.module.css'

const CountDown = () => {

    const targetDate = new Date("2026-06-06T16:30:00").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div className={style.countDown}>
            <div>
                <p data-aos="fade-up" className={style.title}>Countdown</p>
                <p data-aos="fade-up" className={style.subTitle}>For the most special day</p>
            </div>

            <div data-aos="fade-up" className={style.clock}>
                <div>
                    <span>{timeLeft.days}</span>
                    <span>days</span>
                </div>

                <div>
                    <span>{timeLeft.hours}</span>
                    <span>hours</span>
                </div>

                <div>
                    <span>{timeLeft.minutes}</span>
                    <span>mins</span>
                </div>

                <div>
                    <span>{timeLeft.seconds}</span>
                    <span>secs</span>
                </div>
            </div>
        </div>
    )
}

export default CountDown