import React from 'react';
import { useState } from 'react';



function ItemCount ({stock, onAdd }) {
    const [quantity, setCount] = useState(1);

    const sumProductCount = () => {
      if (quantity < stock) {
        setCount(quantity + 1);
      }
    }

    const restProductCount = () => {
      if (quantity > 1) {
        setCount(quantity - 1);
      }
    }

  return (
    <div style={item_count}>
          <div style={item_count_contador}>
            <button onClick={restProductCount} style={item_count_btn_blq_btn} >-</button>
            <span style={item_count_btn_span}>{quantity}</span>
            <button onClick={sumProductCount} style={item_count_btn_blq_btn}  >+</button>
          </div>
          <button onClick={() => onAdd(quantity)}  style={productos_cards_caract_btn_add} >Agregar al carrito</button> 
          <button style={ productos_cards_caract_btn_fav}><img src='/img/icon/fav_icon.svg' alt='favicon' style={productos_cards_caract_btn_fav_img}/></button>
    </div>
  )
}

const item_count ={
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  width: "250px",
}

const item_count_contador = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "black",
  margin: '5px 0px',
  height: '40px',
  cursor: 'pointer',
  borderRadius: '5px',
  width: '70px',
}


const item_count_btn_blq_btn ={
  border: "none",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  fontSize: "20px",
  textAlign: "center",
  cursor: "pointer",
  color: "white",
  background: "black",
}

const item_count_btn_span ={
  color: "white",
  width: "20px",
  textAlign: "center",
}

const productos_cards_caract_btn_add = {
  margin: '5px 10px',
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

const productos_cards_caract_btn_fav = {
  margin: '5px',
  height: '40px',
  width: '40px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '0.5px solid transparent ',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
}

const productos_cards_caract_btn_fav_img = {
  width: '30px',
  objectFit: 'cover',
}





export default ItemCount