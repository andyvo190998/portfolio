import React from 'react';
import "./intro.css";
import me from '../../img/portrait.png';
import me1 from "../../img/me3.png"
import { useSelector } from 'react-redux';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Intro = () => {
    const mode = useSelector((item) => item.darkMode);
    // console.log(mode)
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Bao Vo Hoang</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            {/* <div className="i-title-item">Material Scientist</div>
                            <div className="i-title-item">Freelancer</div> */}
                            <div className="i-title-item">Master Student</div>
                        </div>
                    </div>
                    <p className="i-des">
                        My full name is Bao Vo Hoang. Originally I am from Viet Nam which is a beautiful country in South-East Asia. Now I am Studying and working in Germany as a Master Student.
                    </p>
                    <div>
                    <h2>My skills</h2>
                    <ul>
                        <li>CSS - HTML - JAVASCRIPT</li>
                        <li>REACTJS (REDUX, REACT ROUTER)</li>
                        <li>NODEJS - EXPRESS</li>
                        <li>MONGODB</li>
                    </ul>
                    </div>

                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me1} alt="" className="i-image" />
                <div className="navbar">
                    <a href="#about">About</a>
                    <a href="#project">Project</a>
                    <a  target="_blank" href="https://github.com/andyvo190998?tab=repositories">
                        <GitHubIcon />
                    </a>
                    <a target="_blank" href="www.linkedin.com/in/bao-vo-hoang">
                        <LinkedIn />
                    </a>
                    <a href="#contact">
                        <ContactMailIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro
