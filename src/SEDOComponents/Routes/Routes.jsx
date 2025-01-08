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
import Contact from "../CommonComponents/ContactUs/Contact";
import SingleProductPage from "../CommonComponents/SingleProductPage/SingleProductPage";
import SubCategories from "../CommonComponents/SubCategories/SubCategories";
import OurServices from "../Components/OurServices/OurServices";
import SubcategoriesProducts from "../Components/ProductShow/SingleproductPage";
const SEDORoutes = () => {
    return (
        <>

            {/* <MegaNavigation /> */}
            {/* <Navigation/> */}
            <Routes>
                <Route path="/" element={<HomeRoutes />} />
                <Route path="/products" element={<Products />} />
                <Route path="/aboutSeedo" element={<AboutSeedo />} />
                <Route path="/certification-and-client" element={<CertificationAndClient />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product-name" element={<SingleProductPage />} />
                <Route path="/subcategories/:categoryName" element={<SubCategories />} />
                <Route path="/subcategories/:categoryName/:subcategoryName" element={<SubcategoriesProducts />} />
                <Route path="/subcategoriesproducts/:categoryName" element={<SubcategoriesProducts />} />
                <Route path="/ourservices" element={<OurServices />} />
            </Routes>
            <Footer />
        </>
    )
}
export default SEDORoutes