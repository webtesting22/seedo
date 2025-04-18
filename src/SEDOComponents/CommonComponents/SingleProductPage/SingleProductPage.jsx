import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./SingleProductPage.css";
import { Row, Col, Image, Breadcrumb } from "antd";
import SeedoProductData from "../../ProductData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const SingleProductPage = () => {
    const { categoryName, productId } = useParams();
    const [mainImage, setMainImage] = useState(null);
    const [otherImages, setOtherImages] = useState([]);
    const [colorMap, setColorMap] = useState({});
    const location = useLocation();
    const swiperRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
        if (!product?.ProductImage || product.ProductImage.length === 0) return;

        const firstMedia = product.ProductImage[0];

        // Generate a color map based on image names
        const map = {};
        product.ProductImage.forEach((img) => {
            if (typeof img === "string") {
                const match = img.match(/\((#?[a-zA-Z0-9]+)\)/); // Capture color names and hex codes
                if (match && match[1]) {
                    const colorKey = match[1].trim().toLowerCase(); // Trim spaces and normalize case
                    map[colorKey] = img; // Use extracted color as key
                }
            }
        });
        setColorMap(map);

        // Set main image (Check for video/image)
        if (typeof firstMedia === "string") {
            setMainImage(
                firstMedia.includes(".mp4")
                    ? { type: "video", url: firstMedia }
                    : { type: "image", url: firstMedia }
            );
        }

        // Set other images (excluding the first one)
        setOtherImages(product.ProductImage.slice(1));
    }, [product]);



    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [categoryName, productId]);

    if (!product) {
        return <div>Product not found!</div>;
    }

    // Handle clicking on an "other image" or color
    const handleImageClick = (clickedMedia) => {
        event.stopPropagation(); // ✅ Prevent Swiper from blocking clicks

        if (typeof clickedMedia === "string") {
            setMainImage(
                clickedMedia.includes(".mp4")
                    ? { type: "video", url: clickedMedia }
                    : { type: "image", url: clickedMedia }
            );
        }
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
                        <br />
                        <Row>
                            <Col lg={24} style={{ width: "100%" }}>
                                <Row style={{ height: "100%" }}>

                                    <Col lg={20} style={{ width: "100%" }}>
                                        <div
                                            style={{ backgroundColor }}
                                            className="ProductImageContainer"
                                        >
                                            {/* <div className="FeaturesIcons OnPCOnly">
                                                {product.Features && product.Features.map((feature, index) => (
                                                    <img key={index} src={feature} alt={`Feature ${index + 1}`} />
                                                ))}
                                            </div> */}
                                            {mainImage ? (
                                                mainImage.type === "video" ? (
                                                    <video src={mainImage.url} controls autoPlay style={{ width: "100%", borderRadius: "5px" }} />
                                                ) : (
                                                    <img src={mainImage.url} alt={product.name} loading="lazy"/>
                                                )
                                            ) : (
                                                <p>No media available</p>
                                            )}
                                            {/* {mainImage ? (
                                                <img src={mainImage} alt={product.name} />
                                            ) : (
                                                <p>No image available</p>
                                            )} */}
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
                                                direction={isMobile ? "horizontal" : "vertical"}
                                                // autoplay={{
                                                //     delay: 2000,
                                                //     disableOnInteraction: false,
                                                // }}
                                                breakpoints={{
                                                    0: { slidesPerView: 2 }, // ✅ 3 slides for mobile (up to 767px)
                                                    768: { slidesPerView: 4 }, // ✅ 4 slides for tablets & desktop
                                                }}
                                                loop={true}
                                                modules={[Autoplay, FreeMode, Pagination]}
                                                className="mySwiper"
                                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                            >
                                                <div style={{ height: "590px", overflow: "auto" }}>
                                                    {otherImages.length > 0 ? (
                                                        otherImages.map((media, index) => {
                                                            const mediaUrl = typeof media === "string" ? media : ""; // Ensure it's a string

                                                            return (
                                                                <SwiperSlide key={index}>
                                                                    <div
                                                                        className="OtherImageThumbnail"
                                                                        onClick={() => handleImageClick(mediaUrl)}
                                                                        style={{ cursor: "pointer" }}
                                                                    >
                                                                        {mediaUrl.includes(".mp4") ? ( // 🔥 Check if it's a video
                                                                            <video
                                                                                src={mediaUrl}
                                                                                controls
                                                                                muted
                                                                                style={{ width: "100%", borderRadius: "5px" }} // Adjust styles as needed
                                                                            />
                                                                        ) : (
                                                                            <img src={mediaUrl} alt={`Other media ${index + 1}`} loading="lazy"/>
                                                                        )}
                                                                    </div>
                                                                </SwiperSlide>
                                                            );
                                                        })
                                                    ) : (
                                                        <p>Other images/videos coming soon!</p>
                                                    )}
                                                </div>
                                            </Swiper>


                                        </div>
                                        <button className="swiper-button next" onClick={handleNext}>
                                            <MdKeyboardArrowDown />
                                        </button>
                                    </Col>
                                    {/* <Col lg={4} className="OnMobileOnly" style={{ width: "100%" }} >
                                        <Swiper
                                            slidesPerView={2}
                                            spaceBetween={10}
                                            freeMode={true}
                                            loop={true}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: true,
                                            }}
                                            modules={[Autoplay, FreeMode, Pagination]}
                                            className="mySwiper"
                                        >
                                            {otherImages.length > 0 ? (
                                                otherImages.map((media, index) => {
                                                    const mediaUrl = typeof media === "string" ? media : ""; // Ensure it's a string

                                                    return (
                                                        <SwiperSlide key={index}> 
                                                            <div
                                                                className="OtherImageThumbnail"
                                                                onClick={() => handleImageClick(mediaUrl)}
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                {mediaUrl.includes(".mp4") ? ( // ✅ Check for video
                                                                    <video
                                                                        src={mediaUrl}
                                                                        controls
                                                                        muted
                                                                        autoPlay
                                                                        style={{ width: "100%", borderRadius: "5px" }}
                                                                    />
                                                                ) : (
                                                                    <img src={mediaUrl} alt={`Other media ${index + 1}`} />
                                                                )}
                                                            </div>
                                                        </SwiperSlide>
                                                    );
                                                })
                                            ) : (
                                                <p>Other images coming soon!</p>
                                            )}
                                        </Swiper>
                                    </Col> */}
                                </Row>
                            </Col>


                        </Row>
                        <Row>
                            <Col lg={14}>
                                <div className="ProductTitle">

                                    <div className="SpecificationContainer">
                                        <div className="ColorsContainer">

                                            <div className="FeaturesIcons OnMobileOnly" >
                                                {product.Features && product.Features.map((feature, index) => (
                                                    <img key={index} src={feature} alt={`Feature ${index + 1}`} loading="lazy" />
                                                ))}
                                            </div>
                                            <p style={{ fontSize: "22px", marginBottom: "10px" }}><b>Colours</b></p>
                                            <div style={{ display: "flex", gap: "10px" }}>
                                                {/* If colorOptions exist, show both color swatches and images */}
                                                {product.colorOptions && product.colorOptions.length > 0 && (
                                                    product.colorOptions.map((color, index) => (
                                                        <div
                                                            key={`color-${index}`}
                                                            className="ColorSwatch"
                                                            style={{
                                                                backgroundColor: color,
                                                                width: "30px",
                                                                height: "30px",
                                                                borderRadius: "50%",
                                                                cursor: "pointer",
                                                                border: "1px solid #00000054",
                                                            }}
                                                        // onClick={() => handleImageClick(color)}
                                                        ></div>
                                                    ))
                                                )}

                                                {/* Always show image-based color swatches */}
                                                {Object.keys(colorMap).map((color, index) => (
                                                    <div
                                                        key={`image-${index}`}
                                                        className="ColorSwatch"
                                                        style={{
                                                            backgroundColor: color,
                                                            width: "30px",
                                                            height: "30px",
                                                            borderRadius: "50%",
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() => handleImageClick(colorMap[color])}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                        <br />
                                        {/* <hr /> */}
                                        <div className="productSpecificatinContainer">
                                            <p style={{ fontSize: "22px", marginBottom: "10px" }}><b>Specification</b></p>

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
                            <Col lg={10}>
                                <div>
                                    <div className="DiscriptionGraphicsImage">
                                        <img src="/Images/SingleProductPageGraphic.png" alt="" loading="lazy" />
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
                                    <div className="SimilarProductCard">
                                        <Link
                                            to={`/singleproduct/${categoryName}/${prod.id}`}
                                            className="ProductLink"
                                            style={{ background: prod.cardColor || backgroundColor }}
                                        >
                                            <div className="ImageContainer">
                                                <img
                                                    src={
                                                        prod.ProductImage?.[0] || "path/to/placeholder.jpg"
                                                    }
                                                    alt={prod.name}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Link>
                                        <h3 style={{ color: "black", textAlign: "start", width: "100%", paddingLeft: "50px", fontSize: "18px" }}>{prod.name}</h3>
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
