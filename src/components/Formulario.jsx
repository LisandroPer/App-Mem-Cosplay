import { useContext } from "react";
import { CartContext }  from "./CartContext";
import { useState } from "react";



function Formulario ({handelSubmit}){

   const [form, setFomr] = useState({
       name: "",
       lastName: "",
       cel: "",
       mail: ""

   });
   const test = useContext(CartContext);
   
   function handlerInputChange(e){
        const {name, value} = e.target;
        setFomr({...form, [name]: value});
        console.log(form)
        

   }

  /* function handelSubmit (e){
       e.preventDefault();
       console.log(form)
   }*/
    return(
        <>
         
           
            <div class="form-floating ">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="mail" onChange={handlerInputChange}/>
                <label for="floatingInput">Ingrese su Email</label>
                <br />
                <div>
                <textarea class="form-control" placeholder="Ingrese su celular" id="floatingTextarea" name="cel" onChange={handlerInputChange}></textarea>
                <label for="floatingTextarea">Ingrese su celular</label>
                </div>
           
                  <div className="row form-1 justify-content-center">
                    <div className="col-5">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" id="userName" name="name" onChange={handlerInputChange}/>
                    </div>
                    <div className="col-5">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id="userLastName" name="lastName" onChange={handlerInputChange}/>
                    </div>
                    
                </div>
                 <button type="button-btnform" id="btn-finalizar" class="btn btn-success" onSubmit={()=> handelSubmit(form)}>AÑADIR INFORMACIÓN</button>
             </div>
           
            
        </>
    );
}

export default Formulario