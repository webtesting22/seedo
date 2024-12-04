import React from "react";
import { Routes, Route } from "react-router-dom";
import MegaNavigation from "../Components/MegaNavigation/MegaNavigation";
import ScrollingVideoScreen from "../CommonComponents/ScrollingVideoScreen/ScrollingVideoScreen";
import HomeRoutes from "../Components/HomePageComponent/HomeRoutes";
import Products from "../Components/ProductShow/Product";
import AboutSeedo from "../Components/AboutSEDO/AboutSeedo";
const SEDORoutes = () => {
    return (
        <>
            {/* <MegaNavigation/> */}
            <Routes>
                <Route path="/" element={<HomeRoutes />} />
                <Route path="/products" element={<Products />} />
                <Route path="/aboutSeedo" element={<AboutSeedo />} />
            </Routes>
        </>
    )
}
export default SEDORoutes