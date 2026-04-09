import React from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";

const SECURITY_CODE = 'paradigma';

function UseReducer({name}){
    const [state, dispatch]= React.useReducer(reducer, initialValue)

const onConfirmn = () => dispatch({type: actionTypes.confirm})
const onError = ()=> dispatch({type: actionTypes.error})
const onCheck = () => dispatch({type: actionTypes.check})
const onDelete = ()=> dispatch({type: actionTypes.delete})
const onReset = ()=> dispatch({type: actionTypes.reset})
const onWrite = ({target: {value}})=>{
    dispatch({type: actionTypes.write, payload: value})
}



    React.useEffect(()=> {
        console.log('Inicio efecto')

        if(state.loading){
            setTimeout(()=>{
                console.log('Inicio validacion')

                if(state.value === SECURITY_CODE){
                    onConfirmn()
                }else{
                    onError()
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
                onChange={onWrite}

                
                />
                <button
                onClick={onCheck}
                >Comprobar</button>
            </div>
        )
    }else if(state.confirmed && !state.deleted){
        return(
            <>
            <p>¿Estas seguro?</p>
            <button
            onClick={onDelete}
            >
                Si, eliminar
            </button>
            <button
            onClick={onReset}

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
            onClick={onReset}

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

const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    write: 'WRITE',
    check: 'CHECK',
    delete: 'DELETE',
    reset: 'RESET',
}

const ReducerObject = (state, payload) => ({
    
    [actionTypes.confirm]: {
        ...state,
        loading: false,
        confirmed: true,
    },
    [actionTypes.error]: {
        ...state,
        loading: false, 
        error: true
    },

    [actionTypes.write]: {
        ...state,
        value: payload,
    },

    [actionTypes.check]: {
        ...state,
        error: false, 
        loading: true,
    },

    [actionTypes.delete]: {...state, 
        deleted: true,
    },
    
    [actionTypes.reset]: {...state, 
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