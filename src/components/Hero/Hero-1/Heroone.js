import React from "react";
import "./Heroone.css";
import { BsArrowRightShort } from "react-icons/bs";

const Heroone = () => {
  return (
    <>
      <section className="hero-1">
        <div className="container">
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="row mt-72 lg:mt-0"
          >
            <h1 className="text-4xl">
              With <span className="text-red-500 font-bold">COVID-19</span>,
              we’ve made it to the <br /> life raft.Dry land is far away
            </h1>
            <p></p>
            <div className="custom-button">
              <button className="primary-btn cursor-pointer mycustom-button">
                GET STARTED NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Heroone;
