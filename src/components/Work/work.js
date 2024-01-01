// Work.js

import React from "react";
import "./work.css";
import deloitte from '../../assets/deloitte.png';
import msnt from '../../assets/msnt.png';
import amd from '../../assets/amd.png';
import uw from '../../assets/uw.png';
import mottomo from '../../assets/mottomo.png';
import acm from '../../assets/acm.png';
import aaa from '../../assets/aaa.png';
import lead from '../../assets/lead.png';

const Work = () => {
    return (
        <section id='work'>
            <div className='work-section'>
                <h2>Work Experience</h2>

                <div className='work-item'>
                    <img src={amd} alt='AMD Logo' className='work-logo' />
                    <div className='work-description'>
                        <h3>AMD</h3>
                        <p>Position: Software Engineer Intern</p>
                        <p>Duration: January 2024 - present</p>
                    </div>
                </div>

                <div className='work-item'>
                    <img src={deloitte} alt='Deloitte Logo' className='work-logo' />
                    <div className='work-description'>
                        <h3>Deloitte</h3>
                        <p>Position: Solutions Engineer Intern</p>
                        <p>Duration: June 2022 - July 2922</p>
                    </div>
                </div>

                <div className='work-item'>
                    <img src={mottomo} alt='Mottomo Logo' className='work-logo-mottomo' />
                    <div className='work-description'>
                        <h3>Mottomo Sushi</h3>
                        <p>Position: Manager & Web Developer</p>
                        <p>Duration: August 2018 - September 2023</p>
                    </div>
                </div>
            </div>

            <div className='work-section'>
                <h2>Education</h2>
                <div className='work-item'>
                    <img src={uw} alt='UW Logo' className='education-logo' />
                    <div className='work-description'>
                        <h3>University of Washington</h3>
                        <p>Degree: M.S.</p>
                        <p>Major: Computer Science</p>
                        <p>Duration: September 2023 - present</p>
                    </div>
                </div>
                <div className='work-item'>
                    <img src={msnt} alt='MSNT Logo' className='education-logo' />
                    <div className='work-description'>
                        <h3>Missouri University of Science & Technology</h3>
                        <p>Degree: B.S.</p>
                        <p>Major: Computer Science</p>
                        <p>Minor: Mathematics</p>
                        <p>Duration: August 2019 - December 2022</p>
                    </div>
                </div>
            </div>

            <div className='work-section'>
                <h2>Clubs</h2>
                <div className='work-item'>
                    <img src={acm} alt='ACM Logo' className='club-logo' />
                    <div className='work-description'>
                        <h3>Association of Computing Machinery</h3>
                        <p>Role: Social Media Chair/Officer In-Training</p>
                        <p>Duration: November 2023 - present (UW Officer In-Training)</p>
                        <p>Duration: March 2022 - December 2022 (MS&T Social Media Chair)</p>
                    </div>
                </div>

                <div className='work-item'>
                    <img src={aaa} alt='AAA Logo' className='club-logo' />
                    <div className='work-description'>
                        <h3>Asian American Association</h3>
                        <p>Role: Vice President</p>
                        <p>Duration: January 2021 - December 2022</p>
                    </div>
                </div>

                <div className='work-item'>
                    <img src={lead} alt='Lead Logo' className='club-logo' />
                    <div className='work-description'>
                        <h3>LEAD: Learning Enhancement Across Disciplines</h3>
                        <p>Role: Tutor & Communications Officer</p>
                        <p>Duration: August 2020 - December 2022</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;
