import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import About from './components/About' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { productsAndCartData } from './components/loaders/getCart&pData'
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage></ErrorPage> ,
        loader: ()=> productsAndCartData(),
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/shop',
                element: <Shop />,
                loader: ()=> fetch('products.json')
            },
            {
                path: '/cart',
                element: <Cart />,
                loader: ()=> productsAndCartData()
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    },
   
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Toaster></Toaster>
    <RouterProvider router={router}></RouterProvider>
    </>
)
