

function ItemCount({title, price, includes, imgProduct, id}){
    return(
        <>
        <div className="card mb-3" style={{maxWidth: "300rem"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={imgProduct} className="img-fluid rounded-start" alt={id} />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Incluye: {includes}</p>
                    <p className="card-text">Precio: {price}</p>
                </div>
                </div>
            </div>
        </div>
        </>
       
    );
}
export default ItemCount