import styled from "styled-components";
import { useProductContext } from "../context/ProductContext"
import Product from "./Product";


function FeatureProduct() {
    const { isLoading, featureProducts } = useProductContext();
    if (isLoading) {
        return <div><h1 style={{ textAlign: "center" }}>Loading...</h1></div>
    }
    return (
        <Wrapper>
            <div className="container">
                <div className="intro-data">Check Now</div>
                <div className="common-heading"><h2>Our Feature Services</h2></div>
                <div className="row text-center">
                    {
                        featureProducts.map((curElem) => {
                            return <Product key={curElem.id} {...curElem} />
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
    
`;

export default FeatureProduct

