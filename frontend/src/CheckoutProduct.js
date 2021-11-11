import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, description, image, title,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket =()=>(
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    )
    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct_image' src={image}/>
            <div className="space"></div>
            <div className="checkoutProduct_details">
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_description'>{description}</p>

                <p className="checkoutProduct_price">
                    <small><strong>$</strong></small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                    <p style={{color:"yellow"}}>&#9733;</p>
                    ))}
                </div>
                <button onClick={removeFromBasket} className="checkoutProduct_button">Remove from cart</button>
            </div>
            

           
            
        </div>
    )
}

export default CheckoutProduct
