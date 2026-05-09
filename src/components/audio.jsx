import { useRef, useState, useEffect } from 'react'
import music from "../assets/media/audio.mp3"
import style from './style.module.css'

function Audio() {

    const musicRef = useRef(null)
    const [isMuted, setIsMuted] = useState(false)

    useEffect(() => {
        const playMusic = () => musicRef.current.play()
        document.addEventListener("click", playMusic, { once: true })
        return () => document.removeEventListener("click", playMusic)
    }, [])

    const handleMute = () => {
        if (musicRef.current.muted) {
            musicRef.current.muted = false
            setIsMuted(false)
        } else {
            musicRef.current.muted = true
            setIsMuted(true)
        }
    }

    return (
        <div>
            <audio
                ref={musicRef}
                src={music}
                autoPlay
                loop
            />

            <button 
                onClick={handleMute}
                className={style.audioBtn}
            >
                {isMuted ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                        <line x1="22" x2="16" y1="9" y2="15"></line>
                        <line x1="16" x2="22" y1="9" y2="15"></line>
                    </svg>

                :
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>/                         <path d="M16 9a5 5 0 0 1 0 6"></path>
                        <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
                    </svg>
                }
            </button>
        </div>
    )
}

export default Audio