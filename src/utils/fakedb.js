

// const addToDb = id => {
//     let shoppingCart = {}
//     const storedCart = localStorage.getItem('shopping-cart');
    
//     if(storedCart){
//         shoppingCart = JSON.parse(storedCart)
//     }
    
//     // add quantity
// let quantity = shoppingCart[id]
// if(quantity){
//     const newQuantity = quantity + 1;
//     quantity = newQuantity;
// }
// else{
//     quantity = 1;
// }
// console.log(quantity);

// localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))



// }









// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
  
    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
    } else {
      shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
  }


  const getStoredCart = () =>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
  }


export { 
    addToDb,
    getStoredCart
}