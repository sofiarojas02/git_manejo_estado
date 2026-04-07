import React from "react";

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

                {error && (
                    <p>Error: el codigo es incorrecto</p>
                    )}

                {loading && (
                    <p>Cargando...</p>
                    )}

                <input 
                placeholder="Codigo de seguridad"
                value={value}
                onChange={(event)=>{
                    setValue(event.target.value)
                }}
                
                />
                <button
                onClick={() => setLoading(true)}
                >Comprobar</button>
            </div>
        )
}

export {UseState}