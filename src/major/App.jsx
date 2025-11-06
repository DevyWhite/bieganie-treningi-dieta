import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

const App = () => {
   return (
      <Router>
         <div className='flex flex-col min-h-screen bg-gray-50 text-gray-800'>
            {/* HEADER */}
            <header className='bg-white shadow-sm'>
               <div className='max-w-6xl mx-auto px-4 py-4'>
                  <Header />
               </div>
            </header>

            {/* MAIN CONTENT AREA */}
            <main className='flex flex-1 flex-col md:flex-row w-full max-w-6xl mx-auto px-4 py-8 gap-8'>
               {/* ASIDE / NAVIGATION */}
               <aside className='md:w-1/4 w-full bg-white rounded-2xl shadow-sm p-4'>
                  <Navigation />
               </aside>

               {/* MAIN PAGE SECTION */}
               <section className='flex-1 bg-white rounded-2xl shadow-sm p-6'>
                  <Page />
               </section>
            </main>

            {/* FOOTER */}
            <footer className='bg-white border-t shadow-inner mt-auto'>
               <div className='max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500'>
                  <Footer />
               </div>
            </footer>
         </div>
      </Router>
   );
};

export default App;
