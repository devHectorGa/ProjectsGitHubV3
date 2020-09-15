import React, { Component } from 'react'
import EmpleadoList from '.....'
const ruta = "https://api.github.com";
const user ='dimasmendoza'
class RepositoriosApp extends React.Component{
    constructor(props){
        super(props)
        this.state={repositorios:[]}
    }
}
ComponentWillMount(){
    fetch(ruta + "/users/" + user)
    .then((response) => {
      return response.json()
     })
     .then((empleados) => {
       this.setState({ empleados: empleados })
    })
 }

 render() {
       if (this.state.empleados.length > 0) {
         return (
           <div className="container-fluid">
             <EmpleadoList listado={this.state.empleados} />       </div>
      )
   } else {
     return <p className="text-center">Cargando empleados...</p>
       }
      }