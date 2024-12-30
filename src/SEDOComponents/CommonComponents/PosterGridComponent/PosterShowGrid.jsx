import React from "react";
import "./PosterShowGrid.css"
import { Row, Col } from "antd";
const PosterShowGrid = () => {
    return (
        <>
            <section id="PosterShowGridContainer">
                <div className="BannerShowInsideContainer">
                    <Row>
                        <Col lg={12}>
                            <div className="BannerContainerCommon">
                                <div className="ImageContainer">
                                    
                                </div>
                                <div className="WritupContainer">

                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="BannerContainerCommon">
                                <div className="WritupContainer">

                                </div>
                                <div className="ImageContainer">

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default PosterShowGrid