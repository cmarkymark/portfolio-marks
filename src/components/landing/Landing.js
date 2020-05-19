import React from 'react';
import './Landing.css';

const Landing = ({landing}) => {
  return (
   
    <div id="landing">
  <div class="row">
    <div class ="spacer"> </div>
    <div class="column"> 
    Hello! I (they/them) am a doctoral student in the Joint Doctoral Program in Interdisciplinary Research on Substance Use at San Diego State
    University and the University of California, San Diego. My dissertation research focuses on applying a trauma-informed lens to tobacco use
    research, with the intention of generalizing this trauma-informed approach for substance use research more generally. 
    <br/>
      <!-- Do not change the code! -->
<a id="foxyform_embed_link_964315" href="http://www.foxyform.com/">foxyform</a>
<script type="text/javascript">
(function(d, t){
   var g = d.createElement(t),
       s = d.getElementsByTagName(t)[0];
   g.src = "http://www.foxyform.com/js.php?id=964315&sec_hash=39c5efab212&width=350px";
   s.parentNode.insertBefore(g, s);
}(document, "script"));
</script>
<!-- Do not change the code! -->
    
     </div>
  <div class="spacer"></div>
  <div class="column"> 
    <img class="image" src="Pics/myface.jpg" alt=""/>
      <br/>
      <br/>
    On this website you will find resources related to my research and teaching, as well as additional educational tools and 
    some extracurriculars! Under research you can find information about my research work, including access to R code used to run published analyses. Under
  teaching, there are tutorials (under construction) for running various statistical tests in R that are commonly used within the social sciences. 
      </div>
  <div class = "spacer"></div>
</div>
  
 
    </div>
   
  );
};

export default Landing;
