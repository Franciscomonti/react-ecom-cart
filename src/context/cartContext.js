
import React, {useState} from 'react';

const CartContext = React.createContext()



const CartPorvider = ({children}) => {
    // Crear carrito
    const [cart, setCart]  = useState([]);

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: quantity} : product
            }));

            }else{
                setCart([...cart,{...item, quantity}]);
            }
    };
    
    console.log('carrito: ', cart)

    
    // Esta en el carrito el producto?
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;   // nos busca el id y nos da verdadero o falso dependiendo si esta o no

    // Borrar todo el carrito
    const clearCart = () => setCart([]);  //Setea el carrito a un array vacio

    //Eliminar un producto del carrito
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));  //Crea un array nuevo que no contenga el id seleccionado
    
    // total de productos sumnado sus cantidades.
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0); // va acumulando la cantidad a medida q recorre cada producto del carrito
    
    //total del precio de todos los productos. 
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0); // va acumulando y sumando los precios de cada producto por su cantidad. 
    };

    return (
        <CartContext.Provider value ={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children} 
        </CartContext.Provider>
    )
}

export  {CartPorvider, CartContext};