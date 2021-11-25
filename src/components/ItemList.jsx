import Item from "./Item";
import React from "react";

export default function ItemList({products}){
    return(
        <>
        {products.map(product => (
          <Item 
           title = {product.title}
           imgProduct = {product.imgProduct}
           key = {product.id}
          />

        ))

        }
        </>
    );
}