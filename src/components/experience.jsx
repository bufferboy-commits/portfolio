import { motion } from 'framer-motion'
import experience from '../data/experience'

function Experience() {
  return (
    <section id="experience">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Experience
      </motion.h2>

      {experience.map((item, index) => (
        <motion.div
          className="experience-item"
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
        >
          <div className="experience-header">
            <h3>{item.title}</h3>
            <span className="experience-date">{item.duration}</span>
          </div>
          <p className="experience-org">{item.place}</p>
          {item.description && <p>{item.description}</p>}
        </motion.div>
      ))}
    </section>
  )
}

export default Experience