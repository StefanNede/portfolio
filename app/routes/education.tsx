"use client"
import type { Route } from "./+types/home";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - Education" },
    { name: "description", content: "my education" },
  ];
}


export default function Education() {
  return (
   <>
      <div className="page-container">
        <Navbar currentPage="education"/>
        <div className="mainpage">
          <h1>Education</h1>
          <p>This is the Education page.</p>
        </div>
      </div>
    </>
  );
}