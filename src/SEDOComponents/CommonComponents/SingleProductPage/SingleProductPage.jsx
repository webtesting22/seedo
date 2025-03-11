import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./SingleProductPage.css";
import { Row, Col, Image, Breadcrumb } from "antd";
import SeedoProductData from "../../ProductData";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { IoArrowDownOutline } from "react-icons/io5";
import { IoMdArrowUp } from "react-icons/io";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const SingleProductPage = () => {
    const { categoryName, productId } = useParams();
    const [mainImage, setMainImage] = useState(null);
    const [otherImages, setOtherImages] = useState([]);
    const [colorMap, setColorMap] = useState({});
    const location = useLocation();
    const swiperRef = useRef(null);
    // Retrieve the backgroundColor from state or use a fallback
    const backgroundColor = location.state?.backgroundColor || "defaultColor";

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

        // Generate a color map based on image names
        if (product?.ProductImage) {
            const map = {};
            product.ProductImage.forEach((img) => {
                const match = img.match(/\((.*?)\)/); // Extract color name from parentheses
                if (match && match[1]) {
                    map[match[1].toLowerCase()] = img; // Use color as key
                }
            });
            setColorMap(map);
        }
    }, [product]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [categoryName, productId]);

    if (!product) {
        return <div>Product not found!</div>;
    }

    // Handle clicking on an "other image" or color
    const handleImageClick = (clickedImage) => {
        setMainImage(clickedImage);
    };

    // Determine if the product is from a subcategory
    const productSubcategory = Object.keys(subcategories).find((subcategory) =>
        subcategories[subcategory].some((p) => String(p.id) === productId)
    );

    // Get products from the same subcategory (if applicable)
    const similarProducts = productSubcategory
        ? subcategories[productSubcategory] // Get products from the subcategory
        : mainCategoryProducts; // Get all products from the main category
    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>

            <section className="SingleProductPageContainer" style={{ overflow: "hidden" }}>
                <div className="SingleProductContainer">
                    {/* Breadcrumb Trail */}



                    <div className="ProductCard">
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>
                                <Link to="/">Home</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to="/products">Products</Link>
                            </Breadcrumb.Item>
                            {categoryData?.subcategories ? (
                                <Breadcrumb.Item>
                                    <Link to={`/subcategories/${categoryName}`}>
                                        {categoryName}
                                    </Link>
                                </Breadcrumb.Item>
                            ) : (
                                <Breadcrumb.Item>
                                    <Link to={`/subcategoriesproducts/${categoryName}`}>
                                        {categoryName}
                                    </Link>
                                </Breadcrumb.Item>
                            )}
                            {productSubcategory && (
                                <Breadcrumb.Item>
                                    <Link to={`/subcategories/${categoryName}/${productSubcategory}`}>
                                        {productSubcategory}
                                    </Link>
                                </Breadcrumb.Item>
                            )}
                            <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div>
                            <div className="ProductTitleContainer">
                                <h2>{product.name}</h2>
                                <p>
                                    <b>Item code: </b>
                                    {product.ProductStyleCode}
                                </p>
                            </div>
                        </div>
                        <Row>
                            <Col lg={24} style={{ width: "100%" }}>
                                <Row style={{ height: "100%" }}>

                                    <Col lg={20} style={{ width: "100%" }}>
                                        <div
                                            style={{ backgroundColor }}
                                            className="ProductImageContainer"
                                        >
                                            <div className="FeaturesIcons OnPCOnly" >
                                                {product.Features && product.Features.map((feature, index) => (
                                                    <img key={index} src={feature} alt={`Feature ${index + 1}`} />
                                                ))}
                                            </div>
                                            {mainImage ? (
                                                <img src={mainImage} alt={product.name} />
                                            ) : (
                                                <p>No image available</p>
                                            )}
                                        </div>
                                    </Col>

                                    <Col lg={4} className="OnPCOnly" style={{ width: "100%" }} >
                                        <button className="swiper-button prev" onClick={handlePrev}>
                                            <MdKeyboardArrowUp />
                                        </button>
                                        <div >
                                            <Swiper

                                                slidesPerView={4}
                                                spaceBetween={15}
                                                freeMode={true}
                                                direction={'vertical'}
                                                autoplay={{
                                                    delay: 2000,
                                                    disableOnInteraction: false,
                                                }}
                                                loop={true}
                                                modules={[Autoplay, FreeMode, Pagination]}
                                                className="mySwiper"
                                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                            >

                                                <div style={{ height: "590px", overflow: "auto" }}>
                                                    {otherImages.length > 0 ? (
                                                        otherImages.map((img, index) => (
                                                            <SwiperSlide>
                                                                <div
                                                                    key={index}
                                                                    className="OtherImageThumbnail"
                                                                    onClick={() => handleImageClick(img)}
                                                                    style={{ cursor: "pointer" }}
                                                                >
                                                                    <img src={img} alt={`Other image ${index + 1}`} />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))
                                                    ) : (
                                                        <p>Other images coming soon!</p>
                                                    )}
                                                </div>
                                            </Swiper>
                                        </div>
                                        <button className="swiper-button next" onClick={handleNext}>
                                            <MdKeyboardArrowDown />
                                        </button>
                                    </Col>
                                    <Col lg={4} className="OnMobileOnly" style={{ width: "100%" }} >
                                        <Swiper
                                            slidesPerView={3}
                                            spaceBetween={10}
                                            freeMode={true}
                                            loop={true}
                                            // direction={'vertical'}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: true,
                                            }}
                                            // pagination={{
                                            //     clickable: true,
                                            // }}
                                            // navigation={true}
                                            modules={[Autoplay, FreeMode, Pagination]}
                                            className="mySwiper"
                                        >

                                            <div >
                                                {otherImages.length > 0 ? (
                                                    otherImages.map((img, index) => (
                                                        <SwiperSlide>
                                                            <div
                                                                key={index}
                                                                className="OtherImageThumbnail"
                                                                onClick={() => handleImageClick(img)}
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                <img src={img} alt={`Other image ${index + 1}`} />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                ) : (
                                                    <p>Other images coming soon!</p>
                                                )}
                                            </div>


                                        </Swiper>
                                    </Col>
                                </Row>
                            </Col>


                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="ProductTitle">

                                    <div className="SpecificationContainer">
                                        <div className="ColorsContainer">

                                            <div className="FeaturesIcons OnMobileOnly" >
                                                {product.Features && product.Features.map((feature, index) => (
                                                    <img key={index} src={feature} alt={`Feature ${index + 1}`} />
                                                ))}
                                            </div>
                                            <p style={{ fontSize: "22px", marginBottom: "10px" }}><b>Colours</b></p>
                                            <div style={{ display: "flex", gap: "10px" }}>
                                                {Object.keys(colorMap).map((color, index) => (
                                                    <div
                                                        key={index}
                                                        className="ColorSwatch"
                                                        style={{
                                                            backgroundColor: color,
                                                            width: "30px",
                                                            height: "30px",
                                                            borderRadius: "50%",
                                                            cursor: "pointer",
                                                            border: colorMap[color] === mainImage ? "1px solid #00000061" : "1px solid #00000054",
                                                        }}
                                                        onClick={() => handleImageClick(colorMap[color])}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                        <br />
                                        {/* <hr /> */}
                                        <div className="productSpecificatinContainer">
                                            <p style={{ fontSize: "22px" }}><b>Specification</b></p>

                                            <div className="ProductFeaturesList">
                                                {product.Productdescription}
                                            </div>
                                        </div>
                                        <br />
                                        <div className="MRPButtonsContainer">
                                            <div>
                                                <button style={{ fontSize: "18px" }}>
                                                    <b>MRP</b> <br />
                                                    <span>{product.Price}</span>
                                                </button>
                                                {product.Quantity && (
                                                    <button style={{ fontSize: "18px" }}>
                                                        <b>Box Quantity</b>
                                                        <br />
                                                        <span style={{ display: "flex", flexDirection: "column" }}>{product.Quantity}</span>
                                                    </button>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div>
                                    <div className="DiscriptionGraphicsImage">
                                        <img src="/Images/SingleProductPageGraphic.png" alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/* Similar products section */}
                <div className="SIMILARPRODUCTSContainer">
                    <div className="SectionHeadingContainer">
                        <h1 className="titleFont">
                            Similar Products
                            {/* of {categoryName}
                            {productSubcategory ? ` (${productSubcategory})` : ""} */}
                        </h1>
                    </div>
                    <Row gutter={[16, 16]}>
                        {similarProducts.map((prod, index) => {


                            const colors = [
                                "rgba(9, 177, 171, 0.25)",
                                "rgba(241, 142, 170, 0.23)",
                                "rgba(173, 133, 179, 0.22)",
                                "rgba(80, 173, 105, 0.24)",
                                "rgba(9, 177, 171, 0.25)"
                            ];

                            // Get the background color using the current index
                            const backgroundColor = colors[index % colors.length];

                            return (
                                <Col key={prod.id} lg={6} md={12} sm={24} style={{ width: "100%" }}>
                                    <div className="SimilarProductCard" style={{ backgroundColor }}>
                                        <Link
                                            to={`/singleproduct/${categoryName}/${prod.id}`}
                                            className="ProductLink"
                                        >
                                            <div className="ImageContainer">
                                                <img
                                                    src={
                                                        prod.ProductImage?.[0] || "path/to/placeholder.jpg"
                                                    }
                                                    alt={prod.name}
                                                />

                                            </div>
                                            <h3 style={{ color: "black", textAlign: "center" }}>{prod.name}</h3>
                                        </Link>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
                <br /><br />

            </section>
        </>
    );
};

export default SingleProductPage;
