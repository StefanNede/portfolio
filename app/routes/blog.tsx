import type { Route } from "./+types/home";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stefan - Blog" },
    { name: "description", content: "my blog!" },
  ];
}


export default function Blog() {
  return (
    <>
      <div className="page-container">
        <Navbar currentPage="blog"/>
        <div className="mainpage">
          <h1>Blog</h1>
          <p>This is the Blog page.</p>
        </div>
      </div>
    </>
  );
}