import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const handleDecreaseQuantity = () => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id: item.id } });
  };

  const handleRemoveProduct = () => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: { id: item.id } });
  };

  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleDecreaseQuantity}>Remove 1</button>
      <button onClick={handleRemoveProduct}>Clear</button>
    </div>
  );
};

export default CartItem;
