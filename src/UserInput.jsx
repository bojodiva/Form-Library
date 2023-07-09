import {useState} from "react";
import UserTable from "./UserTable.jsx";

export default function UserInput(){
 
 const [user, setUser] = useState({ 
   name: "",
    email: "",
    address: ""
}
)
const[tableData, setTableData] = useState([]);

  
  
  

  function handleChange(event){
    console.log(event.target);
    setUser({...user, [event.target.id]: event.target.value});
  }

  
const addContact = (event) => {
event.preventDefault();
  const {name, email, address} = user;
    if (name.trim() !== '' && email.trim() !== '' && address.trim !== '') {
      setTableData([...tableData, user]);
      setUser({
        name: "",
        email: "",
        address: ""
      })
    }
  };
  
  
  return(
    <>
      <form className="ui--section" onSubmit={addContact}>
        <div className="input--single">
        <label for="name">*Name</label>
        <input type="text" id="name" value={user.name} onChange= {handleChange}/>
        </div>
        <div className="input--single">
          <label for="email">*Email</label>
         <input type="email" id="email" value={user.email} onChange= {handleChange}/>
          </div>
         <div className="input--single">
          <label for="address">*Address </label>
        <textarea id="address" value={user.address} onChange= {handleChange}></textarea>
          </div>
<div>
  <button type="submit" className="submit--button">Submit</button>
</div>
      </form>

      <UserTable tableData={tableData}/>
    </>
  )
}

//deletion - cross button for delete
// field validation
// address text area
//show error back to the user