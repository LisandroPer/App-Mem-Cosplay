import { useContext, useState } from "react";
import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext }  from "./CartContext";
//import ItemCount from "./ItemCount";

export default function ItemDetail({producto}){

    const [itemCount, setItemCount] = useState (0);
    const test = useContext(CartContext) //importo el contexto que deseo usar
    console.log("itemdetalle", test)
    const onAdd = (qty) => {
        alert("Acabas de seleccionar " + qty + " items de" + producto.title);
        setItemCount(qty);
        test.addToCart(producto, qty);//importo la función agregar al carrito y le paso los productos y la cantidad.
        console.log("Qty" + qty);
        console.log("Producto:" + producto)
    }

   


    return(
       <>
            
        <div className="card mb-3" style={{maxWidth: "300rem"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={producto.imgProduct} className="img-fluid rounded-start" alt={producto.id} />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">Incluye: {producto.includes}</p>
                    <p className="card-text">Precio: {producto.price}</p>
                    <p className="card-text">Cantidad en stock: {producto.stock}</p>
                </div>
                </div>
                <div className= "row justify-content-center align-items-center">
                   { itemCount === 0
                     ?<ItemCount stock={producto.stock}  initial={itemCount} onAdd={onAdd}  />
                  
                    : <Link to="/cart" button type="button" className="btn btn-danger col-3">Ir al carrito</Link>
                   }
                  
                </div>
            </div>
        </div>
    
       </>
    );
}