"use client"
import type { Route } from "./+types/home";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";
import { StarsBackground } from "~/components/ui/stars-background";
import { ShootingStars } from "~/components/ui/shooting-stars";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - About" },
    { name: "description", content: "about page" },
  ];
}


export default function About() {
  return (
    <>
      <div className="page-container">
        <Navbar currentPage="about"/>
        <div className="mainpage p-8 md:p-16 relative">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            About Me
          </h2>
          <p>This is the About page - coming soon.</p>
          <StarsBackground/>
          <ShootingStars/>
        </div>
      </div>
    </>
  );
}