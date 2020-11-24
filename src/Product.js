import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <p className="product__info">{title}</p>

            <p className="product__price">
                <small>$</small>
                <strong> {price}</strong>
            </p>
            <div product__rating>
                {
                    Array(rating).fill().map(() => (<span >🌟</span>))
                }
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
