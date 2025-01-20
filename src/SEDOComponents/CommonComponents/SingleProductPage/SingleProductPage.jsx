import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./SingleProductPage.css";
import { Row, Col, Image } from "antd";
import SeedoProductData from "../../ProductData";

const SingleProductPage = () => {
    const { categoryName, productId } = useParams();
    const [mainImage, setMainImage] = useState(null);
    const [otherImages, setOtherImages] = useState([]);

    // Fetch the category data
    const categoryData = SeedoProductData[categoryName];
    const mainCategoryProducts = categoryData?.products || [];
    const subcategories = categoryData?.subcategories || {};

    // Find the product
    const product =
        mainCategoryProducts.find((p) => String(p.id) === productId) ||
        Object.values(subcategories)
            .flat()
            .find((p) => String(p.id) === productId);

    useEffect(() => {
        if (product?.ProductImage && product.ProductImage.length > 0) {
            setMainImage(product.ProductImage[0]);
            setOtherImages(product.ProductImage.slice(1));
        }
    }, [product]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [categoryName, productId]);

    if (!product) {
        return <div>Product not found!</div>;
    }

    // Handle clicking on an "other image"
    const handleImageClick = (clickedImage) => {
        const updatedOtherImages = [mainImage, ...otherImages.filter((img) => img !== clickedImage)];
        setMainImage(clickedImage);
        setOtherImages(updatedOtherImages);
    };

    // Determine if the product is from a subcategory
    const productSubcategory = Object.keys(subcategories).find((subcategory) =>
        subcategories[subcategory].some((p) => String(p.id) === productId)
    );

    // Get products from the same subcategory (if applicable)
    const similarProducts = productSubcategory
        ? subcategories[productSubcategory] // Get products from the subcategory
        : mainCategoryProducts; // Get all products from the main category

    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>

            <section className="SingleProductPageContainer">
                <div className="SingleProductContainer">
                    <div className="ProductCard">
                        <Row>
                            <Col lg={18}>
                                <Row>

                                    <Col lg={6}>
                                        <div>
                                            {otherImages.length > 0 ? (
                                                otherImages.map((img, index) => (
                                                    <div
                                                        key={index}
                                                        className="OtherImageThumbnail"
                                                        onClick={() => handleImageClick(img)}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <img src={img} alt={`Other image ${index + 1}`} />
                                                    </div>
                                                ))
                                            ) : (
                                                <p>Other images coming soon!</p>
                                            )}
                                        </div>
                                    </Col>
                                    <Col lg={18}>
                                        <div className="ProductImageContainer">
                                            {mainImage ? (
                                                <Image src={mainImage} alt={product.name} />
                                            ) : (
                                                <p>No image available</p>
                                            )}
                                        </div>
                                    </Col>

                                </Row>
                            </Col>
                            <Col lg={6}>
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
                                        <div className="productSpecificatinContainer">
                                            {product.Productdescription}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/* Similar products section */}
                <div className="SIMILARPRODUCTSContainer">
                    <div className="HeaderContainer">
                        <h1>
                            Related Products of {categoryName}
                            {productSubcategory ? ` (${productSubcategory})` : ""}
                        </h1>
                    </div>
                    <Row gutter={[16, 16]}>
                        {similarProducts.map((prod) => (
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
                <br /><br />
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
            </section>
        </>
    );
};

export default SingleProductPage;
