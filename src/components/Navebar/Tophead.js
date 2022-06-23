import React from "react";
import "./tophead.css";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Tophead = () => {
  return (
    <>
      <section className="head ">
        <div className="container flexSB">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="logo  "
          >
            <Link to="/">
              <h1 className=" text-xl ">
                COVID-<span className="text-red-500">19</span>{" "}
              </h1>
              <span className="text-green-500">Get your Service</span>
            </Link>
          </div>

          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="social flex"
          >
            <FaFacebookF className="icon "></FaFacebookF>
            <FaInstagram className="icon"></FaInstagram>
            <AiOutlineTwitter className="icon"></AiOutlineTwitter>
            <AiOutlineYoutube className="icon"></AiOutlineYoutube>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tophead;
