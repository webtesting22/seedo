import React from "react";
import { Routes, Route } from "react-router-dom";
import MegaNavigation from "../Components/MegaNavigation/MegaNavigation";
import ScrollingVideoScreen from "../CommonComponents/ScrollingVideoScreen/ScrollingVideoScreen";
import HomeRoutes from "../Components/HomePageComponent/HomeRoutes";
import Products from "../Components/ProductShow/Product";
import AboutSeedo from "../Components/AboutSEDO/AboutSeedo";
import Footer from "../CommonComponents/Footer/Footer";
import Navigation from "../CommonComponents/Navigation/Navigation";
import CertificationAndClient from "../Components/CertificationAndClient/CertificationAndClient";

const SEDORoutes = () => {
    return (
        <>

            {/* <MegaNavigation/> */}
            <Routes>
                <Route path="/" element={<HomeRoutes />} />
                <Route path="/products" element={<Products />} />
                <Route path="/aboutSeedo" element={<AboutSeedo />} />
                <Route path="/certification-and-client" element={<CertificationAndClient />} />
            </Routes>
            <Footer />
        </>
    )
}
export default SEDORoutes