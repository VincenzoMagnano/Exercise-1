import React from 'react';
import { MOCK_PROJECTS } from '../MOCK_PROJECTS/MOCK_PROJECTS';
import ProjectList from '../ProjectList/ProjectList';

function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
    
     <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

export default ProjectsPage;
