import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'; // Global styles

const App = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <main>
          <ProductList />
          <Cart />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
