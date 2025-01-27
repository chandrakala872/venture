import React, { useState, useEffect } from 'react';
import './About.css';
import img1 from '../Images/img1.jpg'; // Adjust path if needed
import img2 from '../Images/img2.jpg'; // Adjust path if needed
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img2,
      title: 'About Us',
      description: 'We are passionate about making a difference in the world.',
    }
   
    // Add more slides here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="about-slider">
      <div className="slide">
        <img src={slides[currentSlide].image} alt="Slide" />
        <div className="overlay">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
        </div>
      </div>
      <div>
        <p className="paragraph" >
        We are India’s award-winning leading technology <br/> business incubator for science and technology<br/> startups.
      
        </p>
      </div>
      <div>
      
      

      {/* YouTube Video Embed */}
      <div className="video-container">
      <iframe
         width="1000"
        height="515"
       marginHeight="1"
        
        src="https://www.youtube.com/embed/I9562hY3fGg?si=Foi2PSOs8M_U2pMy"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

<div className='overview'>Overview</div>
<div className='venture'>
Venture Center was set up as an initiative of the National Chemical Laboratory under CSIR's scheme titled "Scheme for setting up incubation <br/>centers in CSIR laboratories". 
</div>
<div className='center'>
Venture Center was incorporated as “Entrepreneurship Development Center” under Section 25 of the Companies Act, 1956 (now Section 8 under<br/> the Companies Act, 2013), and we are an approved incubator of the National Science and Technology Entrepreneurship Development Board<br/> of the Department of Science and Technology, Government of India (DST-NSTEDB) and Department of Biotechnology’s (DBT) .
</div>
</div>
    </div>
    <div class="container">
  <div class="box yellow">
    <h1>Mission</h1>
    <p>
      To nucleate and nurture world-leading inventive ventures out of India that solve the world's most pressing problems with science and technology-led interventions.
    </p>
  </div>
  <div class="box blue">
    <h1>Vision</h1>
    <p>
      To be the organization that will be credited with creating, shaping, and sustaining a "Pune cluster" of innovative technology businesses with a significant economic impact regionally, nationally, and globally within the next 20 years 
      (Venture Center was founded on 10th Jan 2007).
    </p>
  </div>
  <div>
    
  </div>
  <div>
     
    </div>
    
</div>
<div className="about-section">
  <div className="title">Who we are</div>
  <div className="content">
    We are India’s award-winning leading technology business incubator for science and technology startups. Venture Center was set up as an initiative of the National Chemical Laboratory under CSIR's scheme titled "Scheme for setting up incubation centers in CSIR laboratories".
    <br /><br />
    Venture Center was incorporated as “Entrepreneurship Development Center” under Section 25 of the Companies Act, 1956 (now Section 8 under the Companies Act, 2013), and we are an approved incubator of the National Science and Technology Entrepreneurship Development Board of the Department of Science and Technology, Government of India (DST-NSTEDB) and Department of Biotechnology’s (DBT) Biotechnology Industry Research Assistance Council (BIRAC).
  </div>
</div>

    </div>

    
   
      
    
  );
};

export default About;
