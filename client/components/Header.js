import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return(
            <div>
            <div class="header">
            <div class="slider">
              <div class="container">
                <div class="intro">
                  <h2>Welcome Bitch</h2>
                  <button class="my-button" type="button" name="button"> Learn More</button>
                </div>
              </div>
            </div>
            <div class="navbar">
              <div class="container">
                <h2>Haiau<span>Duong</span></h2>
                <ul>
                  <li class="active"><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#resume">Resume</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact Me</a></li>
                </ul>
              </div>
            </div>
          </div>
            <div class="features">
            <div class="container">
              <div class="feat">
                <h2>Values</h2>
                <p>Some of My Values </p>
              </div>
              <div class="feat">
                <h2>Goals</h2>
                <p>To become a full stack developer. </p>
              </div>
              <div class="feat">
                <h2>Hobbies</h2>
                <p>UI Design, Music, Art, and Electrical Engineering </p>
              </div>
            </div>
          </div>
          </div>
        )
    }
}