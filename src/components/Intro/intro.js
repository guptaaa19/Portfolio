import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import resume from '../../assets/resume.pdf'; // Add the path to your PDF resume

function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm <span className='introName'>Srishti</span> <br/>Full-Stack Developer</span>
            <p className='introPara'>
                I am a dedicated and versatile Full-Stack Developer with a passion <br/>for creating dynamic and innovative web applications. With a <br/>solid foundation in both front-end and back-end technologies, <br/>I bring a holistic approach to web development. My journey <br/>in the world of coding has equipped me with a diverse skill <br/>set that allows me to design, build, and maintain robust <br/>and user-friendly web solutions.
            </p>
            <a href={resume} download='Srishti_Resume.pdf' className='btn'>
                My Resume
            </a>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  );
}

export default Intro;
