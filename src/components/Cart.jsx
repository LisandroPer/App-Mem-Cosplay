import { Children, useContext } from "react";
import {CartContext} from "./CartContext";
import imagenCarritoVacio from "../assets/img/fondoComicM.jpg"


export default function Cart(){
    const test= useContext(CartContext);//se debe indicar que contexto quiero utilizar. En este caso el cartcontext que cree.
    console.log(test);

   console.dir("Prueba 2" + test.cartList)

    return(
        <>
        {//llamo al array carList (del componente CartContext) a través del método useContext
        test.cartList.length > 0 ?
          test.cartList.map(item => 
            <div className="card text-dark bg-light mb-3">
            <img src={item.imgProducto} className="card-img-top" style={{maxHeight: "20rem"}, {maxWidth: "20rem"}} alt={item.idProducto}/>
            <div className="card-body">
              <h5 className="card-title">{item.titleProducto}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">{item.precioProducto}</p>
              <p>{item.cantidadProducto}</p>
            </div>
          </div>
            )
         :<div class="card bg-dark text-white">
           <img src={imagenCarritoVacio} class="card-img" style={{maxHeight: "40rem"}, {maxWidth: "200rem"}} alt="Imagen de carrito vacío" />
           <div class="card-img-overlay">
              <h1 class="card-title"><b>Todavía no tienes productos en tu carrito.</b></h1> 
           </div>
           </div>
        }
        </>
    );
}