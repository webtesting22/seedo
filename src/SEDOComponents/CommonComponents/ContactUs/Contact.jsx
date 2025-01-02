import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Contact.css"
import { Row,Col } from "antd";
const Contact = () => {
    return (
        <>

            <Navigation />

            <section className="ContactUsContainer">
                <div className="CertificationContainer">
                    <h1>CONTACT US</h1>
                </div>
                <div className="CertificationRowContainer">
                    <Row>
                        <Col lg={12}>
                            <div className="CertificationLeftContent">
                                <p>We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look forward to hearing from you!We offer these services, and we invite you to reach out for any inquiries. Please feel free to connect with us through the footer section or the "Contact Us" page. We look </p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="CertificationgrayBoxContainer">
                                <h1>graphic element </h1>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{minHeight:"600px"}}>

                </div>
            </section>
        </>
    )
}
export default Contact