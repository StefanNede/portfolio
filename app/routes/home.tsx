import type { Route } from "./+types/home";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setCount(count+1)}>{count}</button>
  </>
  );
}
