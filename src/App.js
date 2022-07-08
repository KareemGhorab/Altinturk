import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Products from './components/products/Products';
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
