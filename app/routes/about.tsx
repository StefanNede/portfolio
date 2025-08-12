import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}


export default function About() {
  return (
    <div>
      <Link to="/">
      <button>Back</button></Link>
      <h1>About Me</h1>
      <p>This is the About page.</p>
    </div>
  );
}