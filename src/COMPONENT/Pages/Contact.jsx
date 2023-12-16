import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <>
      <Wrapper>
        <h2>Contact Page</h2>
        <div class="elementor-custom-embed d-flex justify-content-center align-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9595212490544!2d81.62502691325389!3d26.230504768851418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a57f3a4dab3fb%3A0x5afcabfb1bd76304!2zQmFiYSBNYWluYSBTaGFoLCDgpKzgpL7gpKzgpL4g4KSu4KWI4KSo4KS-IOCktuCkvuCkuQ!5e0!3m2!1sen!2sin!4v1683725162490!5m2!1sen!2sin"
            width="100%"
            height="400" 
            style={{border: "1px solid gray"}}
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="container  my-4">
          <div className="container">
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name..." />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Comment Here</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="button_div">
                <NavLink to="/"><button class="btn btn-outline-primary">Send me</button></NavLink>
              </div>
            </form>
          </div>
        </div>

      </Wrapper>
    </>
  )
};
const Wrapper = styled.section`
     .button_div{
      text-align: center;
      margin: 15px 0;
     }
     h2{
      text-align: center;
      font-size: 40px;
      font-weight: 700;
      color: gray;
     }
 `;

export default Contact
