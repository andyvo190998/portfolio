import React, { useRef, useState } from 'react';
import "./contact.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import emailjs from 'emailjs-com';
import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState();
    const [text, setText] = useState({
        user_name: '',
        user_subject: '',
        user_email: '',
        message: ''
    })
    const [alertInput, setAlertInput] = useState(false);

    const mode = useSelector((item) => item.darkMode);

    const handleOnchange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setText((previous) => ({ ...previous, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.user_name === '' || text.user_subject === '' || text.user_email === '' || text.message === '') {
             setAlertInput(true);
             setDone(false)
        } else {
            emailjs.sendForm('service_lcwwntj', 'template_5ao990r', formRef.current, 'user_KE6MSbpR6jWYFi5JrvbXD')
                .then((result) => {
                    console.log(result.text);
                    setDone(true);
                    setText({
                        user_name: '',
                        user_subject: '',
                        user_email: '',
                        message: ''
                    })
                }, (error) => {
                    console.log(error.text);
                });
                setAlertInput(false)
        }

    }

    return (
        <div id="contact" className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact
                    </h1>
                    <div className="c-infor">
                        <div className="c-infor-item">
                            <LocalPhoneIcon className="c-icon" /> +49 1575 0625 876
                        </div>
                        <div className="c-infor-item">
                            <EmailIcon className="c-icon" /> bao.vo.hoang@uni-a.de
                        </div><div className="c-infor-item">
                            <HomeIcon className="c-icon" /> Franzensbad 4, Augsburg, Germany, 86199.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    {/* <p className="c-desc">
                        Write me an email
                    </p> */}
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: mode && "#333", color: mode && 'white' }} onChange={handleOnchange} value={text.user_name} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: mode && "#333", color: mode && 'white' }} onChange={handleOnchange} value={text.user_subject} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: mode && "#333", color: mode && 'white' }} onChange={handleOnchange} value={text.user_email} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: mode && "#333", color: mode && 'white' }} onChange={handleOnchange} value={text.message} rows="5" placeholder="message" name="message"></textarea>
                        <button>Submit</button>
                        {done && <Alert>Thanks for your message! I will reply you as soon as possible.</Alert>}
                        {alertInput && <Alert severity="error">You should fill all the inputs. Thank you!</Alert>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
