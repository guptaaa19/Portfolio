import React from 'react';
import './skills.css';
import GitHub from '../../assets/github.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>
          As a passionate software developer, I specialize in creating dynamic and user-friendly web applications. With expertise in C++ and JavaScript, and frameworks like React and NodeJS, I handle both front-end and back-end development to ensure seamless user experiences. I enjoy solving complex problems and staying updated with industry trends, delivering high-quality projects like food ordering systems and secure note-taking apps. My goal is to blend technical proficiency with creativity, making technology accessible and enjoyable for all users.
        </span>
        <div className='skillBars'>
            <a href='https://github.com/guptaaa19/FoodieExpress' target='_blank' rel='noopener noreferrer' className='skillBar'>
                <img src={GitHub} alt='FoodieXpress' className='skillBarImg'/>
                <div className='skillBarText'>
                     <h2>FoodieXpress</h2>
                     <p>In June-July 2024, I developed a dynamic food ordering website using React and Redux. The site features smooth user interactions through Shimmer UI and optimized performance with Parcel as the bundler. A REST API was integrated for real-time menu updates, ensuring a seamless and responsive user experience. Technologies used include React, Redux, Shimmer UI, Parcel, and REST API.</p>
                </div>
            </a>
            <a href='https://github.com/yourusername/notesSphere' target='_blank' rel='noopener noreferrer' className='skillBar'>
                <img src={GitHub} alt='NotesSphere' className='skillBarImg'/>
                <div className='skillBarText'>
                     <h2>NotesSphere</h2>
                     <p>From April to May 2024, I developed a note-taking app using the MERN stack. The app allows users to create, manage, and customize their notes seamlessly. I implemented user authentication with JSON Web Tokens (JWT) to ensure secure access and enhanced privacy and data protection measures. Technologies used include MongoDB, Express, React, and Node.js.</p>
                </div>
            </a>
            <a href='https://github.com/guptaaa19/Dog-website' target='_blank' rel='noopener noreferrer' className='skillBar'>
                <img src={GitHub} alt='Response Code List Manager' className='skillBarImg'/>
                <div className='skillBarText'>
                     <h2>Response Code List Manager</h2>
                     <p>This web application helps users create, search, manage, and understand HTTP response codes with dog-themed images from https://http.dog/. Login/Signup Page: Secure user authentication for saving and managing lists. Search Page: Filter response codes (e.g., 203, 2xx) to view and save lists with corresponding dog images. Lists Page: View, edit, or delete saved lists, displaying response codes and images. The app ensures a user-friendly experience and promotes a better understanding of HTTP response codes.</p>
                </div>
            </a>
        </div>
    </section>
  );
}

export default Skills;
