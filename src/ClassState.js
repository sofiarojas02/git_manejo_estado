import React from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";

const SECURITY_CODE = 'paradigma';



class ClassState extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            error: false,
            loading: false,
            value: '',
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

                if(this.state.value === SECURITY_CODE){
                    this.setState({loading: false})
                }else{
                    this.setState({error: true, loading: false})
                }
                
    
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

                {(this.state.error && !this.state.loading) && (
                    <Error />
                )}

                {this.state.loading && (
                    <Loading />
                )}


                <input 
                placeholder="Codigo de seguridad"
                value={this.state.value}
                onChange={(event) => {
                    this.setState({value: event.target.value})
                }
                }
                onClick={ () =>
                    this.setState({error: false}) }   
                />
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