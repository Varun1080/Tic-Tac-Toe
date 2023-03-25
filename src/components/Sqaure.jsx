import React from "react";

const Square=(props)=>{
    return <div className="d-flex" onClick={props.onClick}>
        <h1>{props.value}</h1>
    </div>
}

export default Square;