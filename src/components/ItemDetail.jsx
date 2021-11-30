import { useState } from "react";
import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
//import ItemCount from "./ItemCount";

export default function ItemDetail({producto}){

    const [Count, setCount] = useState (0);
    
    const onAdd = (qty) => {
        alert("Acabas de seleccionar" + qty);
        setCount(qty);
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
                {
                    Count === 0
                    ?<ItemCount max={producto.stock} initiall = {Count}  onClick = {onAdd} />
                    :<Link to="/cart" button type="button" className="btn btn-success">Ir al carrito</Link>
                }
            </div>
        </div>
    
       </>
    );
}