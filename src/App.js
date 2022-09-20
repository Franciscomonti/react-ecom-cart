import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './containers/item_detail_container/itemDetailContainer';
import ItemListContainer from './containers/item_list_container/itemListContainer';
import NavBar from './components/nav_bar/navBar';
import Cart  from './containers/cart/cart';
import { CartPorvider } from './context/cartContext';

function App() {
  return (

    <CartPorvider>
      <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
              <Route path="/detalle/:idProducto" element={<ItemDetailContainer />}/> 
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </CartPorvider>
  );
}

export default App;
