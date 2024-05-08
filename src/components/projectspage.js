import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "../styles/projects.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Function to fetch projects from GitHub API
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/alecmartens/repos"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects(); // Call the fetchProjects function when component mounts
  }, []);
  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="text">
          <h1>Latest Projects 🛠️</h1>
          <p>What I have been working on recently</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#007BFF' }} 
                onMouseOver={(e) => e.currentTarget.style.color = '#FF0000'} 
                onFocus={(e) => e.currentTarget.style.color = '#FF0000'}
                onMouseOut={(e) => e.currentTarget.style.color = '#007BFF'} 
                onBlur={(e) => e.currentTarget.style.color = '#007BFF'}
                onMouseDown={(e) => e.currentTarget.style.color = '#0000FF'} 
                onMouseUp={(e) => e.currentTarget.style.color = '#007BFF'} 
              >
                View on GitHub
              </a>

            </div>
          ))}
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default ProjectsPage;
