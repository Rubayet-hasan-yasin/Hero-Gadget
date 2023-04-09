import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem'
import { deleteShoppingCart, removeFromDb } from '../utils/fakedb';
import { CartContext } from '../App';
import { toast } from 'react-hot-toast';



const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    
    let total = 0;
    if(cart.length > 0){
        for(const product of cart){
            total = total + product.price * product.quantity
        }
    }

    //Remove item from shopping shopping cart
    const handleRemoveItem = id =>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
        toast.error('Product Remove! 🔥')
    }

    //Delete shopping cart 
    const deleteCartHandler =()=>{
        deleteShoppingCart()
        if(cart.length){
            setCart([])
            deleteShoppingCart()
            return toast.success('Removed👍')
        }
        

    }

    //Place Order
    const orderHandler = () =>{
        if(cart.length){
            setCart([])
            deleteShoppingCart()
            return toast.success('Order Done 👍')
        }
        return toast.error('Cart Empty 🔥')
    }

    // const 

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>{cart.length ? 'Review Cart Items' : 'Cart is EMPTY'}
                </h2>

                <ul className='flex flex-col divide-y divide-gray-700'> 
                {
                    cart.map(product=> <CartItem 
                        key={product.id}
                         product={product}
                         handleRemoveItem={handleRemoveItem}
                         ></CartItem>)
                }

                </ul>
                
                <div className='space-y-1 text-right'>
                    <p>
                        Total Amount: <span className='font-semibold'>{total}</span>
                    </p>
                    <p className='text-sm text-gray-400'>Not including texes and shipping costs</p>

                </div>

                <div className='flex justify-end space-x-4'>
                    {
                        cart.length > 0 ? <button onClick={deleteCartHandler} className='btn-outlined'>Clear Cart</button> : <Link to='/shop' className='btn-outlined'>Back To Shop</Link>
                    }
                    <button onClick={orderHandler} className='btn-primary'>Place Order</button>

                </div>

            </div>

        </div>
    );
};

export default Cart;