import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/item_list/itemList'

const ItemListContainer = () => {
    
    const [listaProductos, setListaProductos] = useState([])
    const [loadSpin, setLoadSpin] = useState(false)
    const {idCategory} = useParams()

    const promesa = new Promise((response)=>{
        setTimeout(async() => {
            const dataResponse = await fetch('/JSON/productos.json');
            let data = await dataResponse.json();
            setLoadSpin(true);
            response(data);
        },10);
    });

    useEffect(() => {

        const productos = async () => {
            try {
                let data = await promesa;
                if(idCategory == null) { setListaProductos(data); }
                else{
                data = data.filter(listaProductos => listaProductos.marca === idCategory)
                setListaProductos(data);
                }
            }
            catch(e){
                console.log(e);
            } 
    };
        
        productos()    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idCategory]);

    return <>{loadSpin ? <ItemList productos={listaProductos}/> : <div style={load_blq}><img src={ '/img/gifs/spinner.gif'} style={spinner_style} alt="Loading"></img>
    <p>Estamos Cargando tu Proxima Compra...</p></div>} </>


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


export default ItemListContainer