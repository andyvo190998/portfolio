import React from 'react';
import "./intro.css";
import me from '../../img/portrait.png'
import { useSelector } from 'react-redux';

const Intro = () => {
    const mode = useSelector((item) => item.darkMode);
    // console.log(mode)
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">hello, my name is</h2>
                    <h1 className="i-name">Andy Vo</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Material Scientist</div>
                            <div className="i-title-item">Freelancer</div>
                            <div className="i-title-item">Student</div>
                        </div>
                    </div>
                    <p className="i-des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quia asperiores nobis doloremque voluptatum quos, facere atque, rem nam eligendi sint repellat, quam aliquam rerum magnam dicta tempora debitis omnis?
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-image" />
            </div>
        </div>
    )
}

export default Intro
