import React, { useState } from 'react'
import './App.css';

import UserForm from './componenets/UserForms/UserForm';
import DataList from './componenets/UserForms/DataList';
import ErrorHandling from './componenets/UI/ErrorHandling'
function App() {

  const [userDetais, setUserDetais] = useState([
    // { name: 'Do all exercises!', age:31 , id: 'g1' },
  ]);

  const [error, setError] = useState()

  const addDataHandler = enteredText => {

    if(enteredText.name.trim().length === 0 || enteredText.age.trim().length === 0 ){
      setError({
        title : 'Invalid Input',
        message : 'Pleals Enter a valid Name and age (non-empty value)'
      })
      return
    }

    if((enteredText.age) < 1){
      setError({
        title : 'Invalid Input',
        message : 'Please Enter valid age  '
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
  console.log(userDetais)
  return (
    <div>
      {error && <ErrorHandling onConfirm = {errorHandler} header = {error.title} message = {error.message}/>}
      <div>
        <div id='user-form'>
          <UserForm onAddData={addDataHandler} />
        </div>
        <div id='users'>
          {/* list */}
          <DataList items={userDetais} />
        </div>
      </div>
    </div>
  );
}

export default App;
