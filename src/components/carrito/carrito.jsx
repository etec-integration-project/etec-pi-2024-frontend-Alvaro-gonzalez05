import * as React from 'react';
import { useEffect } from "react";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import "./estilo.css";


const ProductList = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Cafe Americano', price: 129.99, image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FAmericano%20425x425%20sin%20fondo.png?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&q=80&w=1200&h=627' },
    { id: 2, name: 'Latte', price: 29.99, image: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Flatte_1.png?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&q=80&w=1200&h=627' },
    { id: 3, name: 'Cafe Mokka', price: 59.99, image: 'https://www.starbucksathome.com/uy/sites/default/files/2021-03/CafeMocha_LongShadow_Cream_1.png' },
    { id: 4, name: 'Cappuccino', price: 199.99, image: 'https://www.starbucks.com.au/assets/uploads/2023/08/sbx20190617-33379-cappuccino-onwhite-corelib-srgb.png' },
    
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: quantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <div className="product-container">
      <h1 className="title">Tienda Online</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Carrito</h2>
        {cart.length === 0 ? <p>No hay productos en el carrito.</p> : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div>
                  <p>{item.name} - ${item.price} x {item.quantity}</p>
                  <div className="cart-controls">
                    <button className="cart-control-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <button className="cart-control-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="cart-control-btn" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                  </div>
                </div>
              </div>
            ))}
            <p className="cart-total">Total: ${cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;