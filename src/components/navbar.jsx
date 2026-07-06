import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <div className="navbar-links">
        <Link to="/#home">Home</Link>
        <Link to="/#about">About</Link>
        <Link to="/#skills">Skills</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar