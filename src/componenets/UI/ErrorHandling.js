import React from "react";

import './ErrorHandling.css'
import Button from "./Button";


const ErrorHandling = (props) => {
    return (
        <div className="backdrop" onClick = {props.onConfirm}>
            <div className="container">
                <header className="header">
                    <h3>{props.header}</h3>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <div className="footer">
                    <Button onClick = {props.onConfirm} title="Okay"></Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorHandling