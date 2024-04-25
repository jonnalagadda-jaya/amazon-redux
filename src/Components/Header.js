import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const cartItems = useSelector((state)=>state.cartItems)
    const cartItemCount = cartItems.length;
    const navigate = useNavigate();
    const location = useLocation();

    const handleCart =()=>{
        navigate('/Cart')
    }

    const isCartPage = location.pathname==='/Cart'
    if(isCartPage){
        return null;
    }

    return ( 
        <div>
            <div className='header'>
            <h1 className='heading'>Welcome to Amazon</h1>
            <img src='https://i.pinimg.com/564x/15/4f/df/154fdf2f2759676a96e9aed653082276.jpg' height={50} width={50} onClick={handleCart}></img>
            </div>
                <div className='circle'>{cartItemCount}</div>
        </div>
     );
}

export default Header;