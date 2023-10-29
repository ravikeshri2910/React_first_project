import React, { useState } from 'react'
import './App.css';

import UserForm from './componenets/UserForms/UserForm';
import DataList from './componenets/UserForms/DataList';
import ErrorHandling from './componenets/UI/ErrorHandling'

function App() {

  const [userDetais, setUserDetais] = useState([
    // { name: 'Do all exercises!', Password:31 , id: 'g1' },
  ]);

  const [error, setError] = useState()

  const addDataHandler = enteredText => {

    if(enteredText.name.trim().length === 0 || enteredText.Password.trim().length === 0 ){
      setError({
        title : 'Invalid Input',
        message : 'Pleals Enter a valid Name and Password (non-empty value)'
      })
      return
    }

    if((enteredText.Password) < 1){
      setError({
        title : 'Invalid Input',
        message : 'Please Enter valid Password  '
      })
      return;
    }
    setUserDetais((prevGoals) => {
      return [enteredText, ...prevGoals]
    })

  };

  const errorHandler = () =>{
    setError(null)
  }
  const errorHandler2 = () =>{
    setError(null)
  }
  console.log(userDetais)
  return (
    <React.Fragment>
      {error && <ErrorHandling onConfirm = {errorHandler} header = {error.title} message = {error.message} check = {errorHandler2}/>}
      
        <div id='user-form'>
          <UserForm onAddData={addDataHandler} />
        </div>
        <div id='users'>
          {/* list */}
          <DataList items={userDetais} />
        </div>
     
    </React.Fragment>
  );
}

export default App;
