import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, remove, decrement } from './Action';


function Cart() {
    const cartItems = useSelector((state)=>state.cartItems);
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();

    const handleRemove =(itemId)=>{
        dispatch(remove(itemId))
    }
    const handleAdd =(itemId)=>{
        dispatch(increment(itemId));
    }
    const handlesub=(itemId)=>{
        dispatch(decrement(itemId));
    }
   
    return ( 
        <div>
           <h2>Your Cart</h2>
           {cartItems.length===0 ?(
            <p>Your Cart is Empty</p>
           ):( 
            <>
            {cartItems.map((item)=>(
                <div key={item.id} className='card1'>
                    <div className='products'>
                    <div className='images'>
                    <img className='image2' src={item.image}></img>
                    </div>
                    <div className='product-info'>
                    <div className='title2'>Title: {item.title}</div>
                    <div className='rating2'>Rating: {item.rating.rate}({item.rating.count}reviews)</div>
                    <div className='desc2'>Description: {item.description}</div>
                    <div className='category2'>Category: {item.category}</div>
                    </div>
                    <div>
                    <div className='price2'>${item.price}</div>
                     <div className='quantity2'>Quantity: {isNaN(item.quantity) ? count : item.quantity}</div>
                    <button type='submit' onClick={()=>handleAdd(item.id)}>+</button>
                    <button type='submit' onClick={()=>handlesub(item.id)}>-</button> <br /> <br />
                    <button type='submit' onClick={()=>handleRemove(item.id)}>Remove</button>
                    </div>
                    </div>
                </div>
            )
        )
        }
        </>
           )}
        </div>
     );
}

export default Cart;