import React from 'react'
import Item from '../item/item'

const item_list = ({ productos }) => {
    return (
        <div style={item_List_bq}>
            {productos.map((producto) => (
                <Item key={producto.id} prod={producto} />
                
            ))}
        </div>
    )
}



const item_List_bq = {
    width: '80%',
    heigth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fafafa'
}

export default item_list