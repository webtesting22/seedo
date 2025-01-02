import React from "react";
import Navigation from "../Navigation/Navigation";
import "./SingleProductPage.css"
import { Row, Col, Input } from "antd";
import { IoStarSharp } from "react-icons/io5";

const SingleProductPage = () => {
    return (
        <>
            <Navigation />
            <section className="SingleProductPageContainer">
                <div className="TopBannerContainer">
                    <h1>Single Product Page</h1>
                </div>
                <div className="SingelProductPageContainerLayout">
                    <Row>
                        <Col lg={12} md={24}>
                            <div className="ProductImagesContainer">
                                <div className="ProductOtherImageContainer">
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>

                                </div>
                                <div className="ProductMainImageContainer">
                                    <h1>IMAGE</h1>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={24} >
                            <div className="ProductSpecificationDetailsContainer">
                                <h1>Name of the product</h1>
                                <h2>ITEM CODE:   </h2>
                                <p>DISCRIPTION OF THE PRODUCT</p>
                                <div className="ButtonContainerProduct">
                                    <button>MRP</button>
                                    <button>QUANTITY</button>
                                </div>
                                <div className="ColorVariationContainer">
                                    <h3>COLOUR VARIATIONS</h3>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>

                                    </ul>
                                </div>
                                <br />
                                <div className="SpecificationContainer">
                                    <h2>Specification</h2>
                                    <p>Material Type Virgin grade, </p>
                                    <ul>
                                        <li>  High strength</li>
                                        <li>ABS Material</li>
                                        <li>Frequency 27 MHZ</li>
                                        <li>  USB Included No</li>
                                        <li> Scale 1:18</li>
                                        <li> Non rechargeable</li>
                                        <li>HSN C o d e 95030030</li>
                                        <li> Box Size 48 pcs./box</li>
                                    </ul>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="BuyNowContainer">
                    <div>
                        <h1>Buy now!</h1>
                    </div>
                    <div className="OptionsContainer">
                        <Row>
                            <Col lg={12} md={24} style={{ width: "100%" }}>
                                <div className="logosContainer">
                                    <div className="HeaderHeadingContainer">
                                        <h1>ONLINE</h1>

                                    </div>
                                    <div>
                                        <ul>
                                            <li>BRAND LOGO</li>
                                            <li>BRAND LOGO</li>
                                            <li>BRAND LOGO</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={24} style={{ width: "100%" }}>
                                <div className="logosContainer">
                                    <div className="HeaderHeadingContainer">
                                        <h1>OFFLINE STORE</h1>

                                    </div>
                                    <div>
                                        <ul>
                                            <li>BRAND LOGO</li>
                                            <li>BRAND LOGO</li>
                                            <li>BRAND LOGO</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="SIMILARPRODUCTSContainer">
                    <div className="HeaderContainer">
                        <h1>SIMILAR PRODUCTS </h1>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <div className="OverflowContainerStyle">
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>

                        </div>
                    </div>
                    <br /><br />
                    <div style={{ overflow: "hidden" }}>
                        <div className="OverflowContainerStyle" style={{ marginLeft: "0px" }}>
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>
                            <div className="OverlaygreyBox">

                            </div>

                        </div>
                    </div>
                </div>
                <div className="ReviewContainer">
                    <div className="HeaderContainer">
                        <h1>Review</h1>
                    </div>
                    <div className="ReviewCardContainer">
                        <Row>
                            <Col lg={6} md={12}>
                                <div className="reviewLeftSidephotoContainer">
                                    <div>

                                    </div>
                                </div>
                            </Col>
                            <Col lg={18} md={12}>
                                <div className="MassageContainer">
                                    <div>
                                    <h2>Feedback</h2>
                                    <div>
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    <IoStarSharp />

                                    </div>
                                    <br />
                                    <Input type="text" value="like the product so much !!"/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col lg={6} md={12}>
                                <div className="reviewLeftSidephotoContainer">
                                    <div>

                                    </div>
                                </div>
                            </Col>
                            <Col lg={18} md={12}>
                                <div className="MassageContainer">
                                    <div>
                                    <h2>Feedback</h2>
                                    <div>
                                    <IoStarSharp />
                                    <IoStarSharp />

                                    </div>
                                    <br />
                                    <Input type="text" value="like the product so much !!"/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SingleProductPage