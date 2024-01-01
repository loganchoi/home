import React from "react";
import "./about.css";
import chiefs from '../../assets/chiefs.png'
import lakers from '../../assets/lakers.png'
import spurs from '../../assets/spurs.png'

const About = () => {
    return (
        <section id='about' className='about-section'>
            <div className='about-box'>
                <h2 className='about-title'>ABOUT ME</h2>
                <div className='about-content'>
                    <p>
                        I am currently a master’s student at the University of Washington studying computer science with an emphasis on machine learning. 
                        I am passionate about software development, data analysis, cloud development, and enjoy seeing a product through its full development cycle.
                    </p>
                    <p>
                        In addition to my academic achievements, I have been a leader in several clubs such as the Asian American Association, Assocation of Computing Machinery, and LEAD Peer Tutoring. 
                        I also worked as a manager at a restaurant where I have developed strong leadership skills and a strong work ethic. 
                        Through my hard work, I was able to land multiple internships revolving around software development and working with clients and stakeholders.
                    </p>
                    <p>
                        Outside of my professional life, I enjoy playing and watching a variety of sports such as basketball, football, soccer, golf, and mixed martial arts. 
                        I believe sports have taught me valuable skills such as teamwork, discipline, and perseverance, which have helped me in both my academic and professional life.
                    </p>
                </div>
                <h2 className='about-title'>FAVORITE TEAMS</h2>
                <div className='favorite-teams'>
                    <img src={chiefs} alt='Kansas City Chiefs' className='team-logo' />
                    <img src={lakers} alt='Los Angeles Lakers' className='team-logo' />
                    <img src={spurs} alt='San Antonio Spurs' className='team-logo' />
                </div>
            </div>
        </section>
    );
}

export default About;