import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";

const Projects = () => {
   return (
      <section>
         <h1 className='text-2xl md:text-3xl font-bold mb-6'>
            Projekty biegowe
         </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projectsData.map((project) => (
               <div
                  key={project.id}
                  className='border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition'
               >
                  <img
                     src={project.images[0]}
                     alt={project.title}
                     className='w-full h-48 object-cover'
                  />
                  <div className='p-4'>
                     <h2 className='text-xl font-semibold mb-2'>
                        {project.title}
                     </h2>
                     <p className='text-gray-700 mb-2'>
                        {project.shortDescription}
                     </p>
                     <p className='text-gray-500 text-sm mb-2'>
                        {project.distance}
                     </p>
                     <Link
                        to={`/projects/${project.id}`}
                        className='text-blue-600 hover:underline'
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
