import React from "react";
import medicalSupplies from "../data/medicalSupplies.json";

const MedicalSuppliesList = () => {
   return (
      <div className='container mt-4'>
         <h3 className='mb-4'>Lista leków i asortymentu medycznego</h3>
         <div className='row'>
            {medicalSupplies.map((item, index) => (
               <div key={index} className='col-md-4'>
                  <div className='card mb-4 shadow-sm'>
                     {item.imageUrl && (
                        <img
                           src={item.imageUrl}
                           className='card-img-top'
                           alt={item.name}
                           style={{ height: "200px", objectFit: "contain" }}
                        />
                     )}
                     <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        <p className='card-text'>{item.description}</p>
                        <a
                           href={item.link}
                           className='btn btn-outline-secondary'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           Więcej informacji
                        </a>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default MedicalSuppliesList;
