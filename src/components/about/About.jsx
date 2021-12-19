import React from 'react';
import "./about.css";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/10051001/pexels-photo-10051001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ipsa minima recusandae eligendi laudantium distinctio.</p>
                <p className="a-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro atque esse voluptates quam tempora dolore praesentium. Reprehenderit, facilis ipsum id ut blanditiis quam laboriosam repellendus doloremque repudiandae non sapiente tempora provident tenetur, est debitis voluptate dignissimos eaque cumque voluptas asperiores?</p>
                <div className="a-award">
                    <img src="https://images.pexels.com/photos/6532603/pexels-photo-6532603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="a-award-img" />
                    <div className="a-award-text">
                        <h4 className="a-award-title">Lorem, ipsum dolor.</h4>
                        <p className="award-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero placeat porro qui eaque a labore aut earum doloremque harum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
