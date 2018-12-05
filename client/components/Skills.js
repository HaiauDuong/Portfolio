import React, {Component} from 'react'

export default class Skills extends Component {
    render () {
        return (
            <div class="my-skills">
    <div class="container">
      <div class="skills">
        <h2>My skills</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt Duis aute irure dolor in
          reprehenderit .</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .</p>
        <button type="button" class="my-button" name="button">Contact Me</button>
      </div>
      <div class="progress">
        <div class="technique">
          <h3>Html / CSS</h3>
          <div><span style={{width:'83%'}}>83% &nbsp;</span></div>
        </div>
        <div class="technique">
          <h3>Php / MySql</h3>
          <div><span style={{width:'88%'}}>88% &nbsp;</span></div>
        </div>
        <div class="technique">
          <h3>Wordpress</h3>
          <div><span style={{width:'75%'}}>75% &nbsp;</span></div>
        </div>
        <div class="technique">
          <h3>Graphic Design</h3>
          <div><span style={{width:'90%'}}>90% &nbsp;</span></div>
        </div>
      </div>
    </div>
  </div>
        )
    }
}