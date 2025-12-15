"use client"
import type { Route } from "./+types/home";
import { Link } from "react-router";

import Navbar from "~/components/Navbar";
import { StarsBackground } from "~/components/ui/stars-background";
import { ShootingStars } from "~/components/ui/shooting-stars";

import "../styles/page.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - Contact" },
    { name: "description", content: "contact page" },
  ];
}


export default function Contact() {
  return (
    <>
      <div className="page-container">
        <Navbar currentPage="contact"/>
        <div className="mainpage p-8 md:p-16 relative">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            Contact 
          </h2>
          <div className="z-10 relative ml-10">
            <p className="text-xl">You can contact me via DM on <a className="text-blue-400 hover:text-blue-200 transition-all" href="https://www.linkedin.com/in/stefan-nedelcu-309a16201/" target="_blank">[linkedin]</a> or via email at </p>
            <p className="text-blue-400 ml-5 md:ml-10 mt-5 text-lg hover:underline cursor-pointer" onClick={() => {navigator.clipboard.writeText("snedelcub17@gmail.com");alert("copied!")}}>snedelcub17 [at] gmail [dot] com</p>
          </div>
          <StarsBackground/>
        </div>
      </div>
    </>
  );
}