import { doc, getDoc } from "firebase/firestore";
import { collection, query, orderBy, where, getDocs } from "@firebase/firestore";
import db from "./fireBaseConfig"


export default async function fireStoreFetch(idCategory) {
    let q;
    if (idCategory) {
        q = query(collection(db, "dataProducts"), where("idProduct", "==", idCategory)); //SE ESCRIBE ASÍ POR LA DOCUMENTACIÓN DE FIREBASE.

    } else {
        q = query(collection(db, "dataProducts"), orderBy("title")); //si no viene nada por parámetro traerá todo.
    }

    const querySnapshot = await getDocs(q);
    const dataFromFireStore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data() //trae los datos internos del documento.
    })); //COLOCO DOCS POR QUE ASÍ SE ACCEDE POR DEFECTO A LA DOCUMENTACIÓN DE FIREBASE.
    return dataFromFireStore;
}

export const firestoreFetchOne = async (idProducto) =>{ //FUNCIÓN PARA UTILIZAR EN EL ITEMDETAIL, YA NO OBTIENE TODOS LOS OBJETOS SINO 1 SOLO. 
    const docRef = doc(db, "dataProducts", idProducto); //utilizo doc ya que es un único elemento y no una colección (collection).
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return {
            id: idProducto,
            ...docSnap.data()
        }
    }else{
        console.log("no se encontró el producto");
    }
}
