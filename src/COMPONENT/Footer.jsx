import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";

function Footer() {
    const d = new Date();
    let Year = d.getFullYear();
    return (
        <>
            <Wrapper>
                <div className="footer_background">
                    <div className="div_center">
                        <div className="short-footer">
                            <div className="text_div">
                                <p>Ready to get started? <br /> Get to us today</p>
                            </div>
                            <div className="button_div">
                                <NavLink to = "/contact" className="btn btn-outline-primary fs-7">
                                    GET STARTED
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-sm-12 col-lg-3 col-md-3 col-12 footer_container">
                                <h3>Meer Technical</h3>
                                <p>Lorem ipsum dolor sit, amet  <br />consectetur adipisicing elit.</p>
                            </div>

                            <div className="col-sm-12 col-lg-3 col-md-3 col-12 footer_container">
                                <h3>Subcribe to get important
                                   <br /> updates
                                </h3>
                                <input type="text"  placeholder='join@gmail.com'/>
                               <div className="button_div"> 
                               <NavLink className="btn btn-primary fs-7">SUBCRIBE</NavLink>
                               </div>
                            </div>

                            <div className="col-sm-12 col-lg-3 col-md-3 col-12 footer_container">
                                <h3>Follow us</h3>
                                <IoLogoGameControllerB className="social_icon" />
                                <AiFillInstagram className="social_icon" />
                                <BsYoutube className="social_icon" />
                            </div>

                            <div className="col-sm-12 col-lg-3 col-md-3 col-12 footer_container">
                                <h3>Call us</h3>
                                <a href="tel: 9671824734">+91 9671824734</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='container'>
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 text-center fs-6 mb-2">
                            <span>@{ Year } MeerTechnical. All Right Reserved</span>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 text-center fs-6 mb-2">
                            PRIMACY POLICY TERMS & CONDITIONS
                        </div>
                    </div> 
                    </div>
                </div>
            </Wrapper>
        </>
    )
};

const Wrapper = styled.section`
.footer_background{
    background: #020252;
    color: white;
    position: relative;
    margin-top: 50px;
    padding-top: 50px;
}
    .div_center{
        color: gray;
        position: absolute; 
        top: -35px !important;
        left: calc(50% - 350px);
        z-index: 999;
    }
    .short-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        height: 70px;
        width: 700px;
        border-radius: 5px;
        padding: 0px 20px;
    }
    .text_div{
        height: 40px;
    }
    .text_div p{
        font-size: 15px;
        font-weight: 400;
    }
    .button_div .fs-7{
        font-size: 10px;
    }
    .footer_container h3{
        font-size: 15px;
        font-weight: 400;
    }
    .footer_container p{
        font-size: 10px;
        font-weight: 300;
    }
    .footer_container input{
        border: none;
        outline: none;
        padding: 0px 8px;
        margin-bottom: 20px;
        border-radius: 4px;
    }
    .footer_container .social_icon{
        border: 2px solid white;
        border-radius: 50%;
        padding: 5px;
        font-size: 30px;
        margin: 10px;
        cursor: pointer;
    }
    .footer_container a{
      text-decoration: none;
      list-style: none;
      color: white;
    }
`;

export default Footer
