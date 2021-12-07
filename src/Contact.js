import React from 'react'

import emailjs from 'emailjs-com'
import './form.css';
import { Link } from "react-router-dom";


export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_bshu04q', 'template_u0xtniu', e.target, 'user_awbCOK1q1pP2PHb4vILtT')
    }

    return (
        <div id="container">
            <Link exact activeClassName="active" to="/">
                <p id="me-intro2" >
                    Bradley Mulick
                </p>
            </Link>

            <form className="contact-form" onSubmit={sendEmail}>
                <h1>Send me a message!</h1>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

