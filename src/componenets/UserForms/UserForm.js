import React, { useState } from 'react'

import './UserForm.css'
import Button from '../UI/Button'

const UserForm = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    

    const userNameHandler = (event)=>{
        setUserName(event.target.value)
    }
    const userAgeHandler = (event)=>{
        setUserAge(event.target.value)
    
    }

    
    const formSubmitHandler = (event) =>{
        event.preventDefault();

        const userData = {
            name : userName,
            age : userAge,
            id : Math.random().toString()
        }
        console.log(userData)

        props.onAddData(userData)
        // console.log(userAge)
        console.log('here')
        setUserName('')
        setUserAge('')
    }


    return (
        <form onSubmit={formSubmitHandler}  >
            <div className='form-control' >
                <label >User name</label>
                <input value={userName} type="text" onChange={userNameHandler} />
                <label >Age</label>
                <input value={userAge} type="number" onChange={userAgeHandler}/>
            </div>
            <Button title = {'Submit'} type="submit">Add Goal</Button>
        </form>
    )
}

export default UserForm