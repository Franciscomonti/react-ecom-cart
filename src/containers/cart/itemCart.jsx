
import React from "react"
import "./itemCart.css"
import { CartContext } from "../../context/cartContext"


const ItemCart = ({producto}) => {

    const {removeProduct } = React.useContext(CartContext)
    
    return(
            <div className="card-carrito">
                <img src={producto.portada} alt={producto.nombre} className="card-carrito-img"/>
                <div className="card-carrito-desc">
                    <div className="card-carrito-desc-text">
                        <div>
                            <h1 className="card-carrito-nombre">{producto.marca} {producto.nombre}</h1>
                            <h2 className="card-carrito-cantidad">cantidad: {producto.quantity}</h2>
                        </div>
                        <div>
                            <h2 className="card-carrito-precio">Precio: ${producto.precio}</h2>
                            <h2 className="card-carrito-subtotal">subtotal: ${producto.quantity * producto.precio} </h2>
                        </div>
                    </div>
                    <div className="card-carrito-desc-button">
                        <p className="card-carrito-btn">Comprar</p>
                        <p onClick={()=>removeProduct(producto.id)} className="card-carrito-btn">Eliminar</p>
                    </div>
                </div>
            </div>
    )
}


export default ItemCart