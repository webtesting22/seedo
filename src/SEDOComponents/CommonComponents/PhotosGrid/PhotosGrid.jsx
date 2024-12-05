import React from "react";
import "../../Styles/PhotoGrid.css"
import SeedoAboutUsGrid from "../../../../public/SeedoAboutUsGrid.jpg"
import GridImage2 from "../../../../public/GridImage2.avif"
import AboutUsGrid3 from "../../../../public/AboutUsGrid3.avif"
const PhotosGrid = () => {
    return (
        <>
            <section id="PhotosGrid">
                <div className="GridContainer">
                    <div className="BigPhoto">
                        <img data-aos="fade-up"
                            data-aos-duration="800" src={GridImage2} alt="" />
                    </div>
                    <div className="SmallPhotoContainer">
                        <div data-aos="fade-up"
                            data-aos-duration="1000">
                            <img src={AboutUsGrid3} alt="" />
                        </div >
                        <div data-aos="fade-up"
                            data-aos-duration="1300" className="CombinePhotoContainer">
                            <img src={SeedoAboutUsGrid} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PhotosGrid