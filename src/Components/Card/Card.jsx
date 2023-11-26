/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import '../Context'
import "./Card.css";
import CartContext from "../Context";
function Card({ iurl, name, desc, price }) {
  const {cartcount,setcartcount} = useContext(CartContext)
  const [count,setCount] = useState(1);
  const [button,setbutton] = useState('Add to cart')
  const toggle = () => {
    setbutton(prev => prev === "Add to cart" ? "Remove from cart" : "Add to cart");
  setcartcount(prev => button === "Add to cart" ? prev + 1 : prev - 1);
    }
  const increment  = () => {
    setCount(prev => prev+1);
  }
  const decrement = () => {
    setCount(prev => prev>1 ? prev-1 : 1)
  }
  return (
    <div className="card">
      <img src={iurl} alt="there's an issue with displaying this image" />
      <div className="card-content">
        <h4>{name}</h4>
        <p>{desc}</p>
        <h4>{price}</h4>
        <p>Quantity: {count}  </p>
        <div className="add-to-cart">
          <button onClick={decrement} className="minus">-</button>
          <button onClick={toggle} style={{borderRadius: '0'}}className=".cart">{button}</button>
          <button onClick={increment} className="plus">+</button>
        </div>
      </div>
    </div>
  );
}


export default Card;
