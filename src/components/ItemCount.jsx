
import { useEffect, useState } from "react"

function ItemCount({stock = 0, initial = 1, onAdd}){
   const [count, setCount] = useState(0);
   
   useEffect(() => {
      setCount(initial);
   }, []);

   const increment = () => {
       if(count < stock) {
           setCount(count + 1);
       }
   }
   const decrement = () => {
       if(count > initial +1){
           setCount(count -1)
       }
   }

   return(
       <>
       <div className = "row justify-content-center align-items">
        <button type="button" className="btn btn-primary col-3" onClick={increment}>+</button>
        <button type="button" className="btn btn-primary col-3" onClick={decrement}>-</button>
        <h3>{count}</h3>
        {
            stock && count
            ?<button type="button" className="btn btn-success col-3" onClick={() => onAdd(count)}>Agregar al carrito</button>
            :<button type="button" className="btn btn-light col-3" disabled>Agregar al carrito</button>
        }
        </div>
       </>
   );

}

export default ItemCount