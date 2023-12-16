import React from 'react'
import styled from 'styled-components'
import {NavLink } from 'react-router-dom'

function HeroSection(props) {
  return (
    <>
     <Wrapper>
       <div className='container'>
           <div className="row">
            <div className="col-md-6 col-12 col-lg-6">
                <div className="text_div">
                <span>Welcome to</span>
                <h2>{props.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, voluptate sapiente unde, nemo quas iste culpa amet odio sed rem facilis ad accusamus nulla architecto officia totam porro voluptatum quasi.</p>
                <button className='btn btn-outline-info'><NavLink className="home-link" to="/products">Shop Now</NavLink></button>
                </div>
            </div>
            <div className="col-md-6 col-12 col-lg-6 p-4 img_center">
                <figure>
                    <img src="images/hero.jpg" alt="hero img" />
                </figure>
            </div>
           </div>
       </div>
     </Wrapper>
    </>
  )
};

const Wrapper = styled.section`
.home-link{
    list-style: none;
    text-decoration: none;
    font-weight: 500;
}
.text_div{
    padding: 0px 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}
.text_div h2{
    /* color: #0000004b; */
    font-weight: 600;
}
.text_div span{
    font-size: 20px;
    font-weight: 400;
    color: gray;
}
.text_div p{
    font-size: 17px;
    font-weight: 350;
    color: #444444;
    
}
.img_center{
    display: flex;
    justify-content: center;
}
.img_center figure{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 432px;
}
figure{
    max-width: 400px;
    height: 360px;
}
figure img{
    width: 100%;
    box-shadow: 100px -100px 0px -50px #32f0f0;
}
.row{
    min-height: 300px;
    align-items: center;
}
`;

export default HeroSection
