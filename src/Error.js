import React from "react";

class Error extends React.Component {

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        return(
            <p>Error: el codigo es incorrecto</p>
        )
    }
}

export {Error}