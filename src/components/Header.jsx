import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const inicialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => { 
  const [darkMode,setDarkMode] = useState(inicialStateDarkMode);
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark")
      localStorage.setItem('theme','dark');
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme','light');
    }
  },[darkMode])
    return(
      <header className="container mx-auto px-4 dark:bg-transparent md:max-w-xl">
        <div className="flex justify-between">
          <h1 className="uppercase text-white dark:text-gray-200 px-4 pt-8 text-2xl font-semibold tracking-[0.3em]">ToDo</h1>
          <button onClick={()=>setDarkMode(!darkMode)}>
            {
              darkMode ? <IconSun/> : <IconMoon/>
            }
          </button>
        </div>
      </header>
    )
 }

 export default Header;