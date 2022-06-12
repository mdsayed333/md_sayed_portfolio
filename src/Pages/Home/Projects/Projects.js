import React, { useEffect, useState } from "react";
import useProjects from "../../../hooks/useProjects";
import Project from "./Project";
import './Projects.css';

const Projects = () => {
    // const [projects, setProjects] = useState([]);
    const [projects, setProjects] = useProjects([])

    // useEffect( () => {
    //     fetch('projects.json')
    //     .then(res => res.json())
    //     .then(data => setProjects(data))
    // },[])
    console.log(projects);
  return (
    <div className="p-8 projectsContainer">
      <h2 className="text-3xl font-bold text-center my-7">My Projects</h2>

        <div className="grid lg:grid-cols-2 gap-6">
            {
                projects.map(project => <Project 
                    key={project._id}
                    project={project}
                ></Project>)
            }
            
        </div>
    </div>
  );
};

export default Projects;
