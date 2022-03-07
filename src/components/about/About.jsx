import React from 'react';
import "./about.css";
import me from '../../img/me.jpeg'

const About = () => {
    return (
        <div id="about" className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={me} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">In 2020, after finishing my bachelor degree in Materials Technology and working for SolarBK which is a solar company as an R&D employee in Viet Nam. I realize that programming is an important skill that almost every engineer need to know, especially during the pandemic, work from home become more and more popular. I decide to learn coding and after a few days searching on google. I decide to learn javascript and learn how to become a Full Stack Web Developer. The very first course that I have learned is on Udemy. It is about basic javascript, html and css. After a few month trying hard, i were starting to get use to what is the programming look like.</p>
                {/* <p className="a-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro atque esse voluptates quam tempora dolore praesentium. Reprehenderit, facilis ipsum id ut blanditiis quam laboriosam repellendus doloremque repudiandae non sapiente tempora provident tenetur, est debitis voluptate dignissimos eaque cumque voluptas asperiores?</p> */}
                <div className="a-award">
                    <img src="https://pbs.twimg.com/profile_images/739678334062186496/UgOH-uqb_400x400.jpg" alt="" className="a-award-img" />
                    <div className="a-award-text">
                        <h4 className="a-award-title">Working experiment</h4>
                        {/* <p className="award-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero placeat porro qui eaque a labore aut earum doloremque harum.</p> */}
                        <ul>
                            <li>Company name: Fullerton Health</li>
                            <li>Date: 01/07/2021 – 01/10/2021</li>
                            <li>Position: Part-time Full-Stack Web Developer</li>
                            <li>Description: I was responsible for maintaining, debugging, adding new features for their website by using <b>ReactJS, NodeJS, Express, MongoDB</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
