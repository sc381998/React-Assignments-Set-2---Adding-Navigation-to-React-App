import React from "react";
import { Link } from "react-router-dom";
import LocationDisplay from "./LocationDisplay";
export default function Home() {
  return (
    <>
      <h1>You are home</h1>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <LocationDisplay />
    </>
  );
}
