import React from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";

const SECURITY_CODE = 'paradigma';



function UseReducer({name}){
    const [state, dispatch]= React.useReducer(reducer, initialValue)

    React.useEffect(()=> {
        console.log('Inicio efecto')

        if(state.loading){
            setTimeout(()=>{
                console.log('Inicio validacion')

                if(state.value === SECURITY_CODE){
                    dispatch({type: 'CONFIRM'})
                    // onConfirmn()
                }else{
                    dispatch({type: 'ERROR'})
                    // onError()
                }
                
                console.log('fin validacion')
            }, 2000) 
        }
        console.log('Fin efecto')
    }, [state.loading])
    
    console.log(state)
    


    if(!state.confirmed && !state.deleted){
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor escribe el codigo de seguridad </p>

                {(state.error && !state.loading) && (<Error />)}
                {state.loading && <Loading />}

                <input 
                placeholder="Codigo de seguridad"
                value={state.value}
                onChange={(event)=>{
                    dispatch({type: 'WRITE', payload: event.target.value})
                    // onWrite(event.target.value)
                }}

                
                />
                <button
                onClick={() => {
                    dispatch({type: 'CHECK'})
                    // onCheck()
                }
                }
                >Comprobar</button>
            </div>
        )
    }else if(state.confirmed && !state.deleted){
        return(
            <>
            <p>¿Estas seguro?</p>
            <button
            onClick={()=>{
                dispatch({type: 'DELETE'})
                // onDelete()
            }}
            >
                Si, eliminar
            </button>
            <button
            onClick={()=>{
                dispatch({type: 'RESET'})
                // onReset()
            }}

            >
            Nop, me arrepenti
            </button>
            </>
        )
    }else{
        return(
            <>
            <p>Eliminado con éxito</p>
            <button
            onClick={()=>{
                dispatch({type: 'RESET'})
                // onReset()
            }}

            >
            Resetear al inicio
            </button>
            </>
        )
    }


}


const initialValue = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const ReducerObject = (state, payload) => ({
    
    'CONFIRM': {
        ...state,
        loading: false,
        confirmed: true,
    },
    'ERROR': {
        ...state,
        loading: false, 
        error: true
    },

    'WRITE': {
        ...state,
        value: payload,
    },

    'CHECK': {
        ...state,
        error: false, 
        loading: true,
    },

    'DELETE': {...state, 
        deleted: true,
    },
    
    'RESET': {...state, 
        confirmed: false, 
        deleted: false, 
        value: '',
    },
})

const reducer = (state, action) => {
    if(ReducerObject(state)[action.type]){
        return ReducerObject(state, action.payload)[action.type]
    }else{
        return state
    }
}

export {UseReducer}