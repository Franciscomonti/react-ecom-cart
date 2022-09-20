import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../../components/cart_widget/cartWidget';

const NavBar = () => {
    return (
        <div>
        <nav style={style_navBar}>
            <Link to="/" style={style_navLogo}><img src={'/img/logo/logo.png'} alt="logo" style={style_navLogo_Img}/></Link>
            <ul style={style_nav_blq_btn}>
                <NavLink to="/" style={style_nav_blq_btn_li}>Todos</NavLink>
                <NavLink to="/category/Adidas" style={style_nav_blq_btn_li}>Adidas</NavLink>
                <NavLink to="/category/Nike" style={style_nav_blq_btn_li}>Nike</NavLink>
                
            </ul>
            <NavLink to="/cart" style={style_nav_cart}>
                <CartWidget/>
            </NavLink>
        </nav>
        </div>

    )
}

export default NavBar;


const style_navBar = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    height: "80px",
    justifyContent: "space-around",
}

const style_navLogo = {
        width: "80px",
        height: "80px",
}

const style_navLogo_Img = {
        height: "80px",
        width: "150px",
        objectFit: "contain",
}

const style_nav_blq_btn = {
    display: "flex",
    height: "80px",
    alignItems: "center",
}

const style_nav_blq_btn_li = {
    listStyle: "none",
    margin: "0px 20px",
    padding: "5px 10px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "18px",
    color: "black",
    cursor: "pointer",    
    textDecoration: 'none',             
}

const style_nav_cart = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "80px",
}

