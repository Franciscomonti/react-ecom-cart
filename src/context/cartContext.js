
import React, {useState} from 'react';

const CartContext = React.createContext()



const CartPorvider = ({children}) => {
    // Crear carrito
    const [cart, setCart]  = useState([]);

    const agregarProducto = (item, quantity) => {
        if(estaEnCarrito(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: quantity} : product
            }));

            }else{
                setCart([...cart,{...item, quantity}]);
            }
    };
    
    console.log('carrito: ', cart)

    
    // Esta en el carrito el producto?
    const estaEnCarrito = (id) => cart.find(producto => producto.id === id) ? true : false;   // nos busca el id y nos da verdadero o falso dependiendo si esta o no

    // Borrar todo el carrito
    const vaciarCarrito = () => setCart([]);  //Setea el carrito a un array vacio

    //Eliminar un producto del carrito
    const removerProducto = (id) => setCart(cart.filter(producto => producto.id !== id));  //Crea un array nuevo que no contenga el id seleccionado
    
    // total de productos sumnado sus cantidades.
    const totalProductos = () => cart.reduce((acumulador, producto) => acumulador + producto.quantity,0); // va acumulando la cantidad a medida q recorre cada producto del carrito
    
    //total del precio de todos los productos. 
    const precioTotal = () => {
        return cart.reduce((acumulador, producto) => acumulador + producto.quantity * producto.precio, 0); // va acumulando y sumando los precios de cada producto por su cantidad. 
    };

    return (
        <CartContext.Provider value ={{
            vaciarCarrito,
            estaEnCarrito,
            removerProducto,
            agregarProducto,
            precioTotal,
            totalProductos,
            cart
        }}>
            {children} 
        </CartContext.Provider>
    )
}

export  {CartPorvider, CartContext};