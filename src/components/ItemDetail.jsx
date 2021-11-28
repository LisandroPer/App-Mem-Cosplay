
import React from "react";
//import ItemCount from "./ItemCount";

export default function ItemDetail({producto}){
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
                </div>
                </div>
            </div>
        </div>
    
       </>
    );
}