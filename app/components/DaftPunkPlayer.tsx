"use client"

import "../styles/page.css";
import {useState, useEffect, useRef} from "react"
import vinylImage from "../lib/vinyl-record.png"

const DaftPunkPlayer = () => {
    const [playMusic, setPlayMusic] = useState(false)
    const [audio] = useState<HTMLAudioElement | Boolean>(typeof Audio !== "undefined" && new Audio("/around-the-world.mp3")) // to get around issue of not finding it on reload
    const audioRef = useRef(audio)
    const recordClassName = `cd ${playMusic ? 'disc' : ''}`
    
    const togglePlay = () => {
        if (playMusic) {
        if (audioRef) { 
            audioRef.current.play()
        }
        } else {
        if (audioRef) { 
            audioRef.current.pause()
        }
        } 
    }

    useEffect(() => {
        // function runs automatically when you leave the page
        return () => {
        if (audioRef.current) {
            audioRef.current.pause() 
            audioRef.current.currentTime = 0 // reset to start
        }
        };
    }, [])

    useEffect(() => {
        togglePlay()
    }, [playMusic])

    return (
        <button className={recordClassName} onClick={() => setPlayMusic(!playMusic)}>
          <img src={vinylImage} alt="daft punk"/>
        </button>
    )
}

export default DaftPunkPlayer;