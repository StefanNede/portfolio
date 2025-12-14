"use client"
import React from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import "../styles/navbar.css"

// 1. Define your links in an array to keep the code clean
const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'education', label: 'Education', path: '/education' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'work', label: 'Work', path: '/work' },
  { id: 'blog', label: 'Blog', path: '/blog' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

interface NavbarProps {
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  return (
    <div className="navbar-root-wrapper">
      {navItems.map((item) => {
        const isActive = currentPage === item.id;

        return (
          <div 
            key={item.id} 
            className="navbar-link-wrapper relative" 
          >
            {/* The Fluid Background Element 
                This only renders if the item is active. 
                Framer Motion detects the 'layoutId' matches the previous one 
                and slides it over. 
            */}
            {isActive && (
              <motion.div
                layoutId="active-nav-background"
                className="absolute border-l-4 border-blue-500 bg-gradient-to-r from-blue-900/40 to-transparent"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                // Optional: styling inline if you aren't using Tailwind
                style={{
                   position: 'absolute',
                   top: 0,
                   left: 0,
                   right: 0,
                   bottom: 0,
                   zIndex: 0, // Behind the text
                }}
              />
            )}

            <Link to={item.path} style={{ position: 'relative', zIndex: 10 }}>
              <button 
                // Optional: Change text color if active
                style={{ color: isActive ? '#549EE8' : 'white' }}
              >
                {item.label}
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;

// const Navbar : React.FC<NavbarProps> = ({ currentPage }) => {

//     console.log(currentPage);
//     return (
//         <div className={`navbar-root-wrapper`}>
//             <div className={`navbar-link-wrapper ${currentPage === "home" ? 'navbar-current-page' : ''}`}>
//                 <Link to="/"><button>Home</button></Link>
//             </div>
//             <div className={`navbar-link-wrapper ${currentPage === "about" ? 'navbar-current-page' : ''}`}>
//                 <Link to="/about"><button>About</button></Link>
//             </div>
//             <div className={`navbar-link-wrapper ${currentPage === "education" ? 'navbar-current-page' : ''}`}>
//                 <Link to="/education"><button>Education</button></Link>
//             </div>
//             <div className={`navbar-link-wrapper ${currentPage === "projects" ? 'navbar-current-page' : ''}`}>
//                 <Link to="/projects"><button>Projects</button></Link>
//             </div>
//             <div className={`navbar-link-wrapper ${currentPage === "work" ? 'navbar-current-page' : ''}`}>
//                 <Link to="/work"><button>Work</button></Link>
//             </div>
//             <div className={`navbar-link-wrapper ${currentPage === "blog" ? 'navbar-current-page' : ''}`}>
//                 <Link to="/blog"><button>Blog</button></Link>
//             </div>
//             <div className={`navbar-link-wrapper ${currentPage === "contact" ? 'navbar-current-page' : ''}`}>
//                 <Link to="/contact"><button>Contact</button></Link>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
