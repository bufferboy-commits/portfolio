import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <section>
        <h2>Project not found</h2>
        <Link to="/">Back to home</Link>
      </section>
    )
  }

  return (
  <section id="project-detail" className="project-detail">
    <Link to="/#projects" className="back-link">← Back to Projects</Link>

    <h1>{project.title}</h1>

    <div className="project-tools">
      {project.tools.map((tool) => (
        <span key={tool} className="tool-tag">{tool}</span>
      ))}
    </div>

    <p className="project-full-description">{project.fullDescription}</p>
    {project.images && project.images.length > 0 && (
      <div className="project-gallery">
        {project.images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`${project.title} result ${index + 1}`} />
          </div>
        ))}
      </div>
    )}

{project.githubLink && (
  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
    View on GitHub →
  </a>
    )}
  </section>
)
}

export default ProjectDetail