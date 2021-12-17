import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fireStoreFetch from "../utils/fireStoreFetch";


export default function ItemListContainer(){
   const [products, setProducts] = useState([])
   const {idCategory} = useParams();


   useEffect(() => {
     fireStoreFetch(idCategory)
      .then(result => setProducts(result))
      .catch(err => console.log(err));
    }, [idCategory])//SE PONE ID CATEGORY PARA QUE SE RENDERICE ÚNICAMENTE AL CAMBIAR DE CATEGORÍA.
    
    useEffect(() => {
        return(() => {
            setProducts([])
        })
    }, []);
    
    return(
        <>
        <div class="card-group justify-content-center">  
          <ItemList products={products} />
        </div>
        </>
    );
}