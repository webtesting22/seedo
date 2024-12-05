import React, { useEffect } from "react";
import ScrollingVideoScreen from "../../CommonComponents/ScrollingVideoScreen/ScrollingVideoScreen";
import HomePage from "../HomePage/HomePage";
import ZoomCards from "../../CommonComponents/ZoomCards/ZoomCards";
import TwoSlideContainer from "../../CommonComponents/TwoSlideContainer/TwoSlideContainer";
import HomePageProducts from "../../CommonComponents/HomePageProducts/HomePageProducts";
import Marquee from "../../CommonComponents/Marqee/Marquee";
import Navigation from "../../CommonComponents/Navigation/Navigation";
const HomeRoutes = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
                <Navigation/>
            <section id="HomeComponentsContainer">
                <HomePage />
                <ScrollingVideoScreen />
                <ZoomCards />
                <TwoSlideContainer />
                {/* <Marquee/> */}
                {/* <HomePageProducts /> */}
                {/* <AnimatedCar /> */}
            </section>
        </>
    )
}
export default HomeRoutes