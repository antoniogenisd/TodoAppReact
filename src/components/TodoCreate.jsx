import { useState } from "react";

const TodoCreate = ({createTodo}) => { 
  const [title,setTitle] = useState('')  
  const handleSubmitAddTodo = (e) =>{
      e.preventDefault();
      if(!title.trim()){
        return setTitle("");
      }
        createTodo(title);
        setTitle("");
    }

    return(
        <form onSubmit={handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 dark:bg-gray-800 transition-all ease-linear duration-500">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input 
          className="w-full text-gray-400 outline-none bg-transparent dark:bg-transparent dark:text-gray-200 transition-all ease-linear duration-500" 
          type="text" 
          placeholder="Create a new Todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          >
          </input>
        </form>
    )
 }
 export default TodoCreate;