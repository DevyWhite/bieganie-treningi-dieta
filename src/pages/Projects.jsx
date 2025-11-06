import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";

export default function Projects() {
   const projects = projectsData;
   return (
      <section className='bg-gray-50 py-10 px-5 rounded-3xl'>
         <h1 className='text-3xl font-semibold text-gray-800 mb-6 text-center'>
            Moje Projekty Biegowe
         </h1>
         <p className='text-gray-600 text-center mb-10 max-w-2xl mx-auto'>
            Moje osobiste wyzwania, biegi i trasy, które zostawiły ślad nie
            tylko w nogach, ale i w głowie.
         </p>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project) => (
               <div
                  key={project.id}
                  className='bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col'
               >
                  <img
                     src={project.image}
                     alt={project.title}
                     className='w-full h-48 object-cover'
                  />
                  <div className='p-5 flex flex-col flex-grow'>
                     <h2 className='text-xl font-semibold text-emerald-700 mb-2'>
                        {project.title}
                     </h2>
                     <p className='text-gray-600 text-sm flex-grow'>
                        {project.description}
                     </p>
                     <div className='text-sm text-gray-500 my-3'>
                        <span>{project.distance} km</span> ·{" "}
                        <span>{project.location}</span>
                     </div>

                     <Link
                        to={`/projekty/${project.id}`}
                        className='inline-block mt-auto bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-center'
                     >
                        Zobacz więcej
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
