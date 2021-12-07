import {AiOutlineShoppingCart} from "react-icons/ai"
import  { CartContext } from "./CartContext";
import { useContext, useState } from "react";

export default function CardWidget(){
    const test = useContext(CartContext)
    return(
        <>
        <span class="badge bg-secondary">{test.calcularItemQty()}</span>
        <AiOutlineShoppingCart />
        </>
    );
}