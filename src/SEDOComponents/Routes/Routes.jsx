import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeRoutes from "../Components/HomePageComponent/HomeRoutes";
import Products from "../Components/ProductShow/Product";
import AboutSeedo from "../Components/AboutSEDO/AboutSeedo";
import Footer from "../CommonComponents/Footer/Footer";
import CertificationAndClient from "../Components/CertificationAndClient/CertificationAndClient";
import Contact from "../CommonComponents/ContactUs/Contact";
import SingleProductPage from "../CommonComponents/SingleProductPage/SingleProductPage";
import SubCategories from "../CommonComponents/SubCategories/SubCategories";
import OurServices from "../Components/OurServices/OurServices";
import SubcategoriesProducts from "../Components/ProductShow/SingleproductPage";
import Client from "../Components/Clients/Clients";
const SEDORoutes = () => {
    return (
        <>

            {/* <MegaNavigation /> */}
            {/* <Navigation/> */}
            <Routes>
                <Route path="/" element={<HomeRoutes />} />
                <Route path="/products" element={<Products />} />
                <Route path="/aboutSeedo" element={<AboutSeedo />} />
                <Route path="/certification" element={<CertificationAndClient />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singleproduct/:categoryName/:productId" element={<SingleProductPage />} />
                <Route path="/subcategories/:categoryName" element={<SubCategories />} />
                <Route path="/subcategories/:categoryName/:subcategoryName" element={<SubcategoriesProducts />} />
                <Route path="/subcategoriesproducts/:categoryName" element={<SubcategoriesProducts />} />
                <Route path="/ourofferings" element={<OurServices />} />
                <Route path="/client" element={<Client />} />
            </Routes>
            <Footer />
        </>
    )
}
export default SEDORoutes