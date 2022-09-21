
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCount from '../item-count/itemCount';


const ItemDetail = ({ producto }) => {

    const [imagenActiva, setImagenActiva] = useState(producto.portada)
    
    const {agregarProducto, estaEnCarrito} = React.useContext(CartContext)


    function agregar(quantity) { 
        agregarProducto(producto, quantity);
    }

    return(
    
        <div style={ productos_cards }>
            <div style= { productos_cards_img_blq }>
                <div style= { productos_cards_blq_img_peq }>
                    <img onClick={() => setImagenActiva(producto.portada)} src={ producto.portada } alt={producto.key} style= { productos_cards_img_peq }/>
                    <img onClick={() => setImagenActiva(producto.down)} src={ producto.down } alt={producto.key} style= { productos_cards_img_peq }/>
                    <img onClick={() => setImagenActiva(producto.right)} src={ producto.right } alt={producto.key} style= { productos_cards_img_peq }/>
                    <img onClick={() => setImagenActiva(producto.back)} src={ producto.back} alt={producto.key} style= { productos_cards_img_peq }/>
                </div>
                <div style= { productos_cards_blq_img_grande }>
                    <img src={ imagenActiva } alt={producto.key} style= { productos_cards_img_grande }/>
                </div>    
            </div>
    
            <div style={productos_cards_caract_blq }>
                <div style={productos_cards_caract_blq_detal}>

                    <h2 style={ productos_cards_caract_marca}>{ producto.marca }  { producto.nombre }</h2>    
                    <h3 style={ productos_cards_price }><span style= { productos_cards_price_span }> ${ producto.precio }</span> </h3>
                    
                    <div style={ productos_cards_caract_btn_blq}>

                        { estaEnCarrito(producto.id) ? 
                        <div style={productos_cards_btns_blq}>
                            <Link to='/' style={productos_cards_btns}>Seguir comprando</Link> 
                            <Link to='/cart' style={productos_cards_btns}>Ir al carrito</Link> 
                        </div> 
                        : <ItemCount  style={ productos_cards_caract_btn_size}  stock={producto.stock} onAdd={agregar} />
                        }

                    </div>

                    <p>Stock disponible: {producto.stock}</p>
                </div>
                <p style={ productos_cards_caract_descrip}>{producto.descripcionLarga}</p>
            </div>
        </div>
    )};
    
    const productos_cards = {
        width: '90%',
        height: '100vh - 80px',
        padding: '5px',
        margin: '10px auto',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
    } 
    
    const productos_cards_img_blq  = {
        display:'flex',
        justifyContent: 'space-between',
    }
    
    const productos_cards_blq_img_grande  ={
        width: '1000px',
        height: '450px',
        display: 'flex',
        backgroundColor: '#f6f6f6',
        margin: '0px 5px',
    }
    const productos_cards_img_grande = {
        width: '800px',
        height: '400px',
        margin: 'auto',
        objectFit: 'contain',
    }
    
    const productos_cards_blq_img_peq = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
    }
    
    const productos_cards_img_peq  = {
        width: '75px',
        height: '75px',
        objectFit: 'contain',
        cursor: 'pointer',
        margin: '0px 0px 20px 0px',
        backgroundColor: '#f6f6f6',
    }
    
    const productos_cards_caract_blq  = {
        width: '1090px',
        height: '300px',
        margin: '0 auto 0 auto',
        display: 'flex',
        justifyContent: 'center', 
        padding: '20px 0px 0px 0px',
        

    }

    const productos_cards_caract_blq_detal = {
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
    }

    const productos_cards_caract_marca = {
        margin:'0 20px 20px 0px',
        padding: '0',
    }
    
    const productos_cards_caract_descrip = {
        margin:'10px 0px 20px',
        padding: '0 20px',
        fontSize: '14px',
        textAlign: 'justify',
        width: '100%',
    }
    
    const productos_cards_price = {
        margin:'0px 0px 10px 0px',
        padding: '0',
        
    }
    
    const productos_cards_price_span = {
        margin:'0',
        padding: '0',
    }
    
    const productos_cards_caract_btn_blq = {
        height: '50px',
        display: 'flex',
        width: '100%',
        
    
    }
    
    const productos_cards_caract_btn_size = {
        margin: '5px 10px 5px 0px',
        height: '40px',
        width: '40px',
        padding: '0px',
        color: 'white',
        backgroundColor: 'black',
        cursor: 'pointer',
        borderRadius: '5px',
        border: '0.5 px solid transparent',
    }
    
    const productos_cards_btns = {
        margin: '0px 10px',
        height: '40px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: '0.5px solid transparent',
        backgroundColor: '#efefef',
        alignText: 'center',
        display: 'flex',   
        alignItems: 'center',
        justifyContent: 'center',     
        padding: '0px 5px', 
        textDecoration: 'none', 
        color: 'black',
        fontSize: '14px',
        
      }

    const productos_cards_btns_blq = {
        display: 'flex',
    }

export default ItemDetail