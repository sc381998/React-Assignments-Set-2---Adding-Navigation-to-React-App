import React from "react";
import { useLocation } from "react-router-dom";
export default function LocationDisplay() {
  const location = useLocation();
  return (
    <>
      <h3 data-testid="location-display">{location.pathname}</h3>
    </>
  );
}
