import React from "react";
import "./ImageStickyContainer.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ImageSticky = () => {
    return (
        <>
            <section id="ImageStickyContainer">
                <div className="headingHeaderContainer">
                    <h1>We have hold on more then ON  +3000 stores in india</h1>
                </div>
                <div className="WhyUsContainer">
                    <h2>why us?</h2>
                    <p>Primary CTA</p>
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