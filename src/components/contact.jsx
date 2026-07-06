import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

const contactLinks = [
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/amey-kemkar" },
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/bufferboy-commits" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/_itsameyy_" },
  { name: "Email", icon: <FaEnvelope />, link: "mailto:amey.kemkar@email.com" },
  { name: "Phone", icon: <FaPhone />, link: "tel:+91XXXXXXXXXX" },
]

function Contact() {
  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Contact
      </motion.h2>

      <div className="contact-grid">
        {contactLinks.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-tile"
            >
              <span className="contact-icon">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Contact