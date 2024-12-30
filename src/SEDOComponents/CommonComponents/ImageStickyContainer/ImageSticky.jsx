import React from "react";
import "./ImageStickyContainer.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ImageSticky = () => {
    return (
        <>
            <section id="ImageStickyContainer">
                <div className="BlackOverlayContainer">

                </div>
                <div className="WriteUpRelatedCompany">
                    <div>
                        <p style={{ margin: "0px" }}>About The Shop</p>
                        <h2 style={{ marginTop: "0px" }}>Watch Our Story</h2>
                        <p>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>
                        <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
                        <Link to="/aboutSeedo"><button><FaArrowRightLong/></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ImageSticky