import picCover from '../assets/projects/rfionthruster.png'
import wingCover from '../assets/projects/lat.png'
import dlCover from '../assets/projects/dl.png'
import signwaveCover from '../assets/projects/smartglove.png'
import PrinterCover from '../assets/projects/2dprinter.png'
import landauDamping from '../assets/projects/landaudamping.png'
import vsplat from '../assets/projects/vsplat.png'
import dlin from '../assets/projects/dlin.png'
import dworking from '../assets/projects/2dworking.jpeg'

const projects = [
  {
    id: "pic-rf-ion-thruster",
    title: "PIC Simulation of RF Ion Thruster Plasma",
    shortDescription: "Particle-in-Cell simulations of plasma dynamics for RF ion thruster propulsion.",
    coverImage: picCover,
    tools: ["Python", "NumPy", "Matplotlib", "OpenFOAM", "PICFoam"],
    githubLink: "https://github.com/bufferboy-commits/Particle-In-Cell-Simulations.git",
    fullDescription: `A collection of Particle-in-Cell (PIC) plasma simulations, built from first 
                      principles in Python, developed to study the fundamental wave and kinetic phenomena that 
                      govern plasma behavior in RF ion thrusters.

                      The simulations follow standard electrostatic (ES1) and electromagnetic (EM1) PIC frameworks, 
                      progressing from basic single-particle dynamics to collective plasma phenomena including 
                      plasma oscillations, wave propagation, and Landau damping. Each simulation shares a common 
                      foundation: grid setup, particle initialization, and the core PIC computational cycle, with 
                      the Boris pusher used for particle motion and a Yee FDTD scheme for the electromagnetic field 
                      updates.

                      Built during an internship on RF ion thrusters at the Applied Plasma and Space Propulsion 
                      Laboratory (Department of Aerospace Engineering, IIT Madras), this work aims to develop a 
                      computational understanding of the plasma physics underlying RF-coupled discharge sustenance. 
                      OpenFOAM was also explored as a framework for more advanced, mesh-based plasma simulation.
                      
                      Here is sample result obtained for Landau damping of a plasma wave, showing the decay of the electric field amplitude over time due to resonant particle-wave interactions.
                      To see all the results in detail, please visit the GitHub repository linked below.`,
    images: [landauDamping]
  },
  {
    id: "powered-lift-wing",
    title: "Powered-Lift Wing and Propeller Design",
    shortDescription: "Blown-flap vortex-sheet theory and constrained parameter optimization for LAT Aerospace problem statement.",
    coverImage: wingCover,
    tools: ["Python", "OpenVSP", "VSPAERO", "XFoil", "ANSYS Fluent"],
    githubLink: "https://github.com/bufferboy-commits/Powered-Lift-Wing-and-Propeller-Design.git",
    fullDescription: `Developed as part of Inter IIT Tech Meet 14.0, this project focused on the aerodynamic and propulsion design of a Short Take-Off and Landing (STOL) aircraft employing Distributed Electric Propulsion (DEP) and blown flap augmentation.
                      
                      My work centered on the aerodynamic modelling of the wing, beginning with Glauert's Thin Airfoil Theory and the Vortex Sheet Method to predict the lift characteristics of a cambered airfoil. I extended this formulation to incorporate flap deflection by modifying the camber geometry, and developed a mathematical model for blown wings by extending jet-flap theory to account for airfoil camber. The resulting two-dimensional model was integrated with Prandtl's Lifting-Line Theory to analyze the finite wing and evaluate the influence of distributed propeller slipstream on lift generation, with aerodynamic predictions validated using ANSYS Fluent simulations and wind tunnel testing.

                      In parallel, we developed a Blade Element Momentum Theory (BEMT) solver to design and optimize the distributed propellers enabling a coupled aerodynamic–propulsion system capable of meeting the demanding lift and efficiency requirements of the STOL configuration

                      Here is a sample image during a OpenVSP simulation. To view all results and the complete design process, please visit the GitHub repository linked below.`,
    images: [vsplat]
  },
  {
    id: "lattice-beam-dl-optimization",
    title: "Deep Learning Structural Stress Prediction",
    shortDescription: "MLP, CNN, and U-Net surrogate models for von Mises stress prediction and topology optimization.",
    coverImage: dlCover,
    tools: ["Python","Numpy","Matplotlib", "TensorFlow", "Scikit-Learn"],
    githubLink: "https://github.com/bufferboy-commits/Lattice_Beam_DL_Optimization.git",
    fullDescription: `Developed as part of the ME-504: Deep Learning in Physical Systems course at IIT Ropar, this project explored the application of deep learning for structural analysis and topology optimization of lattice cantilever beams.

    I developed a series of neural network surrogate models to predict the peak von Mises stress directly from the material thickness distribution, eliminating the need for computationally expensive finite element analyses during optimization. Beginning with a multilayer perceptron, I used automatic differentiation to perform gradient-based sensitivity analysis, identifying the influence of individual design variables on structural performance. I then formulated a differentiable optimization framework in which nodal thicknesses were treated as trainable parameters and optimized using gradient descent under smoothness and volume-fraction constraints.

    To capture spatial correlations within the lattice, I further implemented convolutional neural networks and a U-Net architecture capable of predicting the complete stress field across the structure. This work demonstrates how physics-based simulations and deep learning can be integrated to enable rapid structural optimization and data-driven engineering design.
    
    Here is a sample result showing the predicted von Mises stress vs Volume Distribution for a lattice cantilever beam. To view all results and the complete design process, please visit the GitHub repository linked below.`,
    images: [dlin]
  },
  {
    id: "2-d Printer",
    title: "CNC Pen Plotter",
    shortDescription: "Mechatronics project involving CNC control and pen plotting.",
    coverImage: PrinterCover,
    tools: ["SolidWorks", "Arduino Uno R4", "MATLAB", "Python", "C++"],
    githubLink: "https://github.com/bufferboy-commits/Chitrakaar.git",
    fullDescription: `Developed as part of ME-205: Design Lab-I at IIT Ropar, Chitrakaar is a fully integrated 2D CNC pen plotter capable of autonomously reproducing digital images on paper.

                      I designed the complete mechanical system including the belt-driven XY gantry, linear guide mechanism, and servo-actuated pen lift with all structural components modeled in SolidWorks. The motion platform was built around NEMA 17 stepper motors, an Arduino Uno R4, and a CNC Shield for precise two-axis positioning.

                      To automate the drawing process, I developed a MATLAB pipeline that converts images into optimized G-code toolpaths through edge extraction, path planning, coordinate scaling, and pen-lift segmentation. A custom Arduino firmware interprets the generated G-code to coordinate stepper motion and pen actuation, while a Python interface streams commands over serial communication.

                      This project gave me hands-on experience across mechanical design, embedded systems, motion control, and computer-aided manufacturing — and in integrating hardware and software into one complete electromechanical system.
                      
                      Here is sample image of the pen plotter in action. To view all results and the complete design process, please visit the GitHub repository linked below.`,
    images: [dworking]
  },
  {
    id: "signwave",
    title: "SignWave: Gesture-to-Speech Glove",
    shortDescription: "ESP32-based smart glove translating hand gestures into speech using flex sensors and IMU data.",
    coverImage: signwaveCover,
    tools: ["Embedded Systems","ESP32",  "C++", "Flutter"],
    githubLink: "https://github.com/bufferboy-commits/Smart_Glove.git",
    fullDescription: `Developed as a self-initiated project, this Smart Glove is a wearable embedded system designed to capture hand gestures through a combination of flex sensors and inertial sensing.

                      I integrated five flex sensors with an MPU6050 inertial measurement unit on an ESP32 to simultaneously acquire finger bend and hand orientation data, enabling reliable characterization of static hand gestures. The embedded firmware performs sensor acquisition, signal processing, and gesture interpretation before transmitting the recognized output wirelessly to a custom Flutter application via Wi-Fi. The application converts the received gesture into speech using Google's Text-to-Speech engine, providing an intuitive communication interface.

                      In developing this system, I designed the complete sensing electronics, implemented the embedded software for real-time data acquisition and interpretation, and established wireless communication between the wearable device and the mobile application. The project provided practical experience in embedded systems, sensor interfacing, real-time signal processing, wireless communication, and human–machine interaction.`,
    images: []
  }
]
export default projects
