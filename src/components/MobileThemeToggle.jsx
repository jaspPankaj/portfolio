import { useState,useEffect } from "react";
import{ Moon, Sun } from "lucide-react";
import { cn } from "../lib/util";

export const MobileThemeToggle = () => {

    const [isDarkMode ,setIsDarkMode] = useState(false);

    useEffect(()=>{
        const storedTheme=localStorage.getItem("theme")
        if(storedTheme === "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            
        }
        else{
            localStorage.setItem("theme","light")
            setIsDarkMode(false);
        }
    } , []);

    const toggleThem = () =>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }
        else
        {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);

        }
    };

     return <button onClick={toggleThem} 
                   className={ cn( "fixed md:hidden top-4 right-20 z-50 p-2",
                                   "round-full transition-color duration-300",
                                   "focus:outline-hidden"

    )}>
        {" "}
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> 
        : <Moon className="h-6 w-6 text-blue-300"/>}
        </button>
    
}; 