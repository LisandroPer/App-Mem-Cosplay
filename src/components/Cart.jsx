import { useContext, useState } from "react";
import {CartContext} from "./CartContext";
import imagenCarritoVacio from "../assets/img/fondoComicM.jpg";
import { collection, doc, setDoc, updateDoc, increment } from "firebase/firestore";
import db from "../utils/fireBaseConfig";
import Formulario from "./Formulario";



export default function Cart(){
    const test= useContext(CartContext);//se debe indicar que contexto quiero utilizar. En este caso el cartcontext que cree.
    console.log(test);
   
   const [verFormulario, setVerFormulario] = useState(false);

   function mostrarFormulario (){
     setVerFormulario(!verFormulario);
     alert("Para realizar la compra debe ingresar los datos solicitados en el formulario")
   }
   
  const [infoUsuario, setInfoUsuario] = useState([]);

  //--------------------------------------------------------------------------
  function handelSubmit (form){
    setInfoUsuario(form);
    console.log(infoUsuario);
  }
 

  //--------------------------------------------------------------------------





   const createOrder = () => { //AL HACER CLICK EN EL BOTÓN createOrder HARÁ....
     let order = { //creo el array donde irán los objetos de la orden.,
      buyer: { //los datos del comprador se encuentran harcodeados....
        name: "Leo Messi",
        email: "leomessi@futbolmail.com",
        cel: "12345678"
      },
      items: test.cartList.map(item => ({ //mapeo el carList para cambiarle el nombre a los atributos de los productos antes de enviarlos a FIREBASE
        id: item.idProducto,
        title: item.titleProducto,
        price: item.precioProducto,
        cantidad: item.cantidadProducto

      })),
      total: test.calcularPrecioTotal()
     };
     console.log(order)

     
    const createOrderInFirestore = async () =>{
        // Add a new document with a generated id
        const newOrderRef = doc(collection(db, "orders"));
        // later...
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }

       createOrderInFirestore() //PROMESA CON FUNCIÓN PARA ENVIAR ORDEN A FIREBASE.
         .then(res => alert(res.id))
         .catch(err => err)

     

      test.cartList.forEach(async(item) => { //FUNCIÓN PARA MODIFICAR EL STOCK DE FIREBASE.
        const itemRef = doc(db, "dataProducts", item.idProducto);
        await updateDoc(itemRef, {
          stock: increment(- item.cantidadProducto) //increment con el - adelante sirve para decrementar el stock de productos.
        })
      })
      test.removeList();
    }

    return(
        <>
        {test.cartList.length > 0 &&
        <div className="row justify-content-center align-items-center">
           
           <div className="row justify-content: flex-end align-items-center" style={{backgroundColor: "pink"}}>
             <h2 className="col-3">Precio total: <span class="badge bg-secondary col-4">{test.calcularPrecioTotal()}</span></h2>
             <button onClick={test.removeList} type="button" className="btn btn-danger col-4">Vaciar carrito.</button>
             <button type="button" className="btn btn-success col-3" onClick={mostrarFormulario}>Comprar todo</button>
           </div>
        </div>//RECORDAR PONER TEST.(NOMBRE DEL ARRAY O FUNCIÓN) PARA LLAMAR LOS ELEMENTOS DEL CONTEXTO GLOBAL.
        }
        {
          verFormulario &&
          
          <Formulario handelSubmit={handelSubmit}/>
        }
        {//llamo al array carList (del componente CartContext) a través del método useContext
        test.cartList.length > 0 ?
          test.cartList.map(item => 
            <div className="card text-dark bg-light mb-3">
            <img src={item.imgProducto} className="card-img-top" style={{maxHeight: "20rem"}, {maxWidth: "20rem"}} alt={item.idProducto}/>
            <div className="card-body">
              <h5 className="card-title">{item.titleProducto}</h5>
              <p className="card-text">INCLUYE: {item.productoIncluye}</p>
              <p className="card-text">Precio unitario: {item.precioProducto}</p>
              <p className="card-text">Cantidad seleccionada: {item.cantidadProducto}</p>
              <p className="card-text">Precio total: {item.precioProductos}</p>
              <button onClick={() => test.deleteItem(item.idProducto)} type="button" className="btn btn-danger col-4">Remover producto del carrito</button>
            </div> 
          </div>
            )
           
         :<div class="card bg-dark text-white">
           <img src={imagenCarritoVacio} class="card-img" style={{maxHeight: "40rem"}, {maxWidth: "200rem"}} alt="Imagen de carrito vacío" />
           <div class="card-img-overlay justify-content-center align-items-center">
              <h1 class="card-title-carrito  justify-content-center"><b>Todavía no tienes productos en tu carrito.</b></h1> 
           </div>
           </div>
        }
        </>
    );
}