import React, { useState } from 'react';
import emailjs  from "@emailjs/browser";

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b9c6668', 'template_u5qxqfs', e.target, 'PENTjkTA3jWIPu7uJ')
      .then(
        (result) => {
          setEmailStatus('Email successfully sent!');
        },
        (error) => {
          setEmailStatus('Failed to send email. Try again.');
        },
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="flex flex-col items-center py-16 space-y-8 hover-up-down">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <form className="w-full max-w-md" onSubmit={sendEmail}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-5 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-5">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight"
              type="email"
              name="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-5">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
              rows="6"
              name="message"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded" type="submit">
            Send Message
          </button>
        </div>
        {emailStatus && <p className="email-status text-center mt-4">{emailStatus}</p>}
      </form>
    </section>
  );
};

export default Contact;