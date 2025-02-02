

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





// import React, { useEffect, useState } from 'react'

// const Additems = () => {

//   const [todo, settodo]=useState("");

//   const [AllTodo, setAllTodo]=useState([])

//   console.log( AllTodo,"AllTodo");

//   function HandleChange(event){
//       settodo([event.target.value])
//   }

//   function HandleSubmit(){
//     setAllTodo([...AllTodo,todo])
//     settodo([])
//   }

//   function HandleDelete(i){
//      const deleteTodo =[...AllTodo];
//      deleteTodo.splice(i,1);
//      setAllTodo(deleteTodo);

//     }

//     function handleAllDelete(){
//       setAllTodo([])
//     }


    



  
//   return (
//     <div>
//       <h1>Todo</h1>
//       <input value={todo} onChange={HandleChange} type='text' placeholder='Add your Task'/>
//       <button onClick={HandleSubmit}>Submit</button>

//       <div>
//           {setAllTodo.length? 
          
//           <div>
             
//               {AllTodo.map ((AllTodo,i)=>(
//                 <p key={i}>
//                   {i + 1}.{AllTodo}
//                 <button onClick={HandleDelete}>Delete</button>
              
//                 </p>
//               ))}
             
//           </div>
         
//            :
//            <h3>Todo not found</h3>}

//            {AllTodo.length? <div> <button onClick={handleAllDelete}>Delete All</button></div> :<p>Add Todo</p>}
//       </div>
//     </div>
//   )
// }

// export default Additems










import React, { useEffect, useState } from 'react'

const Additems = () => {
  const [todo, settodo] = useState("");
  const [AllTodo, setAllTodo] = useState([]);

  // useEffect(() => {
  //   // Retrieve todos from localStorage when the component mounts
  //   const savedTodos = JSON.parse(localStorage.getItem('todos'));
  //   if (savedTodos) {
  //     setAllTodo(savedTodos);
  //   }
  // }, []);

  useEffect(() => {
    // Save todos to localStorage whenever they are updated
    localStorage.setItem('todos', JSON.stringify(AllTodo));
  }, [AllTodo]);


  console.log(AllTodo, "AllTodo");

  function HandleChange(event) {
    settodo(event.target.value);
  }

  function HandleSubmit() {
    setAllTodo([...AllTodo, todo]);
    settodo("");
  }

  function HandleDelete(i) {
    const deleteTodo = [...AllTodo];
    deleteTodo.splice(i, 1);
    setAllTodo(deleteTodo);
  }

  function handleAllDelete() {
    setAllTodo([]);
  }

  return (
    <div>
      <h1>Todo</h1>
      <input value={todo} onChange={HandleChange} type='text' placeholder='Add your Task' />
      <button onClick={HandleSubmit}>Submit</button>

      <div>
        {AllTodo.length ? (
          <div>
            {AllTodo.map((todo, i) => (
              <p key={i}>
                {i + 1}.{todo}
                <button onClick={() => HandleDelete(i)}>Delete</button>
              </p>
            ))}
          </div>
        ) : (
          <h3>Todo not found</h3>
        )}

        {AllTodo.length ? (
          <div><button onClick={handleAllDelete}>Delete All</button></div>
        ) : (
          <p>Add Todo</p>
        )}
      </div>
    </div>
  );
}

export default Additems;







// import React, { useState, useEffect } from 'react';

// const AddItems = () => {
//   const [todo, setTodo] = useState("");
//   const [dateTime, setDateTime] = useState("");
//   const [allTodo, setAllTodo] = useState([]);

//   // Load saved todos from localStorage when the component mounts
//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem('todos'));
//     if (savedTodos) {
//       setAllTodo(savedTodos.map(todo => ({
//         ...todo,
//         startTime: new Date(todo.startTime) // Convert back to Date object
//       })));
//     }
//   }, []);

//   // Save todos to localStorage whenever they are updated
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(allTodo));
//   }, [allTodo]);

//   function handleChange(event) {
//     setTodo(event.target.value);
//   }

//   function handleDateTimeChange(event) {
//     setDateTime(event.target.value);
//   }

//   function handleSubmit() {
//     const newTodo = { text: todo, dateTime: new Date(dateTime), startTime: new Date(), running: true };
//     setAllTodo([...allTodo, newTodo]);
//     setTodo("");
//     setDateTime("");
//   }

//   function handleDelete(index) {
//     const updatedTodos = allTodo.filter((_, i) => i !== index);
//     setAllTodo(updatedTodos);
//   }

//   function handleAllDelete() {
//     setAllTodo([]);
//   }

//   function toggleTimer(index) {
//     setAllTodo(allTodo.map((todo, i) => {
//       if (i === index) {
//         if (todo.running) {
//           // Pause timer
//           return { ...todo, running: false, elapsed: Date.now() - todo.startTime.getTime() };
//         } else {
//           // Resume timer
//           return { ...todo, running: true, startTime: new Date(Date.now() - todo.elapsed) };
//         }
//       }
//       return todo;
//     }));
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAllTodo(todos => todos.map(todo => {
//         if (todo.running) {
//           return { ...todo, elapsed: Date.now() - todo.startTime.getTime() };
//         }
//         return todo;
//       }));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   function formatTime(duration) {
//     const seconds = Math.floor((duration / 1000) % 60);
//     const minutes = Math.floor((duration / (1000 * 60)) % 60);

//     return `${minutes}m ${seconds}s`;
  
//   }

//   function formatDateTime(date) {
//     return date.toLocaleString();
//   }

//   return (
//     <div>
//       <h1>Todo</h1>
//       <input value={todo} onChange={handleChange} type='text' placeholder='Add your Task'/>
//       <input type='datetime-local' value={dateTime} onChange={handleDateTimeChange}/>
//       <button onClick={handleSubmit}>Submit</button>

//       <div>
//         {allTodo.length ? (
//           <div>
//             {allTodo.map((todo, i) => (
//               <div key={i}>
//                 <p>
//                   {i + 1}. {todo.text} - {formatDateTime(todo.dateTime)} - {formatTime(todo.elapsed || 0)}
//                   <button onClick={() => handleDelete(i)}>Delete</button>
//                   <button onClick={() => toggleTimer(i)}>
//                     {todo.running ? 'Pause' : 'Resume'}
//                   </button>
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <h3>Todo not found</h3>
//         )}

//         {allTodo.length ? (
//           <div><button onClick={handleAllDelete}>Delete All</button></div>
//         ) : (
//           <p>Add Todo</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AddItems;