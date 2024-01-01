import React from "react";
import "./contacts.css";
import insta from "../../assets/insta.png";
import linked from "../../assets/linked.png";
import mail from "../../assets/email.png";
import github from "../../assets/github.png";
import phone from "../../assets/phone.png";

const Contacts = () => {
    return (
        <section id='contacts'>
                <div className="contact-box">
                    <h2>Contact Me</h2>
                    <div className="contact-item">
                        <img src={linked} alt="LinkedIn" />
                        <a href="https://www.linkedin.com/in/logan-choi-ab189219a/" target="_blank" rel="noopener noreferrer">Logan Choi</a>
                    </div>
                    <div className="contact-item">
                        <img src={insta} alt="Instagram" />
                        <a href="https://www.instagram.com/logan.kwonhee.choi/" target="_blank" rel="noopener noreferrer">logan.kwonhee.choi</a>
                    </div>
                    <div className="contact-item">
                        <img src={mail} alt="Email" />
                        <a href="mailto:kwonhee1023@gmail.com">kwonhee1023@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <img src={github} alt="GitHub" />
                        <a href="httgit ps://github.com/loganchoi" target="_blank" rel="noopener noreferrer">loganchoi</a>
                    </div>
                    <div className="contact-item">
                        <img src={phone} alt="Phone" />
                        <span>(573) 578-9980</span>
                    </div>
                </div>
        </section>
    );
}

export default Contacts;
