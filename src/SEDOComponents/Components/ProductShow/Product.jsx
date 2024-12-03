import React from "react";
import ProductPageBanner from "../../../../public/Images/Banners/CarsBanner.jpg"
import "../../Styles/Product.css"
import { Row, Col } from "antd";
import ProductData from "../../ProductData";
const Products = () => {
    return (
        <>
            <section id="ProductContainer">
                <div className="BannerContainer">
                    <img src={ProductPageBanner} alt="" />
                </div>
                <div id="ProductShowContainer">
                    <div>
                        <Row>
                            <Col lg={6}>
                                <div className="CategoriesFilters">
                                    <div className="SelectedFiltersName">

                                    </div>
                                    <div className="FilterCheckBox">

                                    </div>
                                    <div className="SearchBarContainer">

                                    </div>
                                </div>
                            </Col>
                            <Col lg={18}>
                                <div id="ProductCards">
                                    <div id="ProductsGrid">
                                        {ProductData.map((item, index) => (
                                            <div className="ProductCardDesign">
                                                <div>
                                                    <h2>{item.title}</h2>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Products