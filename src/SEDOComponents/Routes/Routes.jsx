import React from "react";
import { Routes, Route } from "react-router-dom";
import MegaNavigation from "../Components/MegaNavigation/MegaNavigation";
import ScrollingVideoScreen from "../CommonComponents/ScrollingVideoScreen/ScrollingVideoScreen";
import HomeRoutes from "../Components/HomePageComponent/HomeRoutes";
import Products from "../Components/ProductShow/Product";
const SEDORoutes = () => {
    return (
        <>
            {/* <MegaNavigation/> */}
            <Routes>
                <Route path="/" element={<HomeRoutes />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </>
    )
}
export default SEDORoutes