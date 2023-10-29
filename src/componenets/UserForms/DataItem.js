import React from "react";

import './DataItem.css'

const DataItem = (props) =>{

   return( <li className="user-item">{props.name + ' (' + props.Password + ')'}

  </li>)
    
}

export default DataItem