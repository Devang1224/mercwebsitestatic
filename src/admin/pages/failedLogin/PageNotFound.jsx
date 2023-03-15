import React from "react";
import "./pagenotfound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="failedLogin">
      <h1>Error:404</h1>
      <p>Page Not Found</p>
    </div>
  );
}