import { Link } from "react-router-dom";

export default function Item({imgProduct, title, id}){
    const newLocal = this;
    return(
    <div class="card-group">  
        <div className="card" style={{width: "18rem"}}>
            <img src={imgProduct} className="card-img-top" alt="imagen" />
            <div class="card-body">
                <p class="card-text">{title}</p>
            </div>
            <Link to={`/producto/${id}`} type="button" className="btn btn-primary">Ver detalles</Link>
           
        </div>
   </div>
    );
}