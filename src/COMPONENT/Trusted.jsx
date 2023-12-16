import React from 'react'
import styled from 'styled-components'

function Trusted() {
    return (
        <>
            <Wrapper>
                <div className="trusted_container my-4">
                    <div className="container">
                        <h3>Trusted By 1000<sup>+</sup> Company</h3>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-2 trusted-img_div">
                                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" alt="img error" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-2 trusted-img_div">
                                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="img error" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-2 trusted-img_div">
                                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="img error" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-2 trusted-img_div">
                                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="img error" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-2 trusted-img_div">
                                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" alt="img error" />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    .trusted_container{
        background: white;
        padding: 20px 0;
    }
    .trusted_container h3{
        font-size: 25px;
        font-weight: 400;
        color: gray;
        text-align: center;
    }
      .row{
        justify-content: space-between;
      }
      .trusted-img_div{
        height: 80px;
        width: 150px;
      }
      .trusted-img_div img{
        width: 100%;
        cursor: pointer;
      }
`;

export default Trusted
