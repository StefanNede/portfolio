import type { Route } from "./+types/home";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";
import { ShootingStars } from "~/components/ui/shooting-stars";
import { StarsBackground } from "~/components/ui/stars-background";
// import daftPunkSong from "~/lib/around-the-world.mp3";
import { tfoot } from "motion/react-client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - Home" },
    { name: "description", content: "homepage stuff" },
  ];
}

export default function Home() {
  const [playMusic, setPlayMusic] = useState(false);
  const [audio] = useState<HTMLAudioElement | Boolean>(typeof Audio !== "undefined" && new Audio("/around-the-world.mp3")); // to get around issue of not finding it on reload
  const audioRef = useRef(audio);
  const recordClassName = `cd ${playMusic ? 'disc' : ''}`
  
  const togglePlay = () => {
    if (playMusic) {
      if (audioRef) { 
        audioRef.current.play();
      }
    } else {
      if (audioRef) { 
        audioRef.current.pause();
      }
    } 
  }

  useEffect(() => {
    togglePlay()
  }, [playMusic])

  return (
    <>
      <div className="page-container">
        <Navbar currentPage="home"/>
        <div className="mainpage rounded-md flex flex-col items-center justify-center relative">
          <h2 className="relative flex-col md:flex-row z-10 text-5xl md:text-7xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
            <span>Stefan Nedelcu</span>
          </h2>
          <p className="text-md md:text-lg m-2">
            oxford computer science
          </p>
          {/* <span className="text-sm">
            computational medicine | quantum information
          </span> */}
          <ShootingStars />
          <StarsBackground />
        </div> 
        <button className={recordClassName} onClick={() => setPlayMusic(!playMusic)}>
          <img src="app/lib/vinyl-record.png" alt="vinyl"/>
        </button>
      </div>
    </>
  );
}
