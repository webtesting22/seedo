import React from "react";
import "./ImageStickyContainer.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
const ImageSticky = () => {
    return (
        <>
            <section id="ImageStickyContainer">
               
                <div className="WhyUsContainer">
                    <h2>why us<span style={{color:"red"}}>?</span></h2>
                    <p>We are a company that is highly cautious about our claims, and we assure you that our services and products undergo thorough testing to eliminate any signs of carelessness on our part. We are developing an electronic product that is 100% safe for kids and of the highest quality. I am excited to share that we will soon be one of India's leading companies.</p>
                    {/* <p>Primary CTA</p> */}
                </div>

                {/* <div className="BlackOverlayContainer">

                </div>
                <div className="WriteUpRelatedCompany">
                    <div>
                        <p style={{ margin: "0px",color:"#F8D966" }}>About The SEEDO</p>
                        <h2 style={{ marginTop: "0px" }}>Watch Our Story</h2>
                        <p>Sanson is a leading innovator in consumer and trade promotions, trusted by major FMCG brands in India such as Unilever, Glaxò, Perfetti, Mondelez, Britannia, and more...</p>
                        <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
                        <Link to="/aboutSeedo"><button><FaArrowRightLong/></button></Link>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}
export default ImageSticky