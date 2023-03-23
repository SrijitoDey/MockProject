import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Envelope } from "react-bootstrap-icons";
import { Telegram } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

import "./contact.css"

function Contact({selectedProfile}){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_913brwe",
                "template_t8ll2oh",
                form.current,
                "jbPaCUmqXSdu34eYX"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    alert(error.text);
                }
            );
    };


    return (
        <div className="container contact" id="contact">

            <div className="div_contact_me">
                <h3 style={{ "color": "white" }}>Contact me</h3><br />

                <div>
                    {console.log(selectedProfile)}
                    <a className="link_of__icon_and_lable" href={"mailto:" + selectedProfile.contact.email}><Envelope size={20} /> &nbsp; Email Address</a><br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className="span_contact_me">{selectedProfile.contact.email}</span>
                </div> <br />

                <div>
                    <a className="link_of__icon_and_lable" href={selectedProfile.contact.telegram}><Telegram color="white" size={20} /> &nbsp; Telegram</a><br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className="span_contact_me">{selectedProfile.contact.telegram}</span>
                </div><br />

                <div>
                    <a className="link_of__icon_and_lable" href="#"><TelephoneFill color="white" size={20} /> &nbsp; Phone</a><br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className="span_contact_me">+91 {selectedProfile.contact.phone}</span>
                </div><br />

                <div>
                    <a className="link_of__icon_and_lable" href={selectedProfile.social.github}><Github color="white" size={20} /> &nbsp; Github</a><br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className="span_contact_me">{selectedProfile.social.github}</span>
                </div><br />

                <div>
                    <a className="link_of__icon_and_lable" href={selectedProfile.social.linkedin}><Linkedin color="white" size={20} /> &nbsp; LinkedIn</a><br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className="span_contact_me">{selectedProfile.social.linkedin.substring(28,30)}</span>
                </div>

            </div>

            <div className="outer_get_in_touch">
                <div className="inner_get_in_touch"><br />
                    <h1 className="hover-underline-animation" style={{ "textAlign": "center" }}>
                        Get in touch
                    </h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <div style={{ "textAlign": "center" }}>
                            <input type="submit" value="Send" />
                        </div> <br />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;