import React from "react";

class Error extends React.Component {

<<<<<<< HEAD
    render(){
        return(
            <p>
                Error: el codigo es incorrecto
            </p>
=======
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        return(
            <p>Error: el codigo es incorrecto</p>
>>>>>>> 9c5e569cc87df30094ff11c2a8fcc2f4445e5e77
        )
    }
}

export {Error}