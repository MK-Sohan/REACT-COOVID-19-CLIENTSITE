import React from "react";
import "./howspread.css";
import hero2 from "../../../Assets/COVID-19 ASSETS/hero-2.png";
import icon1 from "../../../Assets/COVID-19 ASSETS/01.png";
import icon2 from "../../../Assets/COVID-19 ASSETS/02.png";
import icon3 from "../../../Assets/COVID-19 ASSETS/03.png";
const HowSpread = () => {
  return (
    <div class="herosection2-container">
      <div class="hero-2">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          class="hero2-image"
        >
          <img src={hero2} alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          class="right-sideelement"
        >
          <span class="tittle">
            <h3 className="text-4xl">How Virus Spread</h3>
          </span>
          <h1 className="text-2xl">How Contagion Coronavirus</h1>
          <p>
            Researchers estimate that people who get infected with the
            coronavirus <br /> can spread it to others 2 to 3 days before
            symptoms start and are most <br /> contagious 1 to 2 days before
            they feel sick.
          </p>
          <div className="howspread">
            <div class="howcorona-main">
              <div class="how-coronaimage">
                <img src={icon1} alt="" />
              </div>
              <div class="how-corona">
                <h3>Human Contact</h3>{" "}
                <p>
                  Our comprehensive Online Marketing strategy will <br /> boost
                  your website trafic hence monthly sales.
                </p>
              </div>
            </div>
            <div class="howcorona-main">
              <div class="how-coronaimage">
                <img src={icon2} alt="" />
              </div>
              <div class="how-corona">
                <h3>Air Transmission</h3>{" "}
                <p>
                  Our comprehensive Online Marketing strategy will <br /> boost
                  your website trafic hence monthly sales.
                </p>
              </div>
            </div>
            <div class="howcorona-main">
              <div class="how-coronaimage">
                <img src={icon3} alt="" />
              </div>
              <div class="how-corona">
                <h3>Contaminated Objects</h3>
                <p>
                  Our comprehensive Online Marketing strategy will <br /> boost
                  your website trafic hence monthly sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowSpread;
