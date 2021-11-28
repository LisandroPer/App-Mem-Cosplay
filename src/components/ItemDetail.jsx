import capAmerica from "../assets/img/capamerica.jpg"

export default function ItemDetail(){
    return(
        <>
        <div className="card mb-3" style={{maxWidth: "300rem"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={capAmerica} class="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Capitan América</h5>
                    <p className="card-text">Incluye: todo el Cosplay menos el escudo</p>
                    <p className="card-text">Precio: 15000</p>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}