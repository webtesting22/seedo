import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../CommonComponents/Navigation/Navigation"; // Adjust if you have a Navigation component
import { Row, Col, Breadcrumb } from "antd";
import SeedoProductData from "../../ProductData";
import { Link } from "react-router-dom";
import Ourproducts from "./Ourproducts.png";

const SubcategoriesProducts = () => {
    const { categoryName, subcategoryName } = useParams();
    const categoryData = SeedoProductData[categoryName];

    // If there's no subcategory, directly get the products for the category
    const products = subcategoryName
        ? categoryData?.subcategories[subcategoryName]
        : categoryData?.products;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    const colors = [
        "rgba(9, 177, 171, 0.25)",
        "rgba(241, 142, 170, 0.23)",
        "rgba(173, 133, 179, 0.22)",
        "rgba(80, 173, 105, 0.24)",
        "rgba(9, 177, 171, 0.25)"
    ];
    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>
            <section className="SubCategoryProductsContainer">

                {/* <div className="SubcategoryHeader">
                    Show subcategory name if available; otherwise, show main category name
                    <h1>{subcategoryName || categoryName}</h1>
                </div> */}
                <div className="SectionHeadingContainer">
                    <img
                        src={categoryData.subcategoryImage}
                        alt={categoryName}
                        style={{ maxWidth: "100%", height: "auto" }}
                        loading="lazy"
                    />
                    <img src={categoryData.MobilesubcategoryImage}
                        alt={categoryName}
                        style={{ maxWidth: "100%", height: "auto" }} loading="lazy" />
                </div>
                <div className="CatalogueCardsContainer">
                    <div style={{ margin: "16px 0", padding: "0 24px" }}>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to="/">Home</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to="/products">Products</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to={`/subcategories/${categoryName}`}>
                                    {categoryName}
                                </Link>
                            </Breadcrumb.Item>
                            {subcategoryName && (
                                <Breadcrumb.Item>
                                    <Link to={`/subcategoriesproducts/${categoryName}/${subcategoryName}`}>
                                        {subcategoryName}
                                    </Link>
                                </Breadcrumb.Item>
                            )}
                        </Breadcrumb>
                    </div>
                    <Row>
                        {products &&
                            products.map((product, index) => {
                                // Dynamically determine the background color
                                const backgroundColor = colors[index % colors.length];

                                return (
                                    <Col key={index} lg={8} md={12} style={{ width: "100%" }}>
                                        <Link to={{
                                            pathname: `/singleproduct/${categoryName}/${product.id}`,
                                            state: { backgroundColor },   // Pass the background color
                                        }}>
                                            <div className="CatalogueCardContainer" style={{ backgroundColor }}>
                                                <div className="CatalogueImageContainer" id="CatalogueImageContainer">
                                                    {/* Check if ProductImage exists and has more than 1 image */}
                                                    {product.ProductImage && product.ProductImage.length > 1 ? (
                                                        <>
                                                            {/* First image */}
                                                            <img
                                                                className="product-image"
                                                                src={product.ProductImage[0]} // First image by default
                                                                alt={`${product.ProductTitle}-0`}
                                                                loading="lazy"
                                                            />
                                                            {/* Second image for hover */}
                                                            <img
                                                                className="product-image-hover"
                                                                src={product.ProductImage[1]} // Second image on hover
                                                                alt={`${product.ProductTitle}-1`}
                                                                loading="lazy"
                                                            />
                                                        </>
                                                    ) : product.ProductImage && product.ProductImage.length > 0 ? (
                                                        <>
                                                            {/* // If only one image exists, show the first image */}
                                                            <img src={product.ProductImage[0]} className="product-image" alt={`${product.ProductTitle}-0`} loading="lazy"/>
                                                            <img src={product.ProductImage[0]} className="product-image-hover" alt={`${product.ProductTitle}-0`} loading="lazy"/>
                                                        </>
                                                    ) : (
                                                        // If no images, show a default image
                                                        <img src="path/to/default-image.jpg" alt="Default Image" loading="lazy"/>
                                                    )}
                                                </div>
                                                <div className="productTitleContainer">
                                                    <h1>{product.name}</h1>
                                                    <p>{product.description}</p>
                                                    {/* <p>Price: ${product.price}</p> */}
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                );
                            })}

                    </Row>
                </div>
            </section>
        </>
    );
};

export default SubcategoriesProducts;
