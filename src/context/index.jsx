import React from "react";

export const AppContext = React.createContext ();
const {Provider} = AppContext;

const ContextProvider= ({children}) => {
    const[carrito , setCarrito] = React.useState ([]);

    const AddProducToCarrito = (product) => {
        setCarrito([...carrito, product]);
    }

    return (
        <Provider value={{carrito, AddProducToCarrito, quantityCart: carrito.lenth }}>
            {children}
        </Provider>
    )
}

export default ContextProvider;