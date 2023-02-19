import { createContext } from "react";

export const ProductContext = createContext();

export const ProductStore = ({ children }) => {
    const productArray = [
        {nome: 'Batedeira', id: 20, description: 'Esta é uma batedeira'},
        {nome: 'Ventilador', id: 22, description: 'Este é um ventilador'},
        {nome: 'Computador', id: 30, description: 'Este é um computador'},
    ]

    return (
        <ProductContext.Provider value={productArray}>
            {children}
        </ProductContext.Provider>
    )
}