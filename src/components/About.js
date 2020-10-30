import React from "react";
import "../App.css";

function AboutFun() {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>About</h2>
      <br />
     
      <br />
      <br />
      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <h4>Folk that created this website?</h4>
        <div style={{ fontSize: "20px" }}>
          This React App is created by Nikhil Khandelwal. A software engineer.
        </div>
        <br />
        <h4>How to connect?</h4>
        <div style={{ fontSize: "20px" }}>
          You can connect me via linkedIn{" "}
          <a href="https://www.linkedin.com/in/nikhil-khandelwal-ab040816a/">
            <b>here</b>
          </a>
          .
        </div>
        <br />
        
      </div>
      <br />
    </div>
  );
}

export default AboutFun;