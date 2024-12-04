import React from "react";
import ScrollingVideoScreen from "../../CommonComponents/ScrollingVideoScreen/ScrollingVideoScreen";
import HomePage from "../HomePage/HomePage";
import ZoomCards from "../../CommonComponents/ZoomCards/ZoomCards";
import TwoSlideContainer from "../../CommonComponents/TwoSlideContainer/TwoSlideContainer";
import HomePageProducts from "../../CommonComponents/HomePageProducts/HomePageProducts";
import Marquee from "../../CommonComponents/Marqee/Marquee";

const HomeRoutes = () => {
    return (
        <>
            <section id="HomeComponentsContainer">
                <HomePage />
                <ScrollingVideoScreen />
                <ZoomCards />
                <TwoSlideContainer/>
                {/* <Marquee/> */}
                <HomePageProducts/>
                {/* <AnimatedCar /> */}
            </section>
        </>
    )
}
export default HomeRoutes