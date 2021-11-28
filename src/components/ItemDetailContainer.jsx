import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import dataProducts from "../utils/dataProducts";
import { useParams } from "react-router";


export default function ItemDetailContainer(){

    const [dato, setDato] = useState({});
    const {idProducto} = useParams();
    console.log(dato);
    console.log(idProducto);
   
    useEffect(() => {
      customFetch(dataProducts.find(producto => producto.id === parseInt(idProducto)))
       .then(res => setDato(res))
       .catch(err => alert(err))
    },[])

  return(
      <ItemDetail producto = {dato} />
  );
}