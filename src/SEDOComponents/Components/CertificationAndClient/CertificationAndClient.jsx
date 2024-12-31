import React, { useEffect } from "react";
import SeedoCertification from "../Certification/SeedoCertification";
import Client from "../Clients/Clients";
import { Link } from "react-router-dom";
import ClientPageBanner from "/ClientPageBanner.webp"
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
               
                <SeedoCertification />
                <Client />
            </section>
        </>
    )
}
export default CertificationAndClient