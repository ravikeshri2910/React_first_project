import React from 'react'

import './DataList.css'
import DataItem from './DataItem'

const DataList = (props) => {

    // console.log('props.items' + JSON.stringify(props.items))
    return (
        <ul className="user-list">
            {props.items.map(items => (
                // console.log(items)
                // <h1>Yes</h1>
                <DataItem
                    key={items.id}
                    id={items.id}
                    name = {items.name}
                    Password = {items.Password}
                    College = {items.College}
                >
                    {/* {items.name} */}
                </DataItem>
            ))}
        </ul>
    )
}

export default DataList