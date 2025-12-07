import type { Route } from "./+types/home";
import { useState } from "react";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import "../styles/page.css";

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
        <div className="mainpage">
          <h1>Home Page</h1>
          <button onClick={() => setCount(count+1)}>{count}</button>
        </div>
      </div>
    </>
  );
}
