import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return ( < div className = "home" >
        <img src = "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/AMAZON-1200x537.png"
        className = "home__image"
        alt = "" />
        <div className="home__row">
        <Product
            id='1234567'
            title="iPhone 11 Pro.
            "
            price={11.90}
            rating={4}
            image="https://i.insider.com/5e9dd01229d6d96bb67e4012?format=jpeg"
            />
             <Product
            id='1234567'
            title="iPhone 11 Pro."
            price={11.90}
            rating={4}
            image="https://i.insider.com/5e9dd01229d6d96bb67e4012?format=jpeg"
            />
        </div>
           
        </div>
    )
}

export default Home