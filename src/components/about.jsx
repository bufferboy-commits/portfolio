import { motion } from 'framer-motion'
import profilePic from '../assets/profile.jpeg'

const achievements = [
  "Top 7% Scholarship Awardee at IIT Ropar",
  "Top 4% in JEE Advanced, Top 1% in JEE Mains",
  "94.5% in CBSE 2024",
  "98.6% in ICSE 2022",
]

function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "anticipate" }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="about-quote"
        initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "anticipate" }}
      >
        "To understand even a small part of this universe is a privilege worth a lifetime of pursuit."
      </motion.p>

      <div className="about-content">
        <div className="about-main">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0.25 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            <img src={profilePic} alt="Amey Kemkar" />
          </motion.div>

          <div className="about-text">
            <motion.p
              initial={{ opacity: 0.25 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              I'm a pre-final year Mechanical Engineering undergraduate at IIT Ropar, with a strong interest in aerospace systems and computational modelling. My work spans numerical simulations, electric propulsion, embedded systems, and machine learning, all driven by the same underlying curiosity: understanding the physics behind complex systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0.25 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
            >
              I believe good engineering starts with first principles. Whether I'm writing simulation code, designing an embedded system, or building a prototype, the most rewarding part is uncovering why a system behaves the way it does before deciding how to improve it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0.25 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            >
              Outside of engineering, I spend much of my time around astronomy and model rocketry organizing stargazing sessions, operating telescopes, and working on rocket design and launches. I also love building robots and smart systems, tinkering with anything that blends hardware and intelligence. These pursuits have become a natural extension of my interest in science and exploration.
            </motion.p>

            <motion.div
              className="about-buttons"
              initial={{ opacity: 0.25 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: "anticipate", delay: 0.55 }}
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="about-btn">
                View Resume
              </a>
              <a href="#skills" className="about-btn">My Stack</a>
              <a href="#projects" className="about-btn">Projects</a>
              <a href="#contact" className="about-btn">Contact</a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="about-achievements"
          initial={{ opacity: 0.25 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "anticipate", delay: 0.7 }}
        >
          {achievements.map((item, index) => (
            <div className="achievement-item" key={index}>
              <span className="achievement-title">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About