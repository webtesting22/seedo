import React, { useEffect } from "react";
import SeedoCertification from "../Certification/SeedoCertification";
import Client from "../Clients/Clients";
import { Link } from "react-router-dom";
import ClientPageBanner from "../../../../public/ClientPageBanner.webp"
import Navigation from "../../CommonComponents/Navigation/Navigation";
const CertificationAndClient = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div id="AboutUs">
                <Navigation />
            </div>
            <section id="CertificationAndClient">
                <div className="BannerContainer">
                    {/* <div className="overlayContainer">

                        </div> */}
                    <img src={ClientPageBanner} alt="" />
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