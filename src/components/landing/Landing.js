import React from 'react';
import './Landing.css';

const Landing = ({landing}) => {
  return (
   
    <div id="landing">
    
    <h2> About Me and This Site </h2>
    
      Hello!  I (they/them) am a current doctoral student at SDSU and UCSD.  This site is largely under construction at the moment, but
  I am hosting it as a space to share, and reflect on my research and teaching work, as well as to share extracurriculars that have been 
  a requisite component of my academia self-care routine.  

  
  Coming from both a social justice and a computer science background, I believe pretty firmly in open access, especially when it pertains both to knowledge
  and the generation of knowledge.  On this site you will find resources related to my research as well as to the classes that I teach.
  Hopefully, they can be of use to you in your own research, teaching, and education.

  Feel free to reach out.  I can be reached by email at cmarks (at) sdsu.edu 
  
  Charles Marks (1/20/20)
  
  
  <div class="row" style={display: flex}>
  <div class="column" style={width:50%; padding: 5px}>
    <img src="Pics/Dough_Before.jpg" alt="Before" style={width:100%} >
  </div>
  <div class="column" style={width:50%; padding: 5px}>
   <img src="Pics/Dough_After.jpg" alt="After" style={width:100%}>
  </div>
</div>
  
    </div>
   
  );
};

export default Landing;
