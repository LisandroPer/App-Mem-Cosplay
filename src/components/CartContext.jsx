import { createContext, useState } from "react";


export const CartContext = createContext();//llamo a la funciíon para crear el contexto.

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    const addToCart = (producto, qty) => { //función para agregar productos al carrito.
          setCartList([
              ...cartList,
              {
              idProducto: producto.id,
              imgProducto: producto.imgProduct,
              titleProducto: producto.title,
              precioProducto: producto.price,
              cantidadProducto: qty
              }
          ]);
    }

   return(
       <CartContext.Provider value={{
           cartList, //agrego los datos
           addToCart //agrego la funcion para añadir productos al carrito.
       }}>
           {children}
       </CartContext.Provider>
   )
}
export default CartContextProvider