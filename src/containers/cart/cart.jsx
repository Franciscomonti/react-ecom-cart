import React, {useContext} from 'react'
import "./cart.css"
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCart from './itemCart';

const Cart = () =>{
    const {cart, totalPrice, clearCart} = useContext(CartContext)

    if (cart.length === 0){
        return (
            <>
                <p>El carrito esta vacio</p>
                <Link to='/'>Ir a comprar</Link>
            </>
        )
    }else{

    return(
        <>

        { cart.map(producto => <ItemCart key={producto.id} producto={producto} />)};
        <div className='Carrito-opciones'>
            <p>Total de Compra: ${totalPrice()}</p>
            <div className='Carrito-opciones-btn-blq'>
                <p onClick={()=>clearCart()} className='Carrito-opciones-btn'>Vaciar Carrito</p>
                <p className='Carrito-opciones-btn'>Continuar compra</p>
            </div>
        </div>
        </>
    )
    }
}

export default Cart