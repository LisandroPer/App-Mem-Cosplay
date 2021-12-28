
import { useEffect, useState } from "react"
import { CartContext } from "./CartContext"
import { useContext } from "react"
function ItemCount({stock = 0, initial = 1, onAdd}){ //LE PASÉ LA FUNCIÓN POR PARÁMETROS. DESDE EL ITEMDETAIL
   const [count, setCount] = useState(0);
   const test = useContext(CartContext)

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
        <button type="button" className="btn-btn1 btn-primary col-3" onClick={increment}>+</button>
        <button type="button" className="btn-btn1 btn-primary col-3" onClick={decrement}>-</button>
        <div className="justify-content-center align-items">
          <h3 className="contador col-1">{count}</h3>
        </div>
        {
            stock && count
            ?<button type="button" className="btn-btn2 btn-success col-3" onClick={() => onAdd(count)}>Add</button>//ACA ESTA LA FUNCIÓN QUE SE PASÓ POR PARÁMETROS.
            :<button type="button" className="btn-btn2 btn-light col-3" disabled>Add</button>
        }
        </div>
       </>
   );

}

export default ItemCount