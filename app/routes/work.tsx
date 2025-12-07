import type { Route } from "./+types/home";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - Work" },
    { name: "description", content: "my work" },
  ];
}


export default function About() {
  return (
    <>
      <div className="page-container">
        <Navbar currentPage="work"/>
        <div className="mainpage">
          <h1>Work</h1>
          <p>This is the Work page.</p>
        </div>
      </div>
    </>
  );
}