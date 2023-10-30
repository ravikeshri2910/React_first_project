import React, { useState , useRef } from 'react'

import './UserForm.css'
import Button from '../UI/Button'
import Wrapper from '../Helper/Wrapper'

const UserForm = (props) => {

    const userNameRef = useRef()
    const userPasswordRef = useRef()
    const userCollegeRef = useRef()

    
    const formSubmitHandler = (event) =>{
        event.preventDefault();

        const userData = {
            name : userNameRef.current.value,
            Password : userPasswordRef.current.value,
            College : userCollegeRef.current.value,
            id : Math.random().toString()
        }
        console.log(userData)

        props.onAddData(userData)

        userNameRef.current.value = ""
        userPasswordRef.current.value = ""
        userCollegeRef.current.value = ""
    
    }


    return (
        <Wrapper>
        <form onSubmit={formSubmitHandler}  >
            <div className='form-control' >
                <label >User name</label>
                <input type="text" ref={userNameRef} />
                <label >Password</label>
                <input type="text" ref={userPasswordRef}/>
                <label >College Name</label>
                <input type="text" ref={userCollegeRef}/>
            </div>
            <Button title = {'Submit'} type="submit">Add Goal</Button>
        </form>
        </Wrapper>
    )
}

export default UserForm