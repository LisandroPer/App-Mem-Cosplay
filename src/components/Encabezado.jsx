import logomemcosplay from "../assets/img/logomMemCosplay.jpg"

export default function Encabezado(){
    return(
        <>
        <div className="color-encabezado justify-content-center">
         <div className="row">
            <div className="col">
             <img src={logomemcosplay} alt="Mem cosplay" id="imagenLogo" />
        
        
             <h1 id="colorEncabezado" className="animacionEncabezado">MEM Cosplay</h1>
             <h2 id="colorEncabezadoH2" className="animacionEncabezado">La mejor calidad</h2>
            </div>
        </div>
        </div>
        </>
    );
}