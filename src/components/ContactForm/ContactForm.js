import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
    return (
        <div className="contact-form">
            <div className="container">
                <div className="contact-box">
                    <div className="contact-content">
                        <div className="newMain">
                            <div className="leftdiv">
                                <span className="sg-translate title">Get in touch</span>
                                <ul className="contact-info">
                                    <li>
                                        <span className="subtitle">For general enquiries</span>
                                    </li>
                                    <li>
                                        <span className="info-title">Address :</span>
                                        <span className="info-text">
                                            110, 16th Road, Chembur, <br /> Mumbai - 400071
                                        </span>
                                    </li>
                                    <li>
                                        <span className="info-title">Phone :</span>
                                        <a href="tel:+912225208822" className="info-text">
                                            +91 22 25208822
                                        </a>
                                    </li>
                                    <li>
                                        <span className="info-title">Email :</span>
                                        <a href="mailto:info@supremegroup.co.in" className="info-text">
                                            info@supremegroup.co.in
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="form-container">
                                <form noValidate className="form-grid">
                                    <div className="input-group">
                                        <input
                                            className="input-field"
                                            id="name"
                                            placeholder="Full name"
                                            name="name"
                                            type="text"
                                        />
                                    </div>

                                    <div className="input-group">
                                        <input
                                            className="input-field"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                        />
                                    </div>

                                    <div className="input-group">
                                        <input
                                            className="input-field"
                                            id="company"
                                            type="text"
                                            placeholder="Company"
                                            name="company"
                                        />
                                    </div>

                                    <div className="input-group">
                                        <textarea
                                            rows="3"
                                            id="message"
                                            className="input-field"
                                            placeholder="Message"
                                            name="message"
                                        ></textarea>
                                    </div>

                                    <div className="button-container">
                                        <button type="submit" className="submit-button">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
