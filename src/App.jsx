import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";


const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder =(list, startIndex,endIndex) =>{
  const result = [...list];
  const [removed] = result.splice(startIndex,1)
  result.splice(endIndex,0,removed);
  return result;
}
const App = () => { 

  const [todos,setTodos] = useState(initialStateTodos);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  const createTodo =(title) =>{
    const newTodo ={
      id: Date.now(),
      title: title.trim(),
      completed:false
    };
    setTodos([...todos,newTodo]);
  }

  const removeTodo = (id) =>{
    setTodos(todos.filter((todo)=>todo.id !==id))
  }
  const updateTodo = (id)=>{
    setTodos(todos.map(todo=>todo.id === id ? {...todo,completed: !todo.completed}:todo))
  }
  const computedItemsLeft = todos.filter((todo)=>!todo.completed).length;

  const clearCompleted = () =>{
    setTodos(todos.filter((todo)=> !todo.completed))
  }

  const [filter,setFilter] = useState("all")

  const filterTodos = () =>{
    switch(filter){
      case"all":
        return todos;
      case "active":
        return todos.filter((todo)=> !todo.completed)
      case "completed":
        return todos.filter((todo)=> todo.completed)
      default:
        return todos; 
    }
  }
  const changeFilter = (filter)=> setFilter(filter);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
    )
        return;

    setTodos((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
    );
};

  return (
    <div className="bg-[url('./src/assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain bg-gray-300 dark:bg-gray-900 min-h-screen 
    dark:bg-[url('./src/assets/images/bg-mobile-dark.jpg')] 
    md:bg-[url('./src/assets/images/bg-desktop-light.jpg')] 
    md:dark:bg-[url('./src/assets/images/bg-desktop-dark.jpg')] 
    transition-all ease-linear duration-500">
      <Header></Header>
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo}></TodoCreate>

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList 
          todos={filterTodos()} 
          removeTodo={removeTodo} 
          updateTodo={updateTodo}
          />
        </DragDropContext>

        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}></TodoComputed>
        <TodoFilter changeFilter={changeFilter} filter={filter}></TodoFilter>
        </main>
        <footer className="mt-8">
          <p className="text-center text-gray-400 ">Drag and drop to the reorder list</p>
        </footer>
    </div>
  );
 };
 export default App;