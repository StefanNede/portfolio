import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}


export default function Work() {
  return (
    <div>
      <Link to="/">
      <button>Back</button></Link>
      <h1>Work</h1>
      <p>This is the Work page.</p>
    </div>
  );
}