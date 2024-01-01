import React from 'react';
import "./navbar.css";
import logo from '../../assets/LC.png';
import contactImg from '../../assets/contact.png';
import homeImg from '../../assets/home.png';
import aboutImg from '../../assets/about.png';
import skillImg from '../../assets/puzzle.png';
import projectImg from '../../assets/projects.png';
import workImg from '../../assets/work.png';
import resume from "../../assets/resume.png";
import { Link } from 'react-router-dom';
import resumePdf from '../../assets/resume.pdf';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link to="/home" className='desktopMenuListItem'>
                    <div className='desktopMenuBox'>
                        <img src={homeImg} alt='' className='desktopMenuImg' />
                        <span>Home</span>
                    </div>
                </Link>
                <Link to="/about" className='desktopMenuListItem'>
                    <div className='desktopMenuBox'>
                        <img src={aboutImg} alt='' className='desktopMenuImg' />
                        <span>About</span>
                    </div>
                </Link>
                <Link to="/skills" className='desktopMenuListItem'>
                    <div className='desktopMenuBox'>
                        <img src={skillImg} alt='' className='desktopMenuImg' />
                        <span>Skills</span>
                    </div>
                </Link>
                <Link to="/projects" className='desktopMenuListItem'>
                    <div className='desktopMenuBox'>
                        <img src={projectImg} alt='' className='desktopMenuImg' />
                        <span>Projects</span>
                    </div>
                </Link>
                <Link to="/work" className='desktopMenuListItem'>
                    <div className='desktopMenuBox'>
                        <img src={workImg} alt='' className='desktopMenuImg' />
                        <span>Experience</span>
                    </div>
                </Link>
                <Link to="/contacts" className='desktopMenuListItem'>
                    <div className='desktopMenuBox'>
                        <img src={contactImg} alt='' className='desktopMenuImg' />
                        <span>Contacts</span>
                    </div>
                </Link>
                {/* Resume PDF button */}
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className='desktopMenuListItem'>
                    <div className='desktopMenuBox'>
                        <img src={resume} alt='' className='desktopMenuImg' />
                        <span>Resume</span>
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
