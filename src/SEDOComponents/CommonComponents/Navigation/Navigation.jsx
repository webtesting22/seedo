import React from "react";
import NavigationLinks from "./NavigationLinks";
import "../../Styles/Navigation.css"
import SEEDoLogo from "../../../../public/SEEDOLogo.png"
import { Link } from "react-router-dom";
const Navigation = () => {

    return (
        <>
            <section id="NavigationContainer">
                <div className="ContainerNavigation">
                    <div>
                        <div className="NavigationLogo">
                           <Link to="/"> <img src={SEEDoLogo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="LinksNavigation">
                        {NavigationLinks.map((item, index) => (
                            <span key={index}>
                                <Link to={item.path}>{item.link}</Link>
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Navigation