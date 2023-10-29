import React from "react";
import ReactDOM  from "react-dom";

import './ErrorHandling.css'
import Button from "./Button";

const Backdrop = (props) => {
   return ( <div className="backdrop"  onClick={props.onConfirm} >
    <div className="container">
        <header>
            <h3>{props.header}</h3>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <Button checkA= {props.check} title="Okay"></Button>
        </footer>
    </div>
   </div>)
}




const ErrorHandling = (props) => {
    return (
       <React.Fragment>

        {ReactDOM.createPortal(<Backdrop onConfirm ={props.onConfirm} header = {props.header} message = {props.message} check = {props.onConfirm}/>, document.getElementById('backdrop-root'))}

      
       </React.Fragment>
           
     
    )
}

export default ErrorHandling