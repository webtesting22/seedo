import React from "react";
// Provider component to wrap the children components
export const ProductProvider = ({ children }) => {
    const [isSecondComponent, setIsSecondComponent] = useState(false);

    const toggleComponent = () => {
        setIsSecondComponent(prevState => !prevState);
    };

    return (
        <ProductContext.Provider value={{ isSecondComponent, toggleComponent }}>
            {children}
        </ProductContext.Provider>
    );
};
