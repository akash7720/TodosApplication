

import "./Todo.css"
import React, { useState } from 'react';

const Additems = () => {
  const [Items, setItems] = useState("");
  const [userData, setUserData] = useState([]);

  function SubmitHandel(e){
    e.preventDefault();
    setUserData([...userData, Items]);
    console.log(userData, "userData");
    setItems("");
  };

  function handleDelete(index) {
    if (window.confirm("Are you sure to delete this item?")) {
      const copyTask = [...userData];
      copyTask.splice(index, 1);
      setUserData(copyTask);
    }
  }

//  function handleAllDelete(){
   
//  }
  


  return (
    <div className="div-1" >
      <div className="text-1">Add_items</div>
      <form onSubmit={SubmitHandel}>
        <input type="text" placeholder="Your Tasks" className="color-1" value={Items} onChange={(e) => setItems(e.target.value)} />
        <button className="but-1" >Add Todo</button>
      </form>

      <div className="div-2">
        
        { userData.map((std, index) => (
          <li key={index}>{std}  
          <button className="but-2" onClick={(()=>{handleDelete(index)})}>Delete</button>
          </li>
        ))}
          {/* <button onClick={handleAllDelete}>All Delete</button> */}
       
      </div>
    </div>
  );
};

export default Additems;
