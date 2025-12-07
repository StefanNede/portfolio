import type { Route } from "./+types/home";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
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
        <div className="mainpage">
          <h1>Contact</h1>
          <p>This is the Contact page.</p>
        </div>
      </div>
    </>
  );
}