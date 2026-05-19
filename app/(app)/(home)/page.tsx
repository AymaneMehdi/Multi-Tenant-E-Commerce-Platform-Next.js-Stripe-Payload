"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    console.log("Home page");
  }, []);
  return (
    <div>
      <p>Home</p>
    </div>
  );
}
