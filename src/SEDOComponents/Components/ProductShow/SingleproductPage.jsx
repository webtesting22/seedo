import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../CommonComponents/Navigation/Navigation"; // Adjust if you have a Navigation component
import { Row, Col } from "antd";
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

    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>
            <section className="SubCategoryProductsContainer">
                <div className="SubcategoryHeader">
                    {/* Show subcategory name if available; otherwise, show main category name */}
                    <h1>{subcategoryName || categoryName} Products</h1>
                </div>
                <div className="CatalogueCardsContainer">
                    <Row>
                        {products &&
                            products.map((product, index) => (
                                <Col key={index} lg={8} md={12} style={{ width: "100%" }}>
                                    <Link to={`/singleproduct/${categoryName}/${product.id}`}>
                                        <div className="CatalogueCardContainer">
                                            <div className="CatalogueImageContainer">
                                                {/* Check if ProductImage exists and is not empty */}
                                                {product.ProductImage && product.ProductImage.length > 1 ? (
                                                    // Display the image at index 1
                                                    <img src={product.ProductImage[1]} alt={`${product.ProductTitle}-1`} />
                                                ) : product.ProductImage && product.ProductImage.length > 0 ? (
                                                    // If there's only one image, display the first one
                                                    <img src={product.ProductImage[0]} alt={`${product.ProductTitle}-0`} />
                                                ) : (
                                                    // If no images, display a default image
                                                    <img src="path/to/default-image.jpg" alt="Default Image" />
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
                            ))}
                    </Row>
                </div>
            </section>
        </>
    );
};

export default SubcategoriesProducts;
