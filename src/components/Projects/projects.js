import React from "react";
import "./projects.css";
import penguin from '../../assets/penguin.jpeg';
import nba from '../../assets/nba.jpeg';
import chess from '../../assets/chess.jpeg';
import sushi from '../../assets/sushi.jpeg';
import graph from '../../assets/graph.jpeg';
import githubIcon from '../../assets/github.png';

const Projects = () => {
    return (
        <section id='projects' className='projects-section'>
            <div className='projects-box'>
                <h2 className='projects-title'>Notable Projects</h2>
                <div className='project-images'>
                    <a href="https://github.com/loganchoi/Penguin-Search-Artificial-Intelligence" target="_blank" rel="noopener noreferrer">
                        <img src={penguin} alt="Penguin Project" className="project-image" />
                    </a>
                    <a href="https://github.com/loganchoi/NBA-Game-Predictor" target="_blank" rel="noopener noreferrer">
                        <img src={nba} alt="NBA Project" className="project-image" />
                    </a>
                </div>
                <div className='project-images'>
                    <a href="https://github.com/loganchoi/ChessAI" target="_blank" rel="noopener noreferrer">
                        <img src={chess} alt="Chess Project" className="project-image" />
                    </a>
                    <a href="https://github.com/MottomoSushi/mottomo" target="_blank" rel="noopener noreferrer">
                        <img src={sushi} alt="Sushi Project" className="project-image" />
                    </a>
                </div>
                <div className='project-images'>
                    <a href="https://github.com/loganchoi/ArticulationPoints" target="_blank" rel="noopener noreferrer">
                        <img src={graph} alt="Graph Project" className="project-image" />
                    </a>
                </div>
                <p className='github-link'>Check out my GitHub for more projects! <a href="https://github.com/loganchoi" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub Icon" className="github-icon" /></a></p>
            </div>
        </section>
    );
}

export default Projects;
