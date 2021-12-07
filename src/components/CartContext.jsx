import { createContext, useState } from "react";


export const CartContext = createContext();//llamo a la funciíon para crear el contexto.

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    const addToCart = (producto, qty) => { //función para agregar productos al carrito.
        let encontrar = cartList.find(item => item.idProducto === producto.id); //creo una variable en donde guardo el producto seleccionado y busco si dicho producto ya se encontraba en la CartList
        if( encontrar === undefined){ //si el producto no se encuntra dentro de carList, entonces...
        setCartList([ //...agrego el producto a carList.
              ...cartList,
              {
              idProducto: producto.id,
              imgProducto: producto.imgProduct,
              titleProducto: producto.title,
              precioProducto: producto.price,
              cantidadProducto: qty,
              precioProductos: producto.price * qty
              }
          ]);
        }else{//si el producto sí se encontraba en la CartList, entonces le sumo la cantidad seleccionada.
            encontrar.cantidadProducto += qty; //le sumo la cantidad nueva que agregué a la cantidad que ya estaba en el carrito.
            encontrar.precioProductos += producto.price * qty; //le sumo dinero en base a la nueva cantidad de elementos que se agregaron.
        }
    }
    const removeList = () => { //función para remover todos los productos del carrito.
        setCartList([]); //me setea el estado a una array vacío. FÁCIL.
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idProducto != id); //IMPORTANTE: filtra los items que sean diferentes al id y los cuarda en results (o sea que results guardará todos los elementos excepto el que eliminamos.)
        setCartList(result); //seteo el nuevo estado del CartList con todos los productos excepto el que tiene el id seleccionado.
    }
     const calcularItemQty = () => {//CALCULA LOS ELEMENTOS DEL CARRITO PARA MOSTRARLO EN EL ITEM CARTWIDGET.
         let qtys = cartList.map(item => item.cantidadProducto);
         return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0); 
     }

   return(
       <CartContext.Provider value={{
           cartList, //agrego los datos
           addToCart, //agrego la funcion para añadir productos al carrito.
           removeList,//agrego la función para elminar la lista completa de productos.
           deleteItem,// agrego la función para eliminar un producto en particular.
           calcularItemQty //agrega la función que modifica el ícono numérico del carrito (cartWidget)
       }}>
           {children}
       </CartContext.Provider>
   )
}
export default CartContextProvider