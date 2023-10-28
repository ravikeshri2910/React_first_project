import React from "react";

import './DataItem.css'

const DataItem = (props) =>{

   return( <li className="user-item">{props.name + ' (' + props.age + ')'}
  </li>)
    
}

export default DataItem