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
      customFetch(dataProducts.filter(item => {
          if(idCategory === undefined){ //le indico que si la categoría es indefinida (en el caso de home con el path="/") retorne el item
              return item;
          }else{//en cambio, si tiene una categoría, llamo al idProduct y lo comparo con el idCategory
              return item.idProduct === parseInt(idCategory)
          }
          
      }))
        .then(res => setProducts(res))
        .catch(err => alert("Error" + err))
    }, [products])//pongo products aca ya que sin eso no se volvería a renderizar la página cada vez que cambio de parametros para mostrar otra clase de productos.

    return(
        <div class="card-group justify-content-center">  
        <ItemList products={products} />
        </div>
    );
}