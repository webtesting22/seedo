import React,{useEffect} from "react";
import Navigation from "../Navigation/Navigation";
import "./SubCategories.css"
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const SubCategories = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, []);
    return (
        <>
            <Navigation />
            <section className="SubCategoryContainer">
                <div className="SubcategoryHeader">
                    <h1>SubCategories Page</h1>
                </div>
                <div className="CatalogueCardsContainer">
                    <Row>
                        <Col lg={12} md={24} style={{ width: "100%" }}>
                            <Link to="/product-name">
                                <div className="CatalogueCardContainer">
                                    <div className="CatalogueImageContainer">

                                    </div>
                                    <div className="productTitleContainer">
                                        <h1>Product Name</h1>
                                        <p>SubCategory</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>

                            <Link to="/product-name">
                                <div className="CatalogueCardContainer">
                                    <div className="CatalogueImageContainer">

                                    </div>
                                    <div className="productTitleContainer">
                                        <h1>Product Name</h1>
                                        <p>SubCategory</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>

                            <Link to="/product-name">
                                <div className="CatalogueCardContainer">
                                    <div className="CatalogueImageContainer">

                                    </div>
                                    <div className="productTitleContainer">
                                        <h1>Product Name</h1>
                                        <p>SubCategory</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>

                            <Link to="/product-name">
                                <div className="CatalogueCardContainer">
                                    <div className="CatalogueImageContainer">

                                    </div>
                                    <div className="productTitleContainer">
                                        <h1>Product Name</h1>
                                        <p>SubCategory</p>
                                    </div>
                                </div>
                            </Link>

                        </Col>
                        <Col lg={12} md={24} style={{ width: "100%" }}>

                            <Link to="/product-name">
                                <div className="CatalogueCardContainer">
                                    <div className="CatalogueImageContainer">

                                    </div>
                                    <div className="productTitleContainer">
                                        <h1>Product Name</h1>
                                        <p>SubCategory</p>
                                    </div>
                                </div>
                            </Link>

                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default SubCategories