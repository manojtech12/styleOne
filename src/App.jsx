import Accessories from './accesory.jsx';
import './App.css';
import Shop from './carosel.jsx';
import ShopItems from './shop.jsx';
import Nav from './nav.jsx';
import About from './about.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={
          <main>
            <Shop />
            <Accessories />
          </main>
        } />

        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<ShopItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;