import React from "react";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header_container">
      <h1>Employee's Data</h1>
      <Button variant="link" onClick={() => alert("hello")}>
        Create +
      </Button>
      {/* <Link></Link> */}
    </div>
  );
}
