import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainter';
import ItemDetail from './components/ItemDetail';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
    
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer /> }/>
        <Route path="/detalles" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
