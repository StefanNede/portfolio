"use client"
import type { Route } from "./+types/home";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";

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
        <div className="mainpage">
          <h1>About Me</h1>
          <p>This is the About page.</p>
        </div>
      </div>
    </>
  );
}