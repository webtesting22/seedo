import React from "react";
import "../../Styles/VisionMission.css"
import { Row, Col } from "antd";
const MissionVision = () => {
    return (
        <>
            <section id="MissionVisionComponent">
                <div className="SeedoLogoContainerImage">
                    <img src="/Images/SEEDOLogo.png" alt="" />
                </div>
                <br /><br />
                <div className="MainContainerVisionMission">

                    <Row>
                        <Col lg={8} md={12}>
                            <div >
                                <h2>Our Mission</h2>
                                <p>To deliver high-quality, safe, and
                                    innovative toys that inspire creativity
                                    and confidence in children and
                                    parents alike.</p>
                            </div>
                        </Col>
                       
                        <Col lg={8} md={12} >
                            <div >
                                <h2 style={{ color: "White" }}>Our Vision</h2>
                                <p style={{ color: "White" }}>To become a leading toy
                                    manufacturer globally, Seedo Toys
                                    aims to be recognized for excellence
                                    in product quality and innovation
                                    while integrating advance technology
                                    into its offerings.</p>
                            </div>
                        </Col>
                       
                        <Col lg={8} md={12}>
                            <div >
                                <h2>Our Purpose</h2>
                                <p>To foster children's imagination
                                    through engaging play experiences
                                    while ensuring parents' trust in our
                                    craftsmanship and commitment to
                                    safety.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )

}
export default MissionVision