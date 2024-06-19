import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
// import ShowDisplay from './components/hook/showDisplay';
import { useEffect, useState } from "react";
function App() {
  // create usestae varible 
  let [cart, setCart] = useState({});
  function increaseQuantity(Product){
    const newcart = {...cart};
    if(!newcart[Product.id]){
      newcart[Product.id] = {
        ...Product,
        quantity:0,  
      };
    }
    newcart[Product.id].quantity++;
    setCart(newcart);
  }
  function decreaseQuantity(Product){
    const newcart = {...cart};
    newcart[Product.id].quantity--;
    if(newcart[Product.id].quantity === 0){
      delete newcart[Product.id];
    }
    setCart(newcart);
  }

  console.log(a, b);
  return (
    <div className="App">
      <Products cart={cart} increaseQuantity ={increaseQuantity} decreaseQuantity= {decreaseQuantity} />
    </div>
  );
}

export default App;
