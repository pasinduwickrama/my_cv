import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fo4tiv4', 'template_q1ivvya', form.current, 'hypV8pOzenkj3aV5T')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id='co'>
    <div>
    <div className='othe-hede'>
        <h2 className='text-center pro'>CONTACT</h2>
    </div>
        <div className='other-listt'>
        <form ref={form} onSubmit={sendEmail} className='con-body'>
      <label>Name</label>
      <input type="text" name="user_name"/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea className='texx' name="message" />
     
      <button type="submit" value="Send" className='btn-texx'>Send</button>
    </form>
        </div>
    </div>
    </section>
  )
}

export default Contact