import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard'
import { addToDb } from '../utils/fakedb';

const Shop = () => {
    const productdata = useLoaderData()

    const handleAddToCart = id =>{
        // console.log(id);
        addToDb(id)
    }
    return (
        <div className='product-container'>
            {
                productdata.map(product=> <ProductCard 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></ProductCard>)
            }
        </div>
    );
};

export default Shop;