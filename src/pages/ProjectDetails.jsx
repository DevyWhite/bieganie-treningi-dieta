import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";

export default function ProjectDetails() {
   const { id } = useParams();
   const project = projectsData.find((p) => p.id === id);

   if (!project) {
      return (
         <p className='text-center text-gray-600 mt-10'>
            Projekt nie został znaleziony.
         </p>
      );
   }

   return (
      <article className='max-w-4xl mx-auto py-10 px-5'>
         <h1 className='text-3xl font-bold text-emerald-700 mb-4'>
            {project.title}
         </h1>
         <p className='text-gray-500 mb-8'>
            {project.location} · {project.distance} km
         </p>

         <img
            src={project.image}
            alt={project.title}
            className='w-full h-80 object-cover rounded-2xl mb-8 shadow-md'
         />

         <div className='prose max-w-none text-gray-800 leading-relaxed'>
            <p>{project.content}</p>
         </div>
      </article>
   );
}
