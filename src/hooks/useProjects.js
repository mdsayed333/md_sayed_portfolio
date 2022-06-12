import React, { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect( ()=> {
        fetch('https://gentle-beach-51443.herokuapp.com/projects')
        .then(res => res.json())
        .then(data => setProjects(data));
    },[])
    return [projects, setProjects];
};

export default useProjects;