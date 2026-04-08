import React from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";

const SECURITY_CODE = 'paradigma';

function UseState({name}){
    const [state, setState]= React.useState({
        value: '',
        error: false,
        loading: false,
    })

    React.useEffect(()=> {
        console.log('Inicio efecto')

        if(state.loading){
            setTimeout(()=>{
                console.log('Inicio validacion')

                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        loading: false,
                    })
                }else{
                    setState({...state,loading: false, error: true})
                }



                
                console.log('fin validacion')
            }, 2000) 
        }
        console.log('Fin efecto')
    }, [state.loading])

    console.log(state)



    return (
            <div>
                <h2>Eliminar {name}</h2>

                <p>Por favor escribe el codigo de seguridad </p>

                {(state.error && !state.loading) && (<Error />)}
                {state.loading && (<Loading />)}

                <input 
                placeholder="Codigo de seguridad"
                value={state.value}
                onChange={(event)=>{
                    setState({
                        ...state,
                        value: event.target.value})
                }}

                
                />
                <button
                onClick={() => {
                    setState({
                        ...state,
                        error: false, loading: true})
                }
                }
                >Comprobaremos</button>
            </div>
        )
}

export {UseState}