import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

const App = () => {
   return (
      <Router>
         <div className='flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300'>
            {/* HEADER */}
            <header className='bg-white dark:bg-gray-800 shadow-sm dark:shadow-none transition-colors duration-300'>
               <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
                  <Header />
               </div>
            </header>

            {/* MAIN CONTENT */}
            <main className='flex flex-1 flex-col md:flex-row w-full max-w-6xl mx-auto px-4 py-8 gap-8 transition-colors duration-300'>
               {/* NAVIGATION */}
               <aside className='md:w-1/4 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700 p-4 transition-colors duration-300'>
                  <Navigation />
               </aside>

               {/* PAGE CONTENT */}
               <section className='flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700 p-6 transition-colors duration-300'>
                  <Page />
               </section>
            </main>

            {/* FOOTER */}
            <footer className='bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 shadow-inner mt-auto transition-colors duration-300'>
               <div className='max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400'>
                  <Footer />
               </div>
            </footer>
         </div>
      </Router>
   );
};

export default App;
