import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Information from './pages/Information';
import Product from './pages/Product';
import Blog from './pages/Blog';
import NoPage from './pages/NoPage';
import ContinueApp from './pages/ContinueApp';
import ProductDetail from './pages/ProductDetail';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Information' element={<Information />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/ProductDetail' element={<ProductDetail />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/BlogDetail' element={<BlogDetail />} />
        <Route path='/ContinueApp' element={<ContinueApp />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
