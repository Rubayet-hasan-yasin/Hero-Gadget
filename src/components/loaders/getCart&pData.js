import { getStoredCart } from "../../utils/fakedb";





export const productsAndCartData = async () =>{
    const productData = await fetch('products.json');
    const products = await productData.json();

    let cartArray = []

    const savedCart = getStoredCart();

    // console.log(savedCart);


    for(const id in savedCart){
        const foundProduct = products.find(product=> product.id === id);
        if(foundProduct){
            const quantity = savedCart[id];
            foundProduct.quantity = quantity;
            cartArray.push(foundProduct);
        }
    }

return { cartArray, products};
// {cart: cart || [] , products : products || []}
}

