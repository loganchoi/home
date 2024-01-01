import React from "react";
import "./skills.css";
import azure from "../../assets/azure.png";
import agile from "../../assets/agile.png";
import cpp from "../../assets/cpp.png";
import python from "../../assets/python.png";
import java from "../../assets/java.png";
import html from "../../assets/html.png";
import rust from "../../assets/rust.png";
import js from "../../assets/javascript.png";
import bash from "../../assets/bash.png";
import rstudio from "../../assets/rstudio.png";
import matlab from "../../assets/matlab.png";
import asm from "../../assets/Assembly.png";
import reactLogo from "../../assets/react.png";
import visualStudio from "../../assets/visual.png";
import spark from "../../assets/spark.png";
import git from "../../assets/git.png";
import hadoop from "../../assets/hadoop.png";
import mpi from "../../assets/MPI.png";
import pandas from "../../assets/pandas.png";
import sckit from "../../assets/sckit.png";


const Skills = () => {
    return (
        <section id='skills' className='skills-section'>
            <div className='skills-box'>
                <h2 className='skills-title'>CERTIFICATIONS & METHODOLOGIES</h2>
                <div className='skills-content'>
                    <ul>
                        <li>
                            <img src={azure} alt="Microsoft Azure Fundamentals" className="certification-image" />
                            Microsoft Azure Fundamentals
                        </li>
                        <li>
                            <img src={agile} alt="Agile Methodologies" className="certification-image" />
                            Agile Methodologies
                        </li>
                    </ul>
                </div>
            </div>

            <div className='skills-box'>
                <h2 className='skills-title'>LANGUAGES</h2>
                <div className='skills-content'>
                <ul>
                        <li>
                            <img src={cpp} alt="C++" className="certification-image" />
                            C++
                        </li>
                        <li>
                            <img src={python} alt="Python" className="certification-image" />
                            Python
                        </li>
                        <li>
                            <img src={java} alt="Java" className="certification-image" />
                            Java
                        </li>
                        <li>
                            <img src={html} alt="HTML/CSS" className="certification-image" />
                            HTML/CSS
                        </li>
                        <li>
                            <img src={rust} alt="Rust" className="certification-image" />
                            Rust
                        </li>
                        <li>
                            <img src={js} alt="JavaScript" className="certification-image" />
                            JavaScript
                        </li>
                        <li>
                            <img src={bash} alt="Bash" className="certification-image" />
                            Bash
                        </li>
                        <li>
                            <img src={rstudio} alt="R" className="certification-image" />
                            R
                        </li>
                        <li>
                            <img src={matlab} alt="MatLab" className="certification-image" />
                            MatLab
                        </li>
                        <li>
                            <img src={asm} alt="Assembly" className="certification-image" />
                            Assembly
                        </li>
                    </ul>
                </div>
            </div>

            <div className='skills-box'>
                <h2 className='skills-title'>DEV TOOLS & LIBRARIES</h2>
                <div className='skills-content'>
                <ul>
                        <li>
                            <img src={reactLogo} alt="React.js" className="certification-image" />
                            React.js
                        </li>
                        <li>
                            <img src={visualStudio} alt="Visual Studio" className="certification-image" />
                            Visual Studio
                        </li>
                        <li>
                            <img src={spark} alt="Spark" className="certification-image" />
                            Spark
                        </li>
                        <li>
                            <img src={git} alt="Git" className="certification-image" />
                            Git
                        </li>
                        <li>
                            <img src={hadoop} alt="Hadoop/MapReduce" className="certification-image" />
                            Hadoop/MapReduce
                        </li>
                        <li>
                            <img src={mpi} alt="MPI" className="certification-image" />
                            MPI
                        </li>
                        <li>
                            <img src={pandas} alt="Pandas" className="certification-image" />
                            Pandas
                        </li>
                        <li>
                            <img src={sckit} alt="Scikit-Learn" className="certification-image" />
                            Scikit-Learn
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;