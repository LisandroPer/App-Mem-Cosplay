import { Link } from "react-router-dom";

export default function Item({ imgProduct, title, id}){
    const newLocal = this;
    return(
    <div className="card-group">  
        <div className="card-primaria justify-content-center" style={{width: "18rem"}}>
            <img src={imgProduct} class="card-img-top" alt="..." />
            <div className="card-body justify-content-center">
                <p className="card-text">{title}</p>
                <div className="card-button justify-content-center align-items-end">
                  <Link to={`/producto/${id}`} type="button" className="btn btn-primary col-12">Ver detalles</Link>
                </div>
                
            </div>
            
        </div>
   </div>
    );
}