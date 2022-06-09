import React from "react";
import "./Banner.css";
import bannerImage from "../../../assets/image/banner.png";
import { Link } from "react-router-dom";
import resume from "../../../assets/resume/Mohammed Sayed Resume.pdf";

const Banner = () => {
  return (
    <div className="bannerContainer grid md:grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="p-5 my-5">
          <h2 className="text-2xl font-semibold">
            Hi their, I am <span className="font-bold text-primary">MOHAMMED SAYED</span>
          </h2>
          <h1 className="text-4xl font-bold my-5">MERN Stack Web Developer</h1>
          <Link className="myButton w-3/6" to={resume} target="_blank" download>
            Download Resume
          </Link>
        </div>
      </div>
      <div>
        <img className="bannerImg" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
