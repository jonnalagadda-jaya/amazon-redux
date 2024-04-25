import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from './Action';

function Products() {
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    const handleChange =(item)=>{
        dispatch(add(item));
    }

    useEffect(()=>{
        const fetchData = async()=>{
            try {
             const response = await axios.get("https://fakestoreapi.com/products")
                setData(response.data);
            } catch (error) {
                console.log("Error Fetching Data :", error );
            }
        };
        fetchData();
    },[])
   
    return ( 
        <div className='card-container'>
            {data.map((item)=>(
                    <div key={item.id} className='card'>
                        <div className='title'>Title: {item.title}</div>
                        <img className='image' src={item.image}></img>
                        <div className='price'>Price:${item.price}</div>
                        <div className='rating'>Rating: {item.rating.rate}({item.rating.count}reviews)</div>
                        <div className='desc'>Description: {item.description.substring(0,100)}...</div>
                        <div className='category'>Category: {item.category}</div>
                        <Button className="btn btn-danger m-3 " type='button' onClick={()=>handleChange(item)}>Add To Cart</Button>
                    </div>
                ))
            }
        </div>
     );
}

export default Products;