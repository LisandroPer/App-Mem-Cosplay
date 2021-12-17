import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainter';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './components/CartContext';

function App() {
  return (
   <CartContextProvider>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer /> }/>
        <Route path="/detalles" element={<ItemDetail />} />
        <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
