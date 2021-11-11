import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
        const [{basket}, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="chechout_left">
                <img className="checkout_ad" src="image/amazon-logo.jpeg"/>
           
           <div>
               <h2 className="checkout_title">
                   Your Shopping Basket
               </h2>
               {basket.map(item=>
               <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    description={item.description}
                    />
                )} 

           </div>
            </div>
            
            
            <div className="checkout_right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
