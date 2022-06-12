import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState({});
  const url = `https://gentle-beach-51443.herokuapp.com/project/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [url]);

  const {
    name,
    img1,
    img2,
    img3,
    description,
    features,
    _id,
    backendTechnology,
    frontendTechnology,
    liveLink,
    clientSide,
    serverSide,
  } = projects;
  console.log(features);

  return (
    <div>
        <Navbar></Navbar>
      {/* <h2 className="text-4xl text-center">Project Details</h2> */}
      <div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            {/* <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-pink-200 rounded-box"> */}
            <div class="h-96 carousel carousel-vertical p-4 bg-pink-200 rounded-box">
              <div class="carousel-item">
                <img
                  src={`${img1}`}
                  class="rounded-box my-4"
                  alt=""
                  height="3450"
                  width="400"
                />
              </div>
              <div class="carousel-item">
                <img
                  src={`${img2}`}
                  class="rounded-box mb-4"
                  alt=""
                  height="3450"
                  width="400"
                />
              </div>
              <div class="carousel-item">
                <img
                  src={`${img3}`}
                  class="rounded-box mb-4"
                  alt=""
                  height="3450"
                  width="400"
                />
              </div>
            </div>
            {/* <img
              src="https://api.lorem.space/image/movie?w=260&h=400"
              class="max-w-sm rounded-lg shadow-2xl"
            /> */}
            <div className="px-10">
              <h1 class="text-4xl text-primary font-bold">{name}</h1>
              <p class="py-6 text-2xl font-semibold">{description}</p>
              <ul class="list-disc pl-8">
                  {
                      features?.map(fe => <li>{fe} </li>)
                  }
              </ul>
              <p className="text-xl font-bold">Frontend Technology Used: <span>{frontendTechnology}</span> </p>
              {backendTechnology && <p className="text-xl font-bold">Backend Technology Used: <span>{backendTechnology} </span></p>}
              <a href={liveLink} target='_blank' class="myButton">
                See Live
              </a>
              <div className="flex justify-between">
                <a href={clientSide} target='_blank' class="myButton">
                  Client Side Github
                </a>
                {serverSide && (
                  <a href={liveLink} target='_blank' class="myButton">
                    Server Side Github
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
