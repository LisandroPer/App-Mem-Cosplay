import { Component } from "react"

class ItemCount extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    

    increment = () => {
        this.setState({count: this.state.count + 1});
        if(this.state.count >= this.props.max){
           console.log("No tenemos stock suficiente en este momento.");
           this.setState({count: this.state.count = this.props.max});
        }
    }

    decrement = () =>{
        this.setState({count: this.state.count - 1});
        if(this.state.count <= 0){
           console.log("Errore, no puede haber una cantidad negativa de stock");
           this.setState({count: this.state.count = 0});
        }
    }

    render(){
        return(
            <>
            <div className="conteiner-fluid">
                <div className="row contador-estilo justify-content-center align-items-center">
                <p className="card-text">Seleccione la cantidad de productos que desa agregar</p>
                 <div className="row  justify-content-center align-items-center">
                  <button onClick={this.increment} className="btn btn-primary col-4">+</button>
                  <button onClick={this.decrement} className="btn btn-secondary col-4">-</button>
                </div>
                <div className="row justify-content-felx-start align-items-center">
                  <h2 className="col-4 colorContador">{this.state.count}</h2>
                  <button className="btn btn-success col-4">Agregar al carrito</button>
                  </div>
                </div>
            </div>
            </>
        );
     }
    
}

export default ItemCount