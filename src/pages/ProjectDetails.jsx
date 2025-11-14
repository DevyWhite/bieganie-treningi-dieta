import { useParams, Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import projectsData from "../data/projects.json";

export default function ProjectDetails() {
   const { id } = useParams();
   const project = projectsData.find((p) => p.id === id);

   usePageTitle(project?.title || "Projekty Biegowe");

   if (!project) {
      return (
         <p className='text-center text-gray-600 dark:text-gray-300 mt-10'>
            Projekt nie został znaleziony.
         </p>
      );
   }

   return (
      <article className='max-w-4xl mx-auto py-5 px-1 sm:py-10 sm:px-5 transition-colors duration-300'>
         <h1 className='text-2xl sm:text-3xl font-bold text-emerald-700 mb-4'>
            {project.title}
         </h1>
         <p className='text-gray-500 dark:text-gray-400 mb-8'>
            {project.date} · {project.distance}
         </p>

         {/* Galeria zdjęć */}
         {project.images && project.images.length > 0 && (
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
               {project.images.map((img, index) => (
                  <img
                     key={index}
                     src={img}
                     alt={`${project.title} - ${index + 1}`}
                     className='w-full h-64 object-cover rounded-2xl shadow-md dark:shadow-gray-700'
                  />
               ))}
            </div>
         )}

         <div className='prose max-w-none text-gray-800 dark:text-gray-200 leading-relaxed'>
            {project.fullContent.map((block, index) => {
               switch (block.type) {
                  case "subtitle":
                     return (
                        <h2
                           key={index}
                           className='text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200'
                        >
                           {block.text}
                        </h2>
                     );
                  case "text":
                     return (
                        <p key={index} className='mb-4 text-left'>
                           {block.text}
                        </p>
                     );
                  case "quote":
                     return (
                        <blockquote
                           key={index}
                           className='border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-200 mb-4'
                        >
                           {block.text}
                        </blockquote>
                     );
                  case "image":
                     if (
                        block.layout === "side-by-side" &&
                        block.images &&
                        block.images.length === 2
                     ) {
                        return (
                           <div
                              key={index}
                              className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'
                           >
                              {block.images.map((img, i) => (
                                 <img
                                    key={i}
                                    src={img.src}
                                    alt={img.alt}
                                    className='w-full h-96 object-cover rounded-2xl shadow-md dark:shadow-gray-700'
                                 />
                              ))}
                           </div>
                        );
                     }

                     return (
                        <img
                           key={index}
                           src={block.src}
                           alt={block.alt}
                           className='w-full h-64 object-cover rounded-2xl shadow-md dark:shadow-gray-700 mb-6'
                        />
                     );
                  default:
                     return null;
               }
            })}
         </div>

         {/* Highlights */}
         {project.highlights && project.highlights.length > 0 && (
            <div className='mb-6'>
               <h2 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                  Najważniejsze punkty:
               </h2>
               <ul className='list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200'>
                  {project.highlights.map((h, i) => (
                     <li key={i} className='text-left'>
                        {h}
                     </li>
                  ))}
               </ul>
            </div>
         )}

         {/* Tips */}
         {project.tips && project.tips.length > 0 && (
            <div className='mb-6'>
               <h2 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                  Wskazówki:
               </h2>
               <ul className='list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200'>
                  {project.tips.map((tip, i) => (
                     <li key={i} className='text-left'>
                        {tip}
                     </li>
                  ))}
               </ul>
            </div>
         )}

         <Link
            to='/projects'
            className='text-blue-600 hover:underline dark:text-blue-400 mb-6 block'
         >
            ← Powrót do projektów
         </Link>
      </article>
   );
}
