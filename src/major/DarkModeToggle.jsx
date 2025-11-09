import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
         "(prefers-color-scheme: dark)"
      ).matches;
      const initial = stored ? stored === "dark" : prefersDark;

      setDarkMode(initial);
      document.documentElement.classList.toggle("dark", initial);
   }, []);

   const toggleTheme = () => {
      const newTheme = !darkMode;
      setDarkMode(newTheme);
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
   };

   return (
      <button
         onClick={toggleTheme}
         className='ml-auto flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 
                    hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'
         title='Zmień motyw'
      >
         {darkMode ? (
            <Sun className='w-5 h-5 text-yellow-400' />
         ) : (
            <Moon className='w-5 h-5 text-gray-600' />
         )}
      </button>
   );
};

export default DarkModeToggle;
