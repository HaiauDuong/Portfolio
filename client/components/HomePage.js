import React, {Component} from 'React'
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Resume from './Resume'
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

export default class HomePage extends Component {
  render() {
    return (
        <div>


<div id='header'>
<Header/>
</div>


<div id='about'>
    <AboutMe />
</div>




  <div id='skills'>
    <Skills />
    </div>




<div id='resume'>
    <Resume />
</div>




<div id='education'> 
    <Education />
</div>


        <hr class='hr'/>



  <div id='projects'>
        <Projects />
        </div>



 <div id='contact'>
        <Contact />
 </div>



  <div class="footer">
    <div class="container">
      <div class="footer-folat">
      <span class="he">Copyright &copy; 2017 Restom</span>
      <ul>
        <li><a href="https://www.linkedin.com/in/youssef-restom-83491621"><i class="fa fa-fw fa-linkedin"></i></a></li>
        <li><a href="https://github.com/yrestom"><i class="fa fa-fw fa-github"></i></a></li>
        <li><a href="https://twitter.com/yousefrestom"><i class="fa fa-fw fa-twitter"></i></a></li>
        <li><a href="mailto:youssef.restom@gmail.com" title="My E-mail"><i class="fa fa-fw fa-envelope"></i></a></li>
      </ul>
      </div>
<div class="footer-float">
      <div class="bigThink">
        <h4 class="he">Big thanks to</h4>
        <a href="http://elzero.org/">Elzero Web School</a>
      </div>
      </div>
    </div>
  </div>



        </div>
    )
  }
}
