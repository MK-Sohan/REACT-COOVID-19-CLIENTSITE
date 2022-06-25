import React, { useRef } from "react";
import { contact } from "../data";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qp46zav",
        "template_paekz8n",
        form.current,
        "6q1M20po80FEjSFeV"
      )
      .then(
        (result) => {
          toast.success(" Message Send ");
          e.target.reset();

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="section  " id="contact">
      <div className="container mx-auto pb-10">
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="flex flex-col items-center text-center pt-5"
        >
          <h2 className="text-white text-4xl ">Contact me</h2>
          <p className="subtitle text-yellow-100">
            If you want to hire me or have any kind of question about me or my
            project you can ask me.Thank You
          </p>
        </div>
        <div className="flex flex-1 flex-col lg:gap-x-0 lg:flex-row">
          <div className="flex   flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 ">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div
                    data-aos="zoom-out-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    <h4 className="font-body text-xl mb-1 text-white">
                      {title}
                    </h4>
                    <p className="mb-1 text-paragraph text-white">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 lg:space-y-5  w-full mt-10 lg:ml-28"
          >
            <input
              required
              name="user_name"
              className="input bg-gray-500 w-full lg:w-96 "
              type="text"
              placeholder="Your name"
            />
            <input
              required
              name="user_email"
              className="input w-full bg-gray-500 lg:w-96 lg:ml-5"
              type="email "
              placeholder="Your email"
            />
            <br />
            <input
              required
              name="from_name"
              className="input w-full bg-gray-500 lg:w-[810px]"
              type="text"
              placeholder="Subject"
            />
            <br />

            <textarea
              required
              name="message"
              className="textarea w-full h-40 bg-gray-500  lg:w-[810px] lg:h-56"
              placeholder="Your message"
            ></textarea>
            <div>
              <input type="submit" value="Send Message" className="buttonn " />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
