import toast from 'react-hot-toast'
import'./Todo.css'
import React, { useState } from 'react'

const Additems = () => {
    const[Items,setItems] =useState("")
    const [userData , setUserData]=useState([])


    function AddTodos(event){
        setItems(event.target.value)
    }

    function ShowData(){
        setUserData((OldUserData)=>{
           return([...OldUserData,Items])
           
        });
        
    }; 

  return (
    <div className='color1'>
               <div className='color2'>
        <h1>Add TO Do</h1>
        <input type="text" placeholder="AddTodo" className='w-h' onChange={AddTodos}/>
        <button onClick={ShowData}>+</button>
      <div >
      { userData.map((Itemlist)=>{
           
                return <li>{Itemlist} </li> 
                
            
                })
                
                
            }
            
      </div>
    </div>
    </div>
  )
}

export default Additems;




