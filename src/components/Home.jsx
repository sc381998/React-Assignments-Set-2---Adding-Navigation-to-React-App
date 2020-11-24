import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import LocationDisplay from "./LocationDisplay";
// import { useHistory } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>You are home</h1>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {/* <LocationDisplay /> */}
    </>
  );
}
