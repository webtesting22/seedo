import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./SingleProductPage.css";
import { Row, Col, Image } from "antd";
import SeedoProductData from "../../ProductData";

const SingleProductPage = () => {
    const { categoryName, productId } = useParams();
    const [mainImage, setMainImage] = useState(null);

    // Fetch the category data
    const categoryData = SeedoProductData[categoryName];
    const products = categoryData?.products || []; 

    // Search for the specific product
    const product =
        products.find((p) => String(p.id) === productId) ||
        Object.values(categoryData?.subcategories || {})
            .flat()
            .find((p) => String(p.id) === productId);

    useEffect(() => {
        if (product?.ProductImage && product.ProductImage.length > 0) {
            setMainImage(product.ProductImage[0]);
        }
    }, [product]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [categoryName, productId]);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>

            <section className="SingleProductPageContainer">
                <div className="SingleProductContainer">
                    <div className="ProductCard">
                        <Row>
                            <Col lg={12}>
                                <div className="ProductImageContainer">
                                    {mainImage ? (
                                        <Image src={mainImage} alt={product.name} />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="ProductTitle">
                                    <h2 style={{ margin: "0px" }}>{product.name}</h2>
                                    <p>
                                        <b>Item code: </b>
                                        {product.ProductStyleCode}
                                    </p>
                                    <br />
                                    <div className="SpecificationContainer">
                                        <p>
                                            <b>Specification:</b>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="BuyNowContainer">
                    <div>
                        <h1>Buy now!</h1>
                    </div>
                    <div className="OptionsContainer">
                        <Row>
                            <Col lg={12} md={24}>
                                <div className="logosContainer">
                                    <div className="HeaderHeadingContainer">
                                        <h1>Online Seedo</h1>
                                    </div>
                                    <ul>
                                        <li>BRAND LOGO</li>
                                        <li>BRAND LOGO</li>
                                        <li>BRAND LOGO</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={12} md={24}>
                                <div className="logosContainer">
                                    <div className="HeaderHeadingContainer">
                                        <h1>Offline Seedo</h1>
                                    </div>
                                    <ul>
                                        <li>BRAND LOGO</li>
                                        <li>BRAND LOGO</li>
                                        <li>BRAND LOGO</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/* Display only products of the current category */}
                <div className="SIMILARPRODUCTSContainer">
                    <div className="HeaderContainer">
                        <h1>Products in {categoryName}</h1>
                    </div>
                    <Row gutter={[16, 16]}>
                        {products.map((prod) => (
                            <Col key={prod.id} lg={6} md={12} sm={24}>
                                <div className="SimilarProductCard">
                                    <Link
                                        to={`/singleproduct/${categoryName}/${prod.id}`}
                                        className="ProductLink"
                                    >
                                        <div className="ImageContainer">
                                            <img
                                                src={
                                                    prod.ProductImage?.[0] ||
                                                    "path/to/placeholder.jpg"
                                                }
                                                alt={prod.name}
                                            />
                                        </div>
                                        <h3 style={{ color: "black" }}>{prod.name}</h3>
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <br />
            </section>
        </>
    );
};

export default SingleProductPage;
