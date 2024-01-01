import React from "react";
import './home.css';
import profile from '../../assets/profilePic.png'


const Home = () => {
    return (
        <section id="home">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">My name is <span className="introName">Logan Choi</span> <br />Software Developer</span>
            </div>
            <img src={profile} alt="profile" className="profile" />
        </section>
    )
}

export default Home;