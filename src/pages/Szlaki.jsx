import React, { useState, useEffect } from "react";
import trailsData from "../data/szlaki.json";

const Szlaki = () => {
   const [trails, setTrails] = useState([]);
   const [openTrailId, setOpenTrailId] = useState(null);
   const [openStageId, setOpenStageId] = useState(null);

   useEffect(() => {
      setTrails(trailsData.trasyBiegowe || []);
   }, []);

   const toggleTrail = (id) => {
      setOpenTrailId(openTrailId === id ? null : id);
      setOpenStageId(null);
   };

   const toggleStage = (id) => {
      setOpenStageId(openStageId === id ? null : id);
   };

   return (
      <div className='max-w-5xl mx-auto px-4 py-8'>
         <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
            🏃‍♂️ Trasy Biegowe
         </h1>

         <div className='space-y-4'>
            {trails.map((trail) => (
               <div
                  key={trail.id}
                  className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300'
               >
                  {/* Nagłówek trasy */}
                  <button
                     onClick={() => toggleTrail(trail.id)}
                     className='w-full text-left px-6 py-4 font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center'
                  >
                     <span>{trail.name}</span>
                     <span
                        className={`transform transition-transform duration-300 ${
                           openTrailId === trail.id ? "rotate-90" : ""
                        }`}
                     >
                        ▶
                     </span>
                  </button>

                  {/* Zawartość trasy */}
                  <div
                     className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openTrailId === trail.id
                           ? "max-h-[3000px] opacity-100"
                           : "max-h-0 opacity-0"
                     }`}
                  >
                     <div className='px-6 pb-6 animate-fadeIn'>
                        <p className='text-gray-600 mb-4'>
                           {trail.description}
                        </p>

                        {/* --- Jeśli tylko 1 etap --- */}
                        {trail.stages.length === 1 && (
                           <StageContent
                              stage={trail.stages[0]}
                              trailName={trail.name}
                           />
                        )}

                        {/* --- Jeśli jest wiele etapów --- */}
                        {trail.stages.length > 1 && (
                           <div className='space-y-3'>
                              {trail.stages.map((stage) => (
                                 <div
                                    key={stage.stageId}
                                    className='border border-gray-100 rounded-xl'
                                 >
                                    <button
                                       onClick={() =>
                                          toggleStage(stage.stageId)
                                       }
                                       className='w-full text-left px-4 py-3 font-medium text-gray-700 flex justify-between items-center hover:bg-gray-50 transition'
                                    >
                                       <span>{stage.stageName}</span>
                                       <span
                                          className={`transform transition-transform duration-300 ${
                                             openStageId === stage.stageId
                                                ? "rotate-90"
                                                : ""
                                          }`}
                                       >
                                          ▶
                                       </span>
                                    </button>

                                    <div
                                       className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                          openStageId === stage.stageId
                                             ? "max-h-[2000px] opacity-100"
                                             : "max-h-0 opacity-0"
                                       }`}
                                    >
                                       <div className='px-4 pb-4'>
                                          <StageContent
                                             stage={stage}
                                             trailName={trail.name}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

/* --- Podkomponent: zawartość etapu --- */
const StageContent = ({ stage, trailName }) => (
   <div className='pt-2'>
      {stage.image && (
         <img
            src={`/images/running-trails/${stage.image}`}
            alt={stage.stageName}
            className='rounded-xl w-full object-cover mb-3 max-h-80 shadow-sm'
         />
      )}

      {stage.stageInfo && (
         <p className='text-gray-600 mb-2'>{stage.stageInfo}</p>
      )}

      {stage.stageBonus && (
         <p className='text-sm text-green-600 font-medium mb-2'>
            🎁 {stage.stageBonus}
         </p>
      )}

      {stage.stageDescription && (
         <p className='text-gray-500 mb-4'>{stage.stageDescription}</p>
      )}

      {stage.map && (
         <div className='w-full aspect-video mb-4'>
            <iframe
               title={`Mapa trasy: ${trailName}`}
               src={stage.map.iframe}
               className='w-full h-full rounded-xl border-0 shadow-sm'
               loading='lazy'
            ></iframe>
         </div>
      )}

      <div className='flex flex-wrap gap-3'>
         {stage.gpx && (
            <a
               href={stage.gpx}
               target='_blank'
               rel='noopener noreferrer'
               className='px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition'
            >
               📍 GPX
            </a>
         )}
         {stage.moreInfo && (
            <a
               href={stage.moreInfo}
               target='_blank'
               rel='noopener noreferrer'
               className='px-4 py-2 border border-gray-400 text-gray-600 rounded-lg hover:bg-gray-50 transition'
            >
               ℹ️ Więcej informacji
            </a>
         )}
      </div>
   </div>
);

export default Szlaki;
