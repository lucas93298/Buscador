import React, { Component,Fragment } from 'react';

class Buscador extends Component {
    busquedaRef = React.createRef();
    obtenerDatos = (e) =>{
        e.preventDefault()
        this.props.datosBusqueda(this.busquedaRef.current.value)
    
    }

    render() {
        return (
        <Fragment>
                    <form 
                    style={{width: '100%'}}
                    onSubmit={this.obtenerDatos}
                    >
                        <h4>BUSCADOR DE IMAGENES</h4>       
                        <input type="text" ref={this.busquedaRef} className="form-control form-control-lg"  placeholder="Ejemplo: Futbol"/>
                        <input type="submit" class="btn btn-l btn-danger btn-block" value="Buscar..."/>
                    </form>
                    
                
        </Fragment>
            
        )
    }
}

export default Buscador;