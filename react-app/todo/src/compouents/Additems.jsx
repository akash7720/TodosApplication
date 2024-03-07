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
        //   setItems("");
    }; 

  return (
    <div>
        <h1>Additems</h1>
        <input type="text" placeholder="AddTodo" onChange={AddTodos}/>
        <button onClick={ShowData}>+</button>

        <ol>
            {/* <li>{Items} </li> */}

            { userData.map((Itemlist)=>{
                    return <li>{Itemlist} </li>
                })
            }
                
        </ol>
     </div>
  )
}

export default Additems;