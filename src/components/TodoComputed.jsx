const TodoComputed = ({computedItemsLeft,clearCompleted}) => { 
    return(
        <section className="py-4 px-4 flex justify-between bg-white dark:bg-gray-800 dark:text-gray-200 rounded-b-md transition-all ease-linear duration-500">
              <span className="text-gray-400">{computedItemsLeft} items left</span>
              <button className="text-gray-400" onClick={clearCompleted}>Clear Completed</button>
        </section>
    )
 }
 export default TodoComputed;