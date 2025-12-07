import type { Route } from "./+types/home";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - Projects" },
    { name: "description", content: "about page" },
  ];
}


export default function About() {
  return (
    <>
      <div className="page-container">
        <Navbar currentPage="projects"/>
        <div className="mainpage">
          <h1>Projects</h1>
          <p>This is the Projects page.</p>
        </div>
      </div>
    </>
  );
}