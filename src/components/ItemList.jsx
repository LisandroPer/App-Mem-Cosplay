import Item from "./Item";
import React from "react";



export default function ItemList({products}){
    return(
        <>

        {
        products.length > 0 //solamente me lo mapeará cuando tenga al menos 1 dato

        ?products.map(product => (
          <Item 
           title = {product.title}
           imgProduct = {product.imgProduct}
           id = {product.id}
          />
        ))
        :<h3>Cargando...</h3> //mientras, aparecerá el cartel de "cargando..."

        }
        </>
    );
}