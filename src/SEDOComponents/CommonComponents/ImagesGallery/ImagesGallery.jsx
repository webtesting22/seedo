import React from "react";
import { Row, Col } from "antd";
import "./ImagesGallery.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ImagesGallery = () => {
    const ImagesGalleryData = [
        "/Images/ProductsImages/Friction and pull back products/FLG-DS-PO12(2).png",
        "/Images/ProductsImages/Friction and pull back products/FLG-DS-PO12(2).png",
        "/Images/ProductsImages/Friction and pull back products/FLG-DS-PO12(2).png",
        "/Images/ProductsImages/Friction and pull back products/FLG-DS-PO12(2).png",
        "/Images/ProductsImages/Friction and pull back products/FLG-DS-PO12(2).png",
        "/Images/ProductsImages/Friction and pull back products/FLG-DS-PO12(2).png"
    ]
    return (
        <>
            <section className="ImageGalleryContainer">
                <div>
                    <p style={{ marginBottom: "0px", textAlign: "center" }}>@SEEDOToys</p>
                    <h2 style={{ marginTop: "0px", textAlign: "center" }}>We're on Instagram!</h2>
                </div>
                <br />
                <div className="ImagesContainer">
                    <Row>
                        {ImagesGalleryData.map((item, index) => (
                            <Col lg={4} md={6} key={index}>
                                <div className="GalleryCardImage">
                                    <img src={item} alt={`Gallery Image ${index + 1}`} />
                                </div>
                            </Col>
                        ))}

                    </Row>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className="InsideContainer">
                        <Link to="https://www.instagram.com/seedotoys/" target="_blank"><button><FaArrowRightLong /></button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ImagesGallery