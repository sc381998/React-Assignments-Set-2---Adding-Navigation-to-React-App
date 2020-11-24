import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationDisplay from "./LocationDisplay";
// import { useHistory } from "react-router-dom";
export default function Home() {
  // const [locationKeys, setLocationKeys] = useState([]);
  // const history = useHistory();
  // useEffect(() => {
  //   return history.listen((location) => {
  //     if (history.action === "PUSH") {
  //       setLocationKeys([location.key]);
  //     }

  //     if (history.action === "POP") {
  //       if (locationKeys[1] === location.key) {
  //         setLocationKeys(([_, ...keys]) => keys);

  //         // Handle forward event
  //       } else {
  //         setLocationKeys((keys) => [location.key, ...keys]);

  //         // Handle back event
  //       }
  //     }
  //   });
  // }, [locationKeys]);
  return (
    <>
      <h1>You are home</h1>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <LocationDisplay />
    </>
  );
}
