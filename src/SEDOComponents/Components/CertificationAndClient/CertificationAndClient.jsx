import React from "react";
import SeedoCertification from "../Certification/SeedoCertification";
import Client from "../Clients/Clients";
import { Link } from "react-router-dom";
const CertificationAndClient = () => {
    return (
        <>
            <section id="CertificationAndClient">
                <div className="BannerContainer">
                    {/* <div className="overlayContainer">

                        </div> */}
                    <img src="https://images.unsplash.com/photo-1604882846805-a6813013c2b5?q=80&w=2937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div style={{ padding: "20px" }}>
                    <span>
                        <Link to="/" className="breadcrumb-link" style={{ color: "black" }}>Home</Link> &gt;{" "}
                        <Link to="/certification-and-client" className="breadcrumb-link" style={{ color: "black" }}>Certification and Client</Link>
                    </span>
                </div>
                <SeedoCertification />
                <Client />
            </section>
        </>
    )
}
export default CertificationAndClient