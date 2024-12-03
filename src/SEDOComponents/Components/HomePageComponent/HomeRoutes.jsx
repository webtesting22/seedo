import React from "react";
import ScrollingVideoScreen from "../../CommonComponents/ScrollingVideoScreen/ScrollingVideoScreen";
import HomePage from "../HomePage/HomePage";
import ZoomCards from "../../CommonComponents/ZoomCards/ZoomCards";
import AnimatedCar from "../../CommonComponents/AnimatedCard/AnimatedCar";

const HomeRoutes = () => {
    return (
        <>
            <section id="HomeComponentsContainer">
                <HomePage />
                <ScrollingVideoScreen />
                <ZoomCards />
                <AnimatedCar />
            </section>
        </>
    )
}
export default HomeRoutes