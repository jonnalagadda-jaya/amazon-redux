import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import Cart from './Components/Cart';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Header />
   <Routes>
   <Route path='/' element={<Products />}></Route> 
    <Route path='/cart' element={<Cart />}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
