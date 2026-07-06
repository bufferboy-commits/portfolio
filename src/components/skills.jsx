import { motion } from 'framer-motion'

import cppLogo from '../assets/logos/cpp.webp'
import pythonLogo from '../assets/logos/python.png'
import numpyLogo from '../assets/logos/numpy.png'
import tensorflowLogo from '../assets/logos/tensorflow.webp'
import scikitLogo from '../assets/logos/sklearn.webp'
import javaLogo from '../assets/logos/java.png'
import ansysLogo from '../assets/logos/ansys.png'
import matlabLogo from '../assets/logos/matlab.png'
import openfoamLogo from '../assets/logos/openfoam.png'
import openmotorLogo from '../assets/logos/openmotor.png'
import openrocketLogo from '../assets/logos/openrocket.png'
import openvspLogo from '../assets/logos/openvsp.png'
import simulinkLogo from '../assets/logos/simulink.png'
import solidworksLogo from '../assets/logos/solidworks.png'
import xfoilLogo from '../assets/logos/Xfoil.png'

const skillCategories = [
  {
    title: "Programming Tools",
    skills: [
      { name: "C++", icon: <img src={cppLogo} alt="C++" /> },
      { name: "Python", icon: <img src={pythonLogo} alt="Python" /> },
      { name: "NumPy", icon: <img src={numpyLogo} alt="NumPy" /> },
      { name: "TensorFlow", icon: <img src={tensorflowLogo} alt="TensorFlow" /> },
      { name: "Scikit-Learn", icon: <img src={scikitLogo} alt="Scikit-Learn" /> },
      { name: "Java", icon: <img src={javaLogo} alt="Java" /> },
    ]
  },
  {
    title: "Simulation & Modelling Softwares",
    skills: [
      { name: "MATLAB", icon: <img src={matlabLogo} alt="MATLAB" /> },
      { name: "Simulink", icon: <img src={simulinkLogo} alt="Simulink" /> },
      { name: "SolidWorks", icon: <img src={solidworksLogo} alt="SolidWorks" /> },
      { name: "ANSYS Mechanical", icon: <img src={ansysLogo} alt="ANSYS Mechanical" /> },
      { name: "ANSYS Fluent", icon: <img src={ansysLogo} alt="ANSYS Fluent" /> },
      { name: "OpenFoam", icon: <img src={openfoamLogo} alt="OpenFOAM" /> },
      { name: "PICFoam", icon: <img src={openfoamLogo} alt="PICFoam" /> },
      { name: "OpenVSP", icon: <img src={openvspLogo} alt="OpenVSP" /> },
      { name: "OpenRocket", icon: <img src={openrocketLogo} alt="OpenRocket" /> },
      { name: "OpenMotor", icon: <img src={openmotorLogo} alt="OpenMotor" /> },
      { name: "XFOIL", icon: <img src={xfoilLogo} alt="XFOIL" /> }
    ]
  },
]

function Skills() {
  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "anticipate" , delay: 0.7}}
      >
        My Stack
      </motion.h2>

      {skillCategories.map((category) => (
        <div key={category.title} className="skill-category">
          <motion.h3
            initial={{ opacity: 0.25 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease: "anticipate"}}
          >
            {category.title}
          </motion.h3>
          <div className="skill-list">
            {category.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: "anticipate" }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills