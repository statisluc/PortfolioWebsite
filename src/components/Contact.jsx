import Card from "./Card.jsx";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

//use emailjs to have people contact you directly using this page

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h0ad1g7", "template_h8uk0er", form.current, {
        publicKey: "O3zVOANdkhlp0NX92",
      })
      .then(
        () => {
          console.log("Email Success");
          e.target.reset();
        },
        (error) => {
          console.log("EMAIL FAILED", error.text);
        }
      );
  };
  return (
    <div className="w-full max-w-screen-md mx-auto px-4 min-h-screen flex flex-col justify-center text-center items-center">
      <Card>
        <h2 className="text-3xl font-bold text-black mb-2">Contact Me</h2>
        <p className="text-lg text-gray-800">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </p>
      </Card>
    </div>
  );
}

export default Contact;
