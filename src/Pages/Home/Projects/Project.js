import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

const Project = ({project}) => {
    const {name, img1, img2, img3, description, features, _id} = project;
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                style={{ height: "300px", width: "300px" }}
                src={img1}
                alt=""
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-2xl text-primary">{name}</h2>
                <p>{description}</p>
                <div class="card-actions">
                <Link to={`/projectDetails/${_id}`} class="myButton">Project Details</Link>
                
                </div>
            </div>
            </div>
    );
};

export default Project;