import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import dataProducts from "../utils/dataProducts";
import { useParams } from "react-router";
//const { dataProducts } = require("../utils/dataProducts")



export default function ItemListContainer(){
   const [products, setProducts] = useState([])
   console.log(products);
   
   const {idCategory} = useParams();

   useEffect(() => {
    customFetch(dataProducts.filter(item => item.idProduct == parseInt(idCategory)))
    .then(res => setProducts(res))
    .catch(err => alert("Error" + err))

   }, [])

    return(
        <ItemList products={products} />
    );
}