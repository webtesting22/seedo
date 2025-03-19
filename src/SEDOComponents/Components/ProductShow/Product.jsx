import React, { useState, useEffect } from "react";
import { Row, Col, Checkbox, Button, Input, Drawer, Modal, Image, AutoComplete } from "antd"; // Import Modal
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../../Styles/Product.css";
import Navigation from "../../CommonComponents/Navigation/Navigation";
import SeedoProductData from "../../ProductData";
const { Search } = Input;

const Products = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state
    const [selectedProduct, setSelectedProduct] = useState(null); // Selected product
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    // const { toggleComponent } = ProductContext();


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    // 🔍 Extract all products from categories & subcategories
    const getAllProducts = () => {
        return Object.keys(SeedoProductData).flatMap((categoryName) => {
            const categoryData = SeedoProductData[categoryName];
            const subcategories = categoryData.subcategories || {};
            const products = categoryData.products || [];

            // Extract products from subcategories
            const subcategoryProducts = Object.entries(subcategories).flatMap(([subName, subProducts]) =>
                subProducts.map((product) => ({
                    ...product,
                    categoryName, // Store parent category
                    subcategoryName: subName, // Store subcategory
                }))
            );

            // Attach category name to products
            return [...products, ...subcategoryProducts].map((product) => ({
                ...product,
                categoryName, // Store category for navigation
            }));
        });
    };

    // 🔍 Handle search input
    const handleSearch = (value) => {
        setSearchQuery(value);

        if (!value) {
            setSearchResults([]); // Clear suggestions when input is empty
            return;
        }

        // ✅ Prevent errors for missing fields
        const filtered = getAllProducts().filter((product) =>
            product?.name?.toLowerCase().includes(value.toLowerCase()) ||
            (product?.categoryName?.toLowerCase() || "").includes(value.toLowerCase()) ||
            (product?.subcategoryName?.toLowerCase() || "").includes(value.toLowerCase())
        );

        // Store search results
        setSearchResults(filtered);
    };

    // 📌 Navigate to product page on selection
    const onSelectProduct = (product) => {
        navigate(`/singleproduct/${product.categoryName}/${product.id}`);
    };

    // const handleSearch = (value) => setSearchQuery(value);

    // const filteredProducts = SEEDOData.filter(item => {
    //     const matchesCategory = selectedCategories.length
    //         ? selectedCategories.includes(item.ProductCategories)
    //         : true;

    //     const matchesSearchQuery = searchQuery
    //         ? item.ProductTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         item.ProductCategories.toLowerCase().includes(searchQuery.toLowerCase())
    //         : true;

    //     return matchesCategory && matchesSearchQuery;
    // });

    const showDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);

    const openModal = (product) => {
        setSelectedProduct(product)
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    };

    // useEffect(() => {
    //     const categoryCount = Object.keys(SeedoProductData).length;

    //     let totalSubcategories = 0;
    //     let totalProducts = 0;

    //     Object.keys(SeedoProductData).forEach((categoryName) => {
    //         const categoryData = SeedoProductData[categoryName];
    //         const subcategories = categoryData.subcategories || {};

    //         totalSubcategories += Object.keys(subcategories).length;

    //         Object.keys(subcategories).forEach((subName) => {
    //             totalProducts += subcategories[subName].length; // Count products inside subcategories
    //         });

    //         if (categoryData.products) {
    //             totalProducts += categoryData.products.length; // Count direct products inside category
    //         }
    //     });

    //     console.log("Total Categories:", categoryCount);
    //     console.log("Total Subcategories:", totalSubcategories);
    //     console.log("Total Products:", totalProducts);
    //     // AOS.init(); // Initialize AOS
    //     window.scrollTo(0, 0);
    // }, []);
    // useEffect(() => {
    //     console.log("===== Category Breakdown =====");
    
    //     const categoryDetails = Object.keys(SeedoProductData).map((categoryName) => {
    //         const categoryData = SeedoProductData[categoryName];
    //         const subcategories = categoryData.subcategories || {};
            
    //         const subcategoryDetails = Object.keys(subcategories).map((subName) => {
    //             const productCount = subcategories[subName]?.length || 0;
    //             console.log(`  🔹 Subcategory: ${subName} - ${productCount} Products`);
    //             return { name: subName, productCount };
    //         });
    
    //         const totalCategoryProducts = categoryData.products ? categoryData.products.length : 0;
    //         const totalSubcategoryProducts = subcategoryDetails.reduce((sum, sub) => sum + sub.productCount, 0);
    //         const totalProducts = totalCategoryProducts + totalSubcategoryProducts;
    
    //         console.log(`🟢 Category: ${categoryName}`);
    //         console.log(`  🔸 Total Subcategories: ${Object.keys(subcategories).length}`);
    //         console.log(`  🔸 Total Products (Including Subcategories): ${totalProducts}`);
    
    //         return {
    //             categoryName,
    //             subcategories: subcategoryDetails,
    //             totalProducts,
    //         };
    //     });
    
    //     console.log("===== Summary =====");
    //     console.log(`Total Categories: ${categoryDetails.length}`);
    //     console.log(
    //         `Total Subcategories: ${categoryDetails.reduce((sum, cat) => sum + cat.subcategories.length, 0)}`
    //     );
    //     console.log(
    //         `Total Products: ${categoryDetails.reduce((sum, cat) => sum + cat.totalProducts, 0)}`
    //     );
    
    // }, []);
    
    // const staticProductCategories = ["Category1", "Category2", "Category3"]; // Define static categories
   
    return (
        <>
            <div className="AboutUs">
                <Navigation />
            </div>

            <section id="ProductContainer">
                {/* <div className="ProductHeaderContainer">
                    <img src={ProductPageBanner} alt="" />
                    <h1>We Create For You!</h1>
                </div> */}
                <div className="SectionHeadingContainer" style={{ paddingBottom: "0px" }}>
                    <img src="/Images/NewBanners/1.jpg" alt="" />
                    <img src="/Images/NewBanners/MobileBanners/1.jpg" alt="" />
                </div>

                <div className="CatalogueCardsContainer">
                    <div style={{ textAlign: "center", marginBottom: "10px" }} id="SearchBarComponent">
                        <AutoComplete
                            options={searchResults.map((product) => ({
                                value: product.name, // Display product name
                                label: (
                                    <div onClick={() => onSelectProduct(product)} style={{ cursor: "pointer" }}>
                                        {product.name} <small>({product.categoryName})</small>
                                    </div>
                                ),
                            }))}
                            onSearch={handleSearch}
                            placeholder="Search for products..."
                            allowClear

                        />
                    </div>

                    {/* 🔎 Display search results */}
                    {searchQuery && (
                        <div className="SearchResultsContainer">
                            {/* <h3>Search Results:</h3> */}
                            {filteredProducts.length > 0 ? (
                                <ul>
                                    {filteredProducts.map((product) => (
                                        <li
                                            key={product.ProductID}
                                            style={{ cursor: "pointer", padding: "10px", borderBottom: "1px solid #ddd" }}
                                            onClick={() => navigate(`/singleproduct/${product.categoryName}/${product.ProductID}`)}
                                        >
                                            {product.ProductTitle}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                ""
                                // <p>No products found</p>
                            )}
                        </div>
                    )}
                    <Row>
                        {Object.keys(SeedoProductData).map((categoryName, index) => {
                            const categoryData = SeedoProductData[categoryName];
                            const products = categoryData.products || [];
                            const hasSubcategories = categoryData.subcategories;

                            // Default to a placeholder image for the second image from subcategories
                            let subcategorySecondImage = "path/to/placeholder_image.jpg"; // Default placeholder for second image

                            // List of categories requiring subcategory logic
                            const categoriesRequiringSubcategoryLogic = ["Metal Die Cast Cars", "Remote Controlled Cars"];

                            // Check if the current category requires subcategory logic
                            if (categoriesRequiringSubcategoryLogic.includes(categoryName) && hasSubcategories) {
                                const firstSubcategoryKey = Object.keys(categoryData.subcategories)[0];
                                const firstSubcategory = categoryData.subcategories[firstSubcategoryKey];

                                // Ensure the first subcategory has products and an image to display
                                if (firstSubcategory?.[0]?.ProductImage?.[0]) {
                                    subcategorySecondImage = firstSubcategory[0].ProductImage[0]; // First image from the first product in subcategory
                                }
                            }

                            const colors = [
                                "rgba(9, 177, 171, 0.25)",
                                "rgba(241, 142, 170, 0.23)",
                                "rgba(173, 133, 179, 0.22)",
                                "rgba(80, 173, 105, 0.24)",
                                "rgba(9, 177, 171, 0.25)"
                            ];

                            // Get the background color for the current index
                            const backgroundColor = colors[index % colors.length];


                            return (
                                <Col key={index} lg={8} md={12} style={{ width: "100%" }}>
                                    {/* If subcategories exist, redirect to subcategories page; otherwise, to products page */}
                                    <Link to={hasSubcategories ? `/subcategories/${categoryName}` : `/subcategoriesproducts/${categoryName}`}>
                                        <div className="CatalogueCardContainer" style={{ backgroundColor }} >
                                            <div className="CatalogueImageContainer">

                                                <img
                                                    src={categoryData?.CategoriryImage || "path/to/placeholder_image.jpg"} // Use the category image
                                                    alt={`${categoryName} Category Image`} // Alt text for the image
                                                />
                                            </div>
                                            <div className="productTitleContainer">
                                                <h1>{categoryName}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            );
                        })}



                    </Row>
                </div>

            </section>

            {/* Modal for product info */}
            <Modal
                title={selectedProduct?.ProductTitle || "Product Info"}
                visible={isModalOpen}
                onCancel={closeModal}
                footer={null}
                width={800}
            >

                {selectedProduct && (
                    <div>
                        <div className="ModalImageContainer">
                            {selectedProduct.ProductImage.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`${selectedProduct.ProductTitle} - Image ${index + 1}`}
                                    style={{ width: "100%", maxWidth: "250px", height: "100%", objectFit: "cover" }}
                                />
                            ))}
                        </div>
                        <br />
                        <div className="ColoursContainer">
                            {selectedProduct.ProductColours}
                        </div>
                        {/* <br /> */}
                        <div>
                            {selectedProduct.ProductSpecs}
                        </div>
                        <p><strong>Category:</strong> {selectedProduct.ProductCategories}</p>
                        {/* <p><strong>Description:</strong> {selectedProduct.ProductDescription || "No description available."}</p> */}
                        <div>
                            <div>{selectedProduct.ModalInfo}</div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Products;
