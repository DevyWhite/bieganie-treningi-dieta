import React from "react";
import { Github, Instagram, Activity } from "lucide-react";

const Footer = () => {
   return (
      <footer className='flex flex-col items-center text-center gap-3 text-gray-500 text-sm py-6 bg-white shadow-inner rounded-t-xl'>
         {/* Tytuł / nazwa strony */}
         <h2 className='text-lg font-semibold text-gray-700 tracking-wide'>
            DevyTrailTales
         </h2>

         {/* Opis */}
         <p className='max-w-md text-gray-500 leading-relaxed'>
            Biegam po lesie i po kodzie - moje trasy, projekty biegowe i pomysły
            na życie w rytmie natury.
         </p>

         {/* Ikony social media */}
         <div className='flex items-center gap-6 mt-2'>
            <a
               href='https://github.com/DevyWhite'
               target='_blank'
               rel='noopener noreferrer'
               className='transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-gray-700'
               title='Zajrzyj na mój GitHub'
            >
               <Github size={20} />
            </a>
            <a
               href='https://www.instagram.com/devytrailtales'
               target='_blank'
               rel='noopener noreferrer'
               className='transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-pink-500'
               title='Zajrzyj na mój Instagram'
            >
               <Instagram size={20} />
            </a>
            <a
               href='https://www.strava.com/athletes/131638037'
               target='_blank'
               rel='noopener noreferrer'
               className='transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:text-orange-500'
               title='Zajrzyj na moją Stravę'
            >
               <Activity size={20} />
            </a>
         </div>

         {/* Copyright */}
         <p className='text-xs text-gray-400 mt-3'>
            &copy; {new Date().getFullYear()} DevyTrailTales. Wszystkie prawa
            zastrzeżone.
         </p>
      </footer>
   );
};

export default Footer;
