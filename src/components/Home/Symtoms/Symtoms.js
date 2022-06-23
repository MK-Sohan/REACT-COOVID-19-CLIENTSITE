import React from "react";
import "./symtoms.css";
import symtoms1 from "../../../Assets/symtoms/1.png";
import symtoms2 from "./02.png";
import symtoms3 from "../../../Assets/symtoms/03.png";
import symtoms4 from "../../../Assets/symtoms/04.png";
import symtoms5 from "../../../Assets/symtoms/05.png";
import symtoms6 from "../../../Assets/symtoms/06.png";
const Symtoms = () => {
  return (
    <div class="symtoms-main-container">
      <div
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="1000"
        class="symtoms-tittle"
      >
        <h1>Corona Virus Symptoms</h1>
        <p>Seek immediate medical attention if you have serious symptoms.</p>
      </div>
      <div class="symptoms-container">
        <div class="symtoms-grid">
          <div
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            class="single-symtoms"
          >
            <div class="symtoms-image">
              <img src={symtoms1} alt="" />
            </div>
            <div class="symtoms-details">
              <h3>Coughing And Sneezing</h3>
              <p>
                Our comprehensive Online Marketing strategy will boost your
                website trafic hence monthly sales.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            class="single-symtoms"
          >
            <div class="symtoms-image">
              <img src={symtoms3} alt="" />
            </div>
            <div class="symtoms-details">
              <h3>Strong Headacke</h3>
              <p>
                Our comprehensive Online Marketing strategy will boost your
                website trafic hence monthly sales.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            class="single-symtoms"
          >
            <div class="symtoms-image">
              <img src={symtoms5} alt="" />
            </div>
            <div class="symtoms-details">
              <h3>Confusion</h3>
              <p>
                Our comprehensive Online Marketing strategy will boost your
                website trafic hence monthly sales.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            class="single-symtoms"
          >
            <div class="symtoms-image">
              <img src={symtoms2} alt="" />
            </div>
            <div class="symtoms-details">
              <h3>Hot Fever</h3>
              <p>
                Our comprehensive Online Marketing strategy will boost your
                website trafic hence monthly sales.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            class="single-symtoms"
          >
            <div class="symtoms-image">
              <img src={symtoms4} alt="" />
            </div>
            <div class="symtoms-details">
              <h3>Shortness Of Breath</h3>
              <p>
                Our comprehensive Online Marketing strategy will boost your
                website trafic hence monthly sales.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            class="single-symtoms"
          >
            <div class="symtoms-image">
              <img src={symtoms6} alt="" />
            </div>
            <div class="symtoms-details">
              <h3>Sore Throat</h3>
              <p>
                Our comprehensive Online Marketing strategy will boost your
                website trafic hence monthly sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symtoms;
