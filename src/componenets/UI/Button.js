import React from 'react'

import './Button.css'



const Button = (props) => {
console.log('here')
    return (
        <button className="button" onClick={props.checkA}>
            {props.title}
        </button>
    )

}

export default Button