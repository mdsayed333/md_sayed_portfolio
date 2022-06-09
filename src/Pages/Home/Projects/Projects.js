import React from "react";
import './Projects.css';

const Projects = () => {
  return (
    <div className="p-8 projectsContainer">
      <h2 className="text-3xl font-bold text-center my-7">My Projects....</h2>

        <div className="grid lg:grid-cols-2 gap-6">
            <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                style={{ height: "300px", width: "300px" }}
                src="https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg"
                alt="Album"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-2xl text-primary">Textile Industrial Tools</h2>
                <p>
                It is the wholesale market of a manufacturing company. This website 
                has many benefits for users and admins.
                </p>
                <div class="card-actions">
                <button class="myButton">Project Details</button>
                </div>
            </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                style={{ height: "300px", width: "300px" }}
                src="https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg"
                alt="Album"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-2xl text-primary">Textile Industrial Tools</h2>
                <p>
                It is the wholesale market of a manufacturing company. This website 
                has many benefits for users and admins.
                </p>
                <div class="card-actions">
                <button class="myButton">Project Details</button>
                </div>
            </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                style={{ height: "300px", width: "300px" }}
                src="https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg"
                alt="Album"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-2xl text-primary">Textile Industrial Tools</h2>
                <p>
                It is the wholesale market of a manufacturing company. This website 
                has many benefits for users and admins.
                </p>
                <div class="card-actions">
                <button class="myButton">Project Details</button>
                </div>
            </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                style={{ height: "300px", width: "300px" }}
                src="https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg"
                alt="Album"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-2xl text-primary">Textile Industrial Tools</h2>
                <p>
                It is the wholesale market of a manufacturing company. This website 
                has many benefits for users and admins.
                </p>
                <div class="card-actions">
                <button class="myButton">Project Details</button>
                </div>
            </div>
            </div>
        </div>

    </div>
  );
};

export default Projects;
