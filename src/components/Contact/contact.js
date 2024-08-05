import React, { useRef } from 'react';
import './contact.css';
// import Walmart  from '../../assets/walmart.png';
// import Adobe from '../../assets/adobe.png';
// import Microsoft  from '../../assets/microsoft.png';
// import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c9vovg1', 'template_bfox1qp', form.current, '_JBs9AT6UJ2Af2NH_')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Technical Skills</h1>
            <p className='skillsDsc'>
            I'm currently pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. With a strong foundation in software development and a passion for problem-solving, I aim to contribute to impactful projects and grow my skills further.
            </p>
            <div className='myskill'>
                <div className='tech'><u>Programming Language</u>
                  <ul>
                    <li>C++</li>
                    <li>C</li>
                    <li>JavaScript</li>
                    <li>Python (Basic)</li>
                  </ul>
                </div>
                <div className='tech'><u>Frameworks</u>
                  <ul>
                    <li>HTML & CSS</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Nodejs</li>
                    <li>Redux</li>
                  </ul>
                </div>
                <div className='tech'><u>Tools/Platforms</u>
                  <ul>
                    <li>MYSQL</li>
                    <li>MongoDB</li>
                    <li>Canva</li>
                    <li>GitHub</li>
                    <li>Excel</li>
                  </ul>
                </div>
                <div className='tech'><u>Soft Skills</u>
                  <ul>
                    <li>Leadership</li>
                    <li>Problem-Solving Skills</li>
                    <li>Team Player</li>
                    <li>Communication</li>
                    <li>Adaptability</li>
                    
                  </ul>
                </div>
            </div>
            <div id='contact'>
              <h1 className='contactPageTitle'>Contact Me</h1>
              <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
              <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                <input type='email' className='email' placeholder='Your Email' name='from_email'/>
                <textarea name='message' rows="5" placeholder='Your Message' className='msg'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                  <img src={FacebookIcon} alt='facebook' className='clientImg'/>
                  <img src={TwitterIcon} alt='twitter' className='clientImg'/>
                  <img src={YouTubeIcon} alt='youtube' className='clientImg'/>
                  <img src={InstagramIcon} alt='instagram' className='clientImg'/>
                </div>
              </form>
            </div>
        </div>
    </section>
  )
}

export default Contact;
