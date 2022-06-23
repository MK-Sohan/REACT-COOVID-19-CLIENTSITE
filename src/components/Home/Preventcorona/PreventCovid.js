import React from "react";
import "./Preventcovid.css";
import image1 from "../../../Assets/COVID-19 ASSETS/prevent corona/02.png";
import image2 from "../../../Assets/COVID-19 ASSETS/prevent corona/04.jpg";
import image3 from "../../../Assets/COVID-19 ASSETS/prevent corona/05.jpg";
import image4 from "../../../Assets/COVID-19 ASSETS/prevent corona/06.jpg";
const PreventCovid = () => {
  return (
    <div class="herosection3-container">
      <div class="hero-2">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          class="right-sideelement"
        >
          <span class="tittle">
            <h3 className="text-4xl">About (2022-nCoV)</h3>
          </span>
          <h1 className="text-2xl">Prevention Coronavirus</h1>
          <p>
            Protect yourself and others around you by knowing the facts and,{" "}
            <br /> taking appropriate precautions. Follow advice provided by
            your local health authority.
          </p>
          <div>
            <div class="howcorona-main">
              <div class="how-coronaimage">
                <img src={image2} alt="" />
              </div>
              <div class="how-corona">
                <h3>Wash Your Hands For 20sec</h3>{" "}
                <p>
                  Our comprehensive Online Marketing strategy will <br /> boost
                  your website trafic hence monthly sales.
                </p>
              </div>
            </div>
            <div class="howcorona-main">
              <div class="how-coronaimage">
                <img src={image3} alt="" />
              </div>
              <div class="how-corona">
                <h3>Cover Nose and Mouth When Sneezing</h3>{" "}
                <p>
                  Our comprehensive Online Marketing strategy will <br /> boost
                  your website trafic hence monthly sales.
                </p>
              </div>
            </div>
            <div class="howcorona-main">
              <div class="how-coronaimage">
                <img src={image4} alt="" />
              </div>
              <div class="how-corona">
                <h3>Wear A Mask If Available</h3>
                <p>
                  Our comprehensive Online Marketing strategy will <br /> boost
                  your website trafic hence monthly sales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          class="hero2-image"
        >
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PreventCovid;
