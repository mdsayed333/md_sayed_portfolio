import React from "react";
import { Link } from "react-router-dom";
import programmer from "../../../assets/image/programmer.jpg";
import resume from '../../../assets/resume/Mohammed Sayed Resume.pdf';

const AboutMe = () => {
  return (
    <div className="">
        <h2 className="text-3xl font-bold text-center my-10">ABOUT ME</h2>
      <div class="hero bg-base-100 px-12">
        <div class="hero-content flex-col lg:flex-row">
          <img
            style={{ height: "400px", width: "380px" }}
            src={programmer}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="programmerImage"
          />
          <div className="px-5">
            <h1 class="text-3xl font-semibold text-primary">MOHAMMED SAYED</h1>
            <p class="py-5 lg:pr-32">
              <span className="block mb-4">
                I am a MERN Stack Web Developer. I am experienced in developing
                static websites using HTML, CSS and JavaScript(ES6).I also
                working with React, NodeJs, ExpressJs and MongoDB.
              </span>
              I want to be a skilled front-end developer focusing on JavaScript
              mobile-first development. Looking forward to continuing my career
              through success in MERN Stack Development. Ability to adapt to a
              collaborative environment and focus on achieving high quality
              results under strict deadlines.
            </p>
            <Link to={resume} target='_blank' class="myButton w-4/12">More Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
