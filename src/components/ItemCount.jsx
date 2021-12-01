
import { useState } from "react"

function ItemCount(props){

   

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        if(count >= props.max){
           console.log("No tenemos stock suficiente en este momento.");
           setCount(props.max);
        }
    }

    const decrement = () =>{
        setCount(count - 1);
        if(count <= 1){
           console.log("Errore, no puede haber una cantidad negativa de stock");
           setCount(0);
        }
    }

    
        return(
            <>
            <div className="conteiner-fluid">
                <div className="row contador-estilo justify-content-center align-items-center">
                <p className="card-text">Seleccione la cantidad de productos que desa agregar</p>
                 <div className="row  justify-content-center align-items-center">
                  <button onClick={increment} className="btn btn-primary col-4">+</button>
                  <button onClick={decrement} className="btn btn-secondary col-4">-</button>
                </div>
                <div className="row justify-content-felx-start align-items-center">
                  <h2 className="col-4 colorContador">{count}</h2>
                  <button className="btn btn-success col-4">Agregar al carrito</button>
                  </div>
                </div>
            </div>
            </>
        );
}
    


export default ItemCount