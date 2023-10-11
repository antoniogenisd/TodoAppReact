import IconCross from "./icons/IconCross"
import IconCheck from "./icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(({todo,removeTodo,updateTodo, ...props}, ref) => { 
    const {id,title,completed}=todo;
    
    return(
        <article {...props} ref={ref} className="flex gap-4 border-b-gray-400 border-b transition-all ease-linear duration-500 dark:bg-gray-800">
              <button 
                  className={`w-5 h-5 rounded-full border-2 
                  ${completed ? "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  :" inline-block"
                 }`} 
              onClick={()=>updateTodo(id)}
              >
                {completed && <IconCheck/> }
              </button>
              <p 
                className={`text-gray-600 dark:text-gray-300 flex-grow 
                ${completed && "line-through"
                }`}
              >
                {title}
              </p>
              <button className="flex-none " onClick={()=>removeTodo(id)}>
                <IconCross/>
              </button>
        </article>
    );
 })
 export default TodoItem;