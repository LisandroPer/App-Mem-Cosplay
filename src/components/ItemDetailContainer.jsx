import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
//import customFetch from "../utils/customFetch";
//import dataProducts from "../utils/dataProducts";
import { useParams } from "react-router";
import { firestoreFetchOne } from "../utils/fireStoreFetch";


export default function ItemDetailContainer(){

    const [dato, setDato] = useState({});
    const {idProducto} = useParams();
  
   
    useEffect(() => {
      firestoreFetchOne(idProducto)
       .then(res => setDato(res))
       .catch(err => alert(err))
    },[])

  return(
      <ItemDetail producto = {dato} />
  );
}