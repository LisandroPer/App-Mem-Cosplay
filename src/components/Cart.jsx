import { useContext } from "react";
import {CartContext} from "./CartContext";


export default function Cart(){
    const test= useContext(CartContext);//se debe indicar que contexto quiero utilizar. En este caso el cartcontext que cree.
    
    return(
       <p>Soy el carrito</p> 
    );
}