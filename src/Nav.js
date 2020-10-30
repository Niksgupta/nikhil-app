import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

function NavFun() {
  return (

    <Navbar bg="dark" variant="dark">
    {/* <Navbar.Brand  className="nav-links" href="/home" to="/">Navbar</Navbar.Brand> */}
  
    {/* /* <nav class="navbar navbar-expand-lg navbar-light bg-light"> */}
    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
    {/* <ul class="navbar-nav mr-auto"> */}
      {/* <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> */}
      <Link style={{ color: "white", textDecoration: "none",marginRight: "40px" }} to="/">
        <div>Home</div>
      </Link>
      <Link style={{ color: "white", textDecoration: "none", marginRight: "40px"}} to="/about">
        <div >About</div>
      </Link>

      <Link style={{ color: "white", textDecoration: "none"}} to="/symptom">
        <div>Symptom</div>
      </Link>
      {/* <ul className="nav-links">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/symptom"
        >
          <li>Symptom</li>
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/graph"
        >
          <li>Graph</li>
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", marginTop: "10px" }}
          to="/about"
        >
          <li>About</li>
        </Link>
      </ul> */}

    </Navbar>
  );
}

export default NavFun;