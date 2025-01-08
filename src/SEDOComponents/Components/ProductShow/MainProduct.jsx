import React from "react";
import Products from "./Product";
import SubCategories from "../../CommonComponents/SubCategories/SubCategories";
import { useProductContext } from "./Context/StateContext";

const MainProducts = () => {
    const { isSecondComponent } = useProductContext();

    return (
        <div>
            {isSecondComponent ? <Products /> : <SubCategories />}
        </div>
    );
};

export default MainProducts;
