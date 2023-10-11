const TodoFilter = ({changeFilter,filter}) => { 
    return(
        <section className="px-4 container mx-auto">
              <div className=" rounded-md flex justify-center gap-4 mt-8 p-4 bg-white dark:bg-gray-800 dark:text-gray-200 transition-all ease-linear duration-500">
                <button className={ `${filter === "all" ? "text-blue-600 hover:text-gray-500 transition-all ease-linear duration-300":"text-gray-400 hover:text-blue-500 transition-all ease-linear duration-300"}`} 
                onClick={()=> changeFilter('all')}>All
                </button>
                <button className={ `${filter === "active" ? "text-blue-600 hover:text-gray-500 transition-all ease-linear duration-300":"text-gray-400 hover:text-blue-500 transition-all ease-linear duration-300"}`}
                onClick={()=> changeFilter('active')}>Active
                </button>
                <button className={ `${filter === "completed" ? "text-blue-600 hover:text-gray-500 transition-all ease-linear duration-300":"text-gray-400 hover:text-blue-500 transition-all ease-linear duration-300"}`}
                onClick={()=> changeFilter('completed')}>Completed
                </button>
              </div>
        </section>
    )
 }
 export default TodoFilter;