import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainter';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
    <NavBar />
      <Routes>
         <Route path="/category/:idCategory" element={<ItemListContainer /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
