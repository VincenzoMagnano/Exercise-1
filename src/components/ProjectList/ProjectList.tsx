import React, { FC } from 'react'
import { Project } from '../../types/Project'
import './ProjectList.css'
interface ProjectListProps {
    projects: Project[]
}

const ProjectList: FC<ProjectListProps> = (props) => {
     
    return (
        <>
            <div className="row">
                {props.projects.map((project) => (
                    <div key={project.id} className="cols-sm">
                        <div className="card">
                            <img className='img-dimension' src={'https://picsum.photos/id/237/200/300'} alt={project.name} />
                            <section className="section dark">
                                <h5 className="strong">
                                    <strong>{project.name}</strong>
                                </h5>
                                <p>{project.description}</p>
                                <p>Budget : {project.budget.toLocaleString()}</p>
                            </section>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProjectList
