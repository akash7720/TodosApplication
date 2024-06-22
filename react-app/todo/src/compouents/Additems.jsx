

// import "./Todo.css"
// import React, { useState } from 'react';

// const Additems = () => {
//   const [Items, setItems] = useState("");
//   const [userData, setUserData] = useState([]);

//   function SubmitHandel(e){
//     e.preventDefault();
//     setUserData([...userData, Items]);
//     console.log(userData, "userData");
//     setItems("");
//   };

//   function handleDelete(index) {
//     if (window.confirm("Are you sure to delete this item?")) {
//       const copyTask = [...userData];
//       copyTask.splice(index, 1);
//       setUserData(copyTask);
//     }
//   }

// //  function handleAllDelete(){
   
// //  }
  


//   return (
//     <div className="div-1" >
//       <div className="text-1">Add_items</div>
//       <form onSubmit={SubmitHandel}>
//         <input type="text" placeholder="Your Tasks" className="color-1" value={Items} onChange={(e) => setItems(e.target.value)} />
//         <button className="but-1" >Add Todo</button>
//       </form>

//       <div className="div-2">
        
//         { userData.map((std, index) => (
//           <li key={index}>{std}  
//           <button className="but-2" onClick={(()=>{handleDelete(index)})}>Delete</button>
//           </li>
//         ))}
//           {/* <button onClick={handleAllDelete}>All Delete</button> */}
       
//       </div>
//     </div>
//   );
// };

// export default Additems;



// import React, { useState } from 'react'

// const Todo = () => {
//     const [todo, setTodo] = useState("");
//     const [todos, setTodos] = useState([]);

//     console.log(todo, "todo")
//     console.log(todos, "todos")

//     function HandleChange(event) {
//         setTodo(event.target.value)
//     }

//     function HandleSubmit() {
//         setTodos([...todos, todo])
//         setTodo("")
//     }
    
//     function HandleDelete(i) {
//             const updatedTodos = [...todos];
//             updatedTodos.splice(i, 1);
//             setTodos(updatedTodos);
       
//      }

//      function handleAlldDelete(){
//         setTodos([])
//      }
    

//     return (
//         <div>
//             <h3>Add Todo</h3>

//             <input value={todo} onChange={HandleChange} type='text' placeholder='Do Lunch..' />
//             <button onClick={HandleSubmit}>Submit</button>

//              {todos.length ? <div>
//               <h2>Your Todos :</h2> 
//                   {todos.map((todo, i) => (
//                <p key={i}>
//                 {i+ 1}.{todo}
                
//                 <button onClick={() => HandleDelete(i)}>Delete</button></p>
//                 ))}
                
//                 {todos.length>=1 &&   <button onClick={handleAlldDelete}>Remove All</button>}
               
                
//             </div> : <h1>No todos found.</h1>}
            
//         </div>
//     )
// }

// export default Todo





import React, { useState } from 'react'

const Additems = () => {

  const [todo, settodo]=useState("");

  const [AllTodo, setAllTodo]=useState([])

  console.log(todo ,"todo" , AllTodo,"AllTodo");

  function HandleChange(event){
      settodo([event.target.value])
  }

  function HandleSubmit(){
    setAllTodo([...AllTodo,todo])
    settodo([])
  }

  function HandleDelete(i){
     const deleteTodo =[...AllTodo];
     deleteTodo.splice(i,1);
     setAllTodo(deleteTodo);

    }

    function handleAllDelete(){
      setAllTodo([])
    }

  
  return (
    <div>
      <h1>Todo</h1>
      <input value={todo} onChange={HandleChange} type='text' placeholder='Add your Task'/>
      <button onClick={HandleSubmit}>Submit</button>

      <div>
          {setAllTodo.length? 
          
          <div>
             
              {AllTodo.map ((AllTodo,i)=>(
                <p key={i}>
                  {i + 1}.{AllTodo}
                <button onClick={HandleDelete}>Delete</button>
              
                </p>
              ))}
             
          </div>
         
           :
           <h3>Todo not found</h3>}

           {AllTodo.length? <div> <button onClick={handleAllDelete}>Delete All</button></div> :<p>Add Todo</p>}
      </div>
    </div>
  )
}

export default Additems