import React, { useState } from 'react'

import './UserForm.css'
import Button from '../UI/Button'
import Wrapper from '../Helper/Wrapper'

const UserForm = (props) => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    

    const userNameHandler = (event)=>{
        setUserName(event.target.value)
    }
    const userPasswordHandler = (event)=>{
        setUserPassword(event.target.value)
    
    }

    
    const formSubmitHandler = (event) =>{
        event.preventDefault();

        const userData = {
            name : userName,
            Password : userPassword,
            id : Math.random().toString()
        }
        // console.log(userData)

        props.onAddData(userData)
       
        setUserName('')
        setUserPassword('')
    }


    return (
        <Wrapper>
        <form onSubmit={formSubmitHandler}  >
            <div className='form-control' >
                <label >User name</label>
                <input value={userName} type="text" onChange={userNameHandler} />
                <label >Password</label>
                <input value={userPassword} type="text" onChange={userPasswordHandler}/>
            </div>
            <Button title = {'Submit'} type="submit">Add Goal</Button>
        </form>
        </Wrapper>
    )
}

export default UserForm