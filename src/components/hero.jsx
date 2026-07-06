import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Hi, my name is <span className="hero-name">Amey Kemkar</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          I am a <span className="hero-name">Mechanical Engineer</span>, passionate about <span className="hero-name">Aerospace </span> and <span className="hero-name"> Space Technology</span>.
        </motion.h2>

        <motion.a
          href="#about"
          className="btn-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Know more
        </motion.a>
      </div>
    </section>
  )
}

export default Hero