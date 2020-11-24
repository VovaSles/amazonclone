import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css'


function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <img
            className="checkout__image"
            src="https://powerdigitalmarketing.com/wp-content/uploads/2020/05/How-to-Advertise-on-Amazon.jpg"
            alt=""
            />
            {basket.length === 0 ? (
                <div>
                    <p>Your basket is empty...</p>
                </div>
            ):(
                <div>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout
