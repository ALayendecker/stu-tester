import React from "react";
import Card from "../Cards/index";
import projectData from "../Cards/project.json";
import { Route } from "react-router-dom";

function CardWrapper() {
    const projects = projectData.projects;

    return (
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {projects.map((project) => (
                <Card
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    thumbnailUrl={project.thumbnailUrl}
                    viewUrl={project.viewUrl}
                    gitHubURL={project.gitHubURL}
                />
            ))}
        </div>

    );
}

export default CardWrapper;
