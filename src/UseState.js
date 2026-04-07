import React from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";

const SECURITY_CODE = 'paradigma';

function UseState({name}){
    const [value, setValue]= React.useState('')
    const [error, setError]= React.useState(false)
    const [loading, setLoading]= React.useState(false)


    React.useEffect(()=> {
        console.log('Inicio efecto')

        if(loading){
            setTimeout(()=>{
                console.log('Inicio validacion')

                if(value !== SECURITY_CODE){
                    setError(true)
                }

                setLoading(false)

                
                console.log('fin validacion')
            }, 2000) 
        }
        console.log('Fin efecto')
    }, [loading])


    console.log(value)


    return (
            <div>
                <h2>Eliminar {name}</h2>

                <p>Por favor escribe el codigo de seguridad </p>

                {(error && !loading) && (<Error />)}
                {loading && (<Loading />)}

                <input 
                placeholder="Codigo de seguridad"
                value={value}
                onChange={(event)=>{
                    setValue(event.target.value)
                }}
                onClick={() => {
                    setError(false)    
                }
                }
                
                />
                <button
                onClick={() => {
                    setError(false)
                    setLoading(true)}
                }
                >Comprobar</button>
            </div>
        )
}

export {UseState}