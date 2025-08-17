import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}


export default function Contact() {
  return (
    <div>
      <Link to="/">
      <button>Back</button></Link>
      <h1>Contact</h1>
      <p>This is the Contact page.</p>
    </div>
  );
}