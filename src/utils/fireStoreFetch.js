import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import db from "./fireBaseConfig"


const fireStoreFetch = async (idCategory) =>{
    let q;
    if(idCategory){
         q = query(collection(db, "dataProducts"), where("idProduct", "==", idCategory));//SE ESCRIBE ASÍ POR LA DOCUMENTACIÓN DE FIREBASE.
         
    }else {
         q = query(collection(db, "dataProducts"), orderBy("title")); //si no viene nada por parámetro traerá todo.
    }
    
    const querySnapshot = await getDocs(q);
    const dataFromFireStore =  querySnapshot.docs.map(document => ({
        id: document.id, //trae el id de firebase
        ...document.data() //trae los datos internos del documento.
    })); //COLOCO DOCS POR QUE ASÍ SE ACCEDE POR DEFECTO A LA DOCUMENTACIÓN DE FIREBASE.
    return dataFromFireStore;
}
 export default fireStoreFetch;