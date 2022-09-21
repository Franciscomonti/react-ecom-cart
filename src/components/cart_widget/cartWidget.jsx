import React, {useContext} from 'react'
import { CartContext } from '../../context/cartContext';

const  CartWidget = () => {

    const {totalProductos} = useContext(CartContext)

    return (
        <div style={nav_cart_container}>
            <img src= {'/img/icon/cart_vacio.svg'} alt="icon-cart-vacio" style={style_nav_cart_img}/>
            <span style={style_nav_cart_span}>{totalProductos()}</span>
        </div>
    )
}

export default CartWidget


const nav_cart_container = {
    position: "relative",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
}

const style_nav_cart_img = {
    width: "30px",
    height: "30px",
    position: "relative",
}

const style_nav_cart_span = {
    width: "17px",
    height: "17px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "2px",
    right: "2px",
    zIndex: 100,
    
    borderRadius: "50px",
    backgroundColor: "black",
    border: "solid 0.3px black",
    
    color:"white",
    fontSize: "14px",
    lineHeight: "0px",
    textAlign: "center",
}


