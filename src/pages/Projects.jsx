import React from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import projectsData from "../data/projects.json";

const Projects = () => {
   usePageTitle("Projekty Biegowe");
   return (
      <section className='transition-colors duration-300'>
         <h1 className='text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 '>
            Projekty biegowe
         </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projectsData.map((project) => (
               <div
                  key={project.id}
                  className='border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm dark:shadow-gray-700 hover:shadow-lg transition-shadow duration-300'
               >
                  <img
                     src={project.images[0]}
                     alt={project.title}
                     className='w-full h-48 object-cover'
                  />
                  <div className='p-4'>
                     <h2 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                        {project.title}
                     </h2>
                     <p className='text-gray-700 dark:text-gray-200 mb-2 text-left'>
                        {project.shortDescription}
                     </p>
                     <p className='text-gray-500 dark:text-gray-400 text-sm mb-2'>
                        {project.distance}
                     </p>
                     <Link
                        to={`/projects/${project.id}`}
                        className='text-blue-600 dark:text-blue-400 hover:underline'
                     >
                        Czytaj więcej
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Projects;
