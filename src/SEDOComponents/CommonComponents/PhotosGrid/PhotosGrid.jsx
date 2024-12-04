import React from "react";
import "../../Styles/PhotoGrid.css"
const PhotosGrid = () => {
    return (
        <>
            <section id="PhotosGrid">
                <div className="GridContainer">
                <div className="BigPhoto">
                    <img src="https://images.unsplash.com/photo-1613536491198-a0afa1916b3b?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="SmallPhotoContainer">
                    <div>
                        <img src="https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="CombinePhotoContainer">
                        <img src="https://plus.unsplash.com/premium_photo-1666533246605-2a75dc051e30?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default PhotosGrid