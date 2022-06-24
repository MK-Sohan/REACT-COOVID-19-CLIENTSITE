import React, { useState } from "react";
import Tophead from "./Tophead";

import { Link } from "react-router-dom";
import "./Navebar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navebar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <Tophead></Tophead>
      <header
        // data-aos="zoom-out"
        // data-aos-easing="linear"
        // data-aos-duration="1000"
        className={color && "change-color"}
      >
        <nav className="flexSB ">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">BE SAFE</div>
          </div>
          <button className="custome-toggle" onClick={() => setClick(!click)}>
            {click ? (
              <FaTimes className="icon-2"></FaTimes>
            ) : (
              <FaBars className="icon-2"></FaBars>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navebar;
