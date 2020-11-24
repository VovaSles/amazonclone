import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
     //dispatch items from the basket
     dispatch({
         type: 'REMOVE_FROM_BASKET',
         id: id
     })
    }
    return (
        <div className="checkoutProduct">
           <img className="checkoutProduct__image" src={image}/> 
           <div className="checkoutProduct__info">
               <p>{title}</p>
               <p className="checkoutProduct__price">
                     <small>$</small>
                     <strong>{price}</strong>
               </p>
               <div className="checkoutProduct__rating" >
                {
                    Array(rating).fill().map(() => (<span>🌟</span>))
                }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
           </div>
        </div>
    )
}

export default CheckoutProduct
