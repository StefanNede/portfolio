"use client"
import { Link } from "react-router";
import "../styles/navbar.css";

type NavbarProps = {
    currentPage : string,
}

const Navbar : React.FC<NavbarProps> = ({ currentPage }) => {
    console.log(currentPage);
  return (
    <div className={`navbar-root-wrapper`}>
        <div className={`navbar-link-wrapper ${currentPage === "home" ? 'navbar-current-page' : ''}`}>
            <Link to="/"><button>Home</button></Link>
        </div>
        <div className={`navbar-link-wrapper ${currentPage === "about" ? 'navbar-current-page' : ''}`}>
            <Link to="/about"><button>About</button></Link>
        </div>
        <div className={`navbar-link-wrapper ${currentPage === "education" ? 'navbar-current-page' : ''}`}>
            <Link to="/education"><button>Education</button></Link>
        </div>
        <div className={`navbar-link-wrapper ${currentPage === "projects" ? 'navbar-current-page' : ''}`}>
            <Link to="/projects"><button>Projects</button></Link>
        </div>
        <div className={`navbar-link-wrapper ${currentPage === "work" ? 'navbar-current-page' : ''}`}>
            <Link to="/work"><button>Work</button></Link>
        </div>
        <div className={`navbar-link-wrapper ${currentPage === "blog" ? 'navbar-current-page' : ''}`}>
            <Link to="/blog"><button>Blog</button></Link>
        </div>
        <div className={`navbar-link-wrapper ${currentPage === "contact" ? 'navbar-current-page' : ''}`}>
            <Link to="/contact"><button>Contact</button></Link>
        </div>
    </div>
  );
}

export default Navbar;