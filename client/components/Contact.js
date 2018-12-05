import React, {Component} from 'React'

export default class Contact extends Component {
    render() {
        return (
            <div class="contact-me">
            <div class="container">
              <div class="info">
                <h2>Contact Me</h2>
                <p class="paragrph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit. </p>
                <address class="paragrph">
                  East Hampton <br/>
                  New York <br/>
                  11937 <br/>
                </address>
                <p class="paragrph">
                  <strong>Email:</strong> Duong.H.PGD@gmail.com <br/>
                  <strong>Phone:</strong> +1(631)879-1734
                </p>
              </div>
              <form class="form">
                <label>Name *</label>
                <input type="text" name="Name" value="Your Name"/>
                <label>Email Adress *</label>
                <input type="email" name="Email Adress" value="Your Email Adress"/>
                <label>Message *</label>
                <textarea name="Message" rows="10" cols="80">Your Message</textarea>
                <input type="submit" name="Contact Me" value="Contact Me"/>
              </form>
            </div>
          </div>
        )
    }
}