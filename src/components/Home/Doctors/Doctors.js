import React from "react";
import "./doctor.css";
import image from "../../../Assets/symtoms/doctor-1.jpg";
import image2 from "../../../Assets/symtoms/doctor-2.jpg";
import image3 from "../../../Assets/symtoms/doctor3.jpg";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Doctors = () => {
  return (
    <div className="main-clay">
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
        <h1 className="text-4xl text-center  font-bold text-white pt-8">
          Meet Our Best Doctors
        </h1>
        <p className="text-xl text-center mt-3 text-white">
          Dynamically formulate fully tested catalysts for change via focused
          methods of empowerment <br /> Assertively extend alternative synergy
          and extensive web services.
        </p>
      </div>
      <div class="featured-clay flex flex-col">
        <div
          data-aos="fade-right "
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div>
            <img src={image} alt="" />
          </div>

          <div>
            <h3>Billie R. Courtney</h3>
            <p>Cardiologist</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-center items-center gap-2">
              <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>|
              +088xxxxxxx
            </div>
            <div className="flex justify-center items-center gap-2">
              <AiOutlineMail></AiOutlineMail>| abc@gmail.com
            </div>
            <a href="javascript:void(0);" title="featured clay">
              CONTACT
            </a>
          </div>
        </div>

        <div
          data-aos="fade-right "
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div>
            {" "}
            <img src={image2} alt="" />
          </div>

          <div>
            <h3>Dorothy M. Nickell</h3>
            <p>Throat Specialist</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-center items-center gap-2">
              <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>|
              +088xxxxxxx
            </div>
            <div className="flex justify-center items-center gap-2">
              <AiOutlineMail></AiOutlineMail>| abc@gmail.com
            </div>
            <a href="javascript:void(0);" title="featured clay">
              CONTACT
            </a>
          </div>
        </div>

        <div
          data-aos="fade-left "
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div>
            {" "}
            <img src={image3} alt="" />
          </div>

          <div>
            <h3>Courtney A. Smith</h3>
            <p>Rehabilitation Therapy</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-center items-center gap-2">
              <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>|
              +088xxxxxxx
            </div>
            <div className="flex justify-center items-center gap-2">
              <AiOutlineMail></AiOutlineMail>| abc@gmail.com
            </div>
            <a href="javascript:void(0);" title="featured clay">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
