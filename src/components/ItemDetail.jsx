import { useState } from "react";
import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
//import ItemCount from "./ItemCount";

export default function ItemDetail({producto}){

    /*const [count, setCount] = useState (0);
    
    const onAdd = (qty) => {
        alert("Acabas de seleccionar" + qty);
        setCount(qty + 1);
    }*/

    const [show, setShow] = useState(false);
    const handler = () => {
        setShow((show) => !show);
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
                   <ItemCount max={producto.stock}    />
                   { !show &&
                   <button onClick = {handler}  className="btn btn-success col-4">Agregar al carrito</button>
                   }
                   { show &&
                    <Link to="/cart" button type="button" className="btn btn-danger col-4">Ir al carrito</Link>
                   }
                </div>
            </div>
        </div>
    
       </>
    );
}