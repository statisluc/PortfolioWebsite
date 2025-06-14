import Card from "./Card.jsx";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

//use emailjs to have people contact you directly using this page

function Contact() {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_h0ad1g7", "template_h8uk0er", form.current, {
        publicKey: "O3zVOANdkhlp0NX92",
      })
      .then(
        () => {
          console.log("Email Success");
          e.target.reset();
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          setIsSending(false);
        },
        (error) => {
          console.log("EMAIL FAILED", error.text);
          setIsSending(false);
        }
      );
  };
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 min-h-screen flex flex-col justify-center text-center items-center">
      <Card>
        <h2 className="text-3xl font-bold text-black mb-2">Contact Me</h2>
        <p className="text-lg text-gray-800">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input
              type="submit"
              value={isSending ? "Sending..." : "Send"}
              disabled={isSending}
              className="bg-green-500 text-white font-bold px--6 py-2 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </form>
          {sent && (
            <p className="text-green-600 font-medium mt-2">
              Email Successfully Sent ✅
            </p>
          )}
        </p>
      </Card>
    </div>
  );
}
// ok definitely include a (email successfully sent) pop up appear or something, and hell even a timeout on the button lmfao
export default Contact;
