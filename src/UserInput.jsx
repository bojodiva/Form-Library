import { useState } from "react";
import UserTable from "./UserTable.jsx";

export default function UserInput() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    id: ""
  }
  )
  const [tableData, setTableData] = useState([]);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value });

  }

  function handlePasswordChange(event) {
    const value = event.target.value
    const validationErrors = {};
    let count = 0;
      
      if (value.trim() === '') {
      validationErrors.password = 'Password is required';
    }else{
         for (let i = 0; i <= value.length; i++) {
           let digits = "!@#$%^&*()_+{}[]:;<>,.?~`|-=/0123456789";
            if(digits.includes(value[i])){
              count++;
            }
         }
        
         if(count < 2){
              validationErrors.password = "password must contain at least two special character";
       } else if (value.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
      } else {
      validationErrors.password = ''
     }
       
 }
    setUser({ ...user, password: value });
    setErrors({ ...errors, ...validationErrors });
  }


  function handleEmailChange(event){
     const value = event.target.value
    const validationErrors = {};

      
      if (value.trim() === '') {
      validationErrors.email = 'Email is required';
      }else if(!value.includes('@')){
       validationErrors.email = 'provide a valid email';
      } else {
      validationErrors.email = ''
    
    }
      
      setUser({ ...user, email: value });
    setErrors({ ...errors, ...validationErrors });
  }


let lastId = 0;
  const addContact = (event) => {
    event.preventDefault();
    const { name, email, password, address } = user;
    if (name.trim() !== '' && email.trim() !== '' && address.trim !== '' && password.trim() !== '') {
       const newUser = { ...user, id: ++lastId };
    setTableData([...tableData, newUser]);
      setUser({
        name: "",
        email: "",
        password: "",
        address: ""
      })
    }
  };



  // const deleteContact = (id) => {
  //   const updatedState = tableData.filter(checkContact);
  //   function checkContact(data) {
  //     return data.id !== id;
  //   }
  //   setTableData(updatedState);
  // }

const deleteContact = (id) => {
  const index = tableData.findIndex((data) => data.id === id);
  if (index !== -1) {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  }
};



  
  

const isFormValid = !errors.email && !errors.password;

  return (
    <>
      <h1 className="contact--big-text">Information</h1>
      <form className="ui--section" onSubmit={addContact}>
        <div className="input--single">
          <label for="name">*Name</label>
          <input type="text" id="name" value={user.name} onChange={handleChange} required/>
        </div>
        <div className="input--single">
          <label for="email">*Email</label>
          <input type="email" id="email" value={user.email} onChange={handleEmailChange} />
          {errors.email && <span className="error--span">{errors.email}</span>}
        </div>
        <div className="input--single">
          <label for="password">*Password</label>
          <input type="password" id="password" value={user.password} onChange={handlePasswordChange}></input>
          {errors.password && <span className="error--span">{errors.password}</span>}
        </div>
        <div className="input--single">
          <label for="address">*Address </label>
          <textarea id="address" value={user.address} onChange={handleChange} required></textarea>
        </div>
        <div>
          <button type="submit" className="submit--button" disabled={!isFormValid}>Submit</button>
        </div>
      </form>

      <UserTable tableData={tableData} onDelete={deleteContact} />
    </>
  )


}

//deletion - cross button for delete
// field validation
// address text area
//show error back to the user


//look for react library that can help with the form validation;
//apply for the codeforgood hackathon;
//continue  the javascript book;
//complete the form validation