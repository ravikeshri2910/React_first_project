import React from "react";

import './DataItem.css'

const DataItem = (props) => {

  return (
    <React.Fragment>
      <div className="user-item">
        <li>{'Name :- ' + props.name}</li>
        <li>{'Password :- ' + props.Password}</li>
        <li>{'College :- ' + props.College}</li>
      </div>
    </React.Fragment>


  )

}

export default DataItem