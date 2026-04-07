import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            error: true,
            loading: false,
        }
    }

    // // componentWillMount
    // UNSAFE_componentWillMount(){
    //     console.log('componentWillmount')
    // }
    // componentDidMount(){
    //     console.log('componentDidMount')
    // }
    // componentWillUnmount(){
    //     console.log('componentWillUnmount')
    // }

    componentDidUpdate(){

        if(this.state.loading){
            setTimeout(()=>{
                console.log('Inicio validacion')
                
                this.setState({loading: false})
    
                console.log('fin validacion')
    
            }, 2000) 
        }

        console.log('ACTUALIZACION')

    }

    render(){
        return(
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor escribe el codigo de seguridad </p>

                {this.state.error && (
                    <p>Error: el codigo es incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}


                <input placeholder="Codigo de seguridad"/>
                <button
                onClick={()=>
                    this.setState({loading: true})
                }
                >Comprobar</button>
            </div>
        )
    }
}

export {ClassState}