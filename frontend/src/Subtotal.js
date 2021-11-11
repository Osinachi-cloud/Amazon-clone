import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
function Subtotal() {
    const[{basket}, dispatch]=useStateValue();
    // console.log(basket[0].product)
    // console.log(basket)


    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=> (
            <>
            <p>
                Subtotal( <strong>{basket.length}</strong> items):
                <strong>{value}</strong>    
            </p>
            <small className="subtotal_gift">
            <input type="checkbox"/> this order contains a gift    
            </small>
            </>
            )}
            decimalScale ={2}
            value={getBasketTotal(basket)}
            displayType ={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
