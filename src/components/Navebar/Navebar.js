import React, { useState } from "react";
import Tophead from "./Tophead";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import "./Navebar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";

const Navebar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/login");
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
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>

          <div className="start">
            {user ? (
              <button
                onClick={logout}
                className="btn btn-sm btn-error text-white bg-red-500 border-none"
              >
                Log out
              </button>
            ) : (
              <button
                onClick={handleRoute}
                className="btn btn-sm btn-success text-white border-none"
              >
                Login
              </button>
            )}
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
