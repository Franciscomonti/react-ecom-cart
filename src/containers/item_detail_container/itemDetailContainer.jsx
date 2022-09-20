import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/item_detail/itemDetail';

const ItemDetailContainer = () => {

    const [Item, setItem ] = useState([])
    const [loadSpin, setLoadSpin] = useState(false)
    const {idProducto} = useParams()

const getItem = new Promise(
    data => {
        setTimeout(() =>{
            fetch('/JSON/productos.json')
            .then(response =>{ response.json()
                .then(json => data(json))
            }
            )
        },10);
    }
)

const item = async () => {
    try { 
        getItem.then(
            response => {response = response.find(Item => Item.nombre === idProducto)
            setItem(response)
            setLoadSpin(true)
            }
        )
    }catch(e){
    console.log(e)
}
}

 // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect( () => { item() } , [ idProducto ] );

return <>{loadSpin ? <ItemDetail producto={Item} key={Item.id} /> : <div style={load_blq}> <img src={ '/img/gifs/spinner.gif'} style={spinner_style} alt="Loading"/> <p>Estamos Cargando los detelles del producto...</p></div>} </>

}

const load_blq = {
    display: 'flex',
    flexDirection: "column",
    margin: "300px auto",
    width: "400px",
    alignItems: "center",
}
const spinner_style = {
    width: "200px",
    objectFit: "cover",
}

export default ItemDetailContainer