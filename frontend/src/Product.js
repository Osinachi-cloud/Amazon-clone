import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';



function Product(  {id, title, description, price, rating , image}) {
    const[{basket}, dispatch]= useStateValue();
    // console.log("this is the basket", basket)
    // console.log(basket)

    const addToBasket =()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image: image,
                price: price,
                rating:rating,
                description:description,

            },
        });    
    };
    
    return (
        <div className="product">
            <div className="product_info" key={id}>
                <p>{title}</p>
                <p>{description}</p>
                <p className="product_price">
                    <small><strong>$</strong></small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                    <p style={{color:"gold"}}>&#9733;</p>
                        
                    )

                    )}
                    

                    
                
                </div>
                </div>

            
                <img className="tes" src={image}/>

        
                <button className="addToCartButton" onClick={addToBasket}>Add to Basket</button>
            
            
        </div> 
    );
}

export default Product
