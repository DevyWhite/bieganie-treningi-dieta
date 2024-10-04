import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

import "../styles/App.css";

const App = () => {
   return (
      <Router>
         <div className='app'>
            <header>
               <Header />
            </header>
            <main>
               <aside>
                  <Navigation />
               </aside>
               <section className='page'>
                  <Page />
               </section>
            </main>
            <footer>
               <Footer />
            </footer>
         </div>
      </Router>
   );
};

export default App;
