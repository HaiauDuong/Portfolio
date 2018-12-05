import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return(
            <div class="header">
            <div class="slider">
              <div class="container">
                <div class="intro">
                  <h2>Welcome to HaiauDuong.com</h2>
                  <button class="my-button" type="button" name="button"> Learn More</button>
                </div>
              </div>
            </div>
            <div class="navbar">
              <div class="container">
                <h2>Haiau<span>Duong</span></h2>
                <ul>
                  <li class="active"><a href="Home">Home</a></li>
                  <li><a href="About">About</a></li>
                  <li><a href="Skills">Skills</a></li>
                  <li><a href="Resume">Resume</a></li>
                  <li><a href="Projects">Projects</a></li>
                  <li><a href="ContactMe">Contact Me</a></li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}