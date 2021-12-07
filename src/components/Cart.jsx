import { Children, useContext } from "react";
import {CartContext} from "./CartContext";
import imagenCarritoVacio from "../assets/img/fondoComicM.jpg"


export default function Cart(){
    const test= useContext(CartContext);//se debe indicar que contexto quiero utilizar. En este caso el cartcontext que cree.
    console.log(test);

   console.dir("Prueba 2" + test.cartList)

    return(
        <>
        {test.cartList.length > 0 &&
        <div className="row justify-content-center align-items-center">
           
           <div className="row justify-content: flex-end align-items-center" style={{backgroundColor: "pink"}}>
             <h2 className="col-4">Precio total: <span class="badge bg-secondary col-4">{test.calcularPrecioTotal()}</span></h2>
             <button onClick={test.removeList} type="button" className="btn btn-danger col-4">Remover todos los productos del carrito.</button>
           </div>
        </div>//RECORDAR PONER TEST.(NOMBRE DEL ARRAY O FUNCIÓN) PARA LLAMAR LOS ELEMENTOS DEL CONTEXTO GLOBAL.
        }
        {//llamo al array carList (del componente CartContext) a través del método useContext
        test.cartList.length > 0 ?
          test.cartList.map(item => 
            <div className="card text-dark bg-light mb-3">
            <img src={item.imgProducto} className="card-img-top" style={{maxHeight: "20rem"}, {maxWidth: "20rem"}} alt={item.idProducto}/>
            <div className="card-body">
              <h5 className="card-title">{item.titleProducto}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Precio unitario: {item.precioProducto}</p>
              <p className="card-text">Cantidad seleccionada: {item.cantidadProducto}</p>
              <p className="card-text">Precio total: {item.precioProductos}</p>
              <button onClick={() => test.deleteItem(item.idProducto)} type="button" className="btn btn-danger col-4">Remover producto del carrito</button>
            </div> 
          </div>
            )
           
         :<div class="card bg-dark text-white">
           <img src={imagenCarritoVacio} class="card-img" style={{maxHeight: "40rem"}, {maxWidth: "200rem"}} alt="Imagen de carrito vacío" />
           <div class="card-img-overlay justify-content-center align-items-center">
              <h1 class="card-title"><b>Todavía no tienes productos en tu carrito.</b></h1> 
           </div>
           </div>
        }
        </>
    );
}