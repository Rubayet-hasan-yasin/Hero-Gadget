import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard'
import { addToDb } from '../utils/fakedb';
import { CartContext, ProductContext } from '../App';
import { toast } from 'react-hot-toast';

const Shop = () => {
    // const productdata = useLoaderData()
    const products = useContext(ProductContext)
    const [cart, setCart] = useContext(CartContext)
    // console.log(products);

    const handleAddToCart = product =>{
        let newCart = []
        const exist = cart.find(existingProduct=> existingProduct.id === product.id)
        if(!exist){
            product.quantity = 1;
            newCart = [...cart,product]
        }
        else{
            const rest = cart.filter(existingProduct=> existingProduct.id !== product.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        toast.success('Product Added! 🛒')
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='product-container'>
            {
                products.map(product=> <ProductCard 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></ProductCard>)
            }
        </div>
    );
};

export default Shop;