import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import styled from 'styled-components';

function ServiceSection() {
    return (
        <>
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 service-1">
                            <TbTruckDelivery className="services-icon" />
                            <h3>Super Fast Free Delivery</h3>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 service-2">
                            <div className="service-4">
                                <MdSecurity className="services-icon me-1" />
                                <h3>Money-Back Guaranteed</h3>
                            </div>
                            <div className="service-5">
                                <GiReceiveMoney className="services-icon me-1" />
                                <h3>Non-Contact Shiping</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 service-3">
                            <RiSecurePaymentLine className="services-icon" />
                            <h3>Super Secure Payment System</h3>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
.row{
    justify-content: center;
    flex-wrap: wrap;
}
       .service-1, .service-3{
         height: 200px;
         width: 300px;
         border-radius: 5px;
         background: white;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         margin: 30px;
      }
      .service-2{
        height: 200px;
        width: 300px;
         border-radius: 5px;
         background: transparent;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;  
        margin: 30px;

      }
      .service-4{
        height: 95px;
        width: 300px;
         border-radius: 5px;
         background: white;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: row;
         margin-bottom: 10px;
      }
      .service-5{
        height: 95px;
        width: 300px;
         border-radius: 5px;
         background: white;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: row;
      }
      .services-icon{
        font-size: 50px;
        color: #32f0f0;
      }
      h3{
        font-size: 18px;
        font-weight: 300;
        color: gray;
      }
`;

export default ServiceSection
