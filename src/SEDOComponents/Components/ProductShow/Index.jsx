import React from "react";
import { ProductProvider } from "./Context/StateContext";

import MainProducts from "./MainProduct";

const ProductMain = () => {
    return (
        <ProductProvider>
            <MainProducts />
        </ProductProvider>
    );
};

export default ProductMain;
