import Accessories from './accesory.jsx';
import './App.css';
import ShopItems from './shop.jsx';
import Nav from './nav.jsx';
import About from './about.jsx';
import ProductDetails from './productdetails.jsx';
import Shop from './carosel.jsx';

import Cart from './cart.jsx'
import { CartProvider } from './cartcontext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>

      <BrowserRouter>
        <Nav />

        <Routes>

          <Route
            path="/"
            element={
              <main>
                <Shop />
                <ShopItems />
                <Accessories />
              </main>
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="/shop" element={<ShopItems />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/product/:id" element={<ProductDetails />} />

        </Routes>

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;