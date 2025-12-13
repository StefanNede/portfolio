import type { Route } from "./+types/home";
import { useState } from "react";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";
import { ShootingStars } from "~/components/ui/shooting-stars";
import { StarsBackground } from "~/components/ui/stars-background";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - Home" },
    { name: "description", content: "homepage stuff" },
  ];
}

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="page-container">
        <Navbar currentPage="home"/>
       <div className="rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
          <span>Stefan</span>
        </h2>
        <ShootingStars />
        <StarsBackground />
      </div> 
      </div>
    </>
  );
}
