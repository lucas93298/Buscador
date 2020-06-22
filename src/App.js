import React,{Component,Fragment} from 'react';
import portada from './img/portada.jpg'
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

export default class App extends Component{
      constructor(props){
            super(props);
            this.state = {
                  termino : '',
                  imagenes : [],
                  pagina: ''
            }
      }

      scroll = () =>{
            const elemento = document.querySelector('.row')
            elemento.scrollIntoView('smooth', 'end')
      }
      paginaAnterior = () =>{
             //leer el state actual
             let pagina = this.state.pagina

             //si la pagina es 1 ya no ir hacia atras
            if(pagina === 1) return null;
             // sumar uno a la pagina actual
             pagina-=1;
             //agregar el cambio al state
             this.setState({
                   pagina
             }, () =>{
                   this.consultarApi()
                   this.scroll();
             })
             console.log(pagina)
      }
      paginaSiguiente = () =>{
            //leer el state actual
            let pagina = this.state.pagina
            // sumar uno a la pagina actual
            pagina+=1;
            console.log(pagina)
            //agregar el cambio al state
            this.setState({
                  pagina
            }, () =>{
                  this.consultarApi()
                  this.scroll()
            }) 
      }
     
      consultarApi = () =>{
            const url = `https://pixabay.com/api/?key=16691186-8e0d54e914c97056dc41ceacb&q=${this.state.termino}&per_page=30&page=${this.state.pagina}`
            fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({
                  imagenes: resultado.hits
            }))
      }
      datosBusqueda = (termino) => {
            this.setState({
                  termino: termino,
                  pagina: 1
            }, () =>{
                  this.consultarApi();
            })
      }

  render(){
  
  return (
      <Fragment>
          
            <div
               className="content-img" 
                  style={{
                  height : '100vh',
                  width: '100vw',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundImage: `url(${portada})`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundAttachment: 'fixed'
                  
                  }}>             
                  <div style={{
                        width:'35vw',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center'
                        }} className="content-busqueda">
                        <Buscador datosBusqueda={this.datosBusqueda}/>
                  </div>
                </div>
                <div className="row justify-content-center">
                <Resultado
                  imagenes={this.state.imagenes}
                  paginaAnterior={this.paginaAnterior}
                  paginaSiguiente={this.paginaSiguiente}
                /> 
                </div>
                     
          
      </Fragment>     
)
}
}