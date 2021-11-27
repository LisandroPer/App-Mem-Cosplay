

export default function Item({imgProduct, title, id}){
    return(
    <div class="card-group">  
        <div className="card" style={{width: "18rem"}}>
            <img src={imgProduct} className="card-img-top" alt={id} />
            <div class="card-body">
                <p class="card-text">{title}</p>
            </div>
        </div>
   </div>
    );
}