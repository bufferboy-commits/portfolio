import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
          >
            <Link to={`/projects/${project.id}`} className="project-card">
              <div className="project-cover">
                {project.coverImage && <img src={project.coverImage} alt={project.title} />}
              </div>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects