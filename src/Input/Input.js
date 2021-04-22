import React from "react";

const Input = (props) => {

    return (
        <form onSubmit={props.onSubmit} className="container"> 
            <input onChange={props.onChange} value={props.boxValue} placeholder={props.placeholder}/>
            <button className="btn" type="submit">{props.buttonText}</button>
            <h1>{props.message}</h1>
        </form>
    )
}

export default Input;