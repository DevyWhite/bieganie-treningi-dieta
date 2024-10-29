import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import injuryData from "../data/injury.json";
import "../styles/Injury.css";

const Injury = () => {
   const [injuryInfo, setInjuryInfo] = useState([]);

   useEffect(() => {
      setInjuryInfo(injuryData);
   }, []);

   if (injuryInfo.length === 0) {
      return <div>Nie znaleziono danych o kontuzji.</div>;
   }

   return (
      <Container>
         <Row>
            {injuryInfo.map((injury) => (
               <Col key={injury.id} md={12} className='mb-4'>
                  <Card id={injury.id} className='injury-card p-3'>
                     <Card.Body>
                        <Card.Title className='injury-title'>
                           {injury.title}
                        </Card.Title>
                        <Card.Text>{injury.description}</Card.Text>

                        {/* Sekcja ćwiczeń */}
                        <h5 className='mt-4'>Ćwiczenia:</h5>
                        {injury.exercises && injury.exercises.length > 0 ? (
                           injury.exercises.map((exercise, index) => {
                              // Jeśli ćwiczenie ma kategorię
                              if (exercise.category) {
                                 return (
                                    <div key={index}>
                                       <h6 className='exercise-category'>
                                          {exercise.category}
                                       </h6>
                                       {exercise.instructions && (
                                          <p>{exercise.instructions}</p>
                                       )}
                                       {exercise.types &&
                                          exercise.types.map(
                                             (type, typeIndex) => (
                                                <div key={typeIndex}>
                                                   <h6 className='exercise-subcategory'>
                                                      {type.subcategory}
                                                   </h6>
                                                   <ul>
                                                      {type.exercises.map(
                                                         (ex, exIndex) => (
                                                            <li
                                                               key={exIndex}
                                                               className='exercise-item'
                                                            >
                                                               <strong>
                                                                  {ex.title}
                                                               </strong>
                                                               :{" "}
                                                               {ex.description}{" "}
                                                               <br />
                                                               <em>
                                                                  {
                                                                     ex.repetitions
                                                                  }
                                                               </em>
                                                            </li>
                                                         )
                                                      )}
                                                   </ul>
                                                </div>
                                             )
                                          )}
                                    </div>
                                 );
                              } else {
                                 // Jeśli ćwiczenie nie ma kategorii, renderujemy je bezpośrednio
                                 return (
                                    <ul key={index}>
                                       <li className='exercise-item'>
                                          <strong>{exercise.title}</strong>{" "}
                                          {exercise.description}
                                          {exercise.series && (
                                             <span>
                                                Serie: {exercise.series}
                                             </span>
                                          )}
                                          {exercise.repetitions && (
                                             <span>
                                                Powtórzenia:{" "}
                                                {exercise.repetitions}
                                             </span>
                                          )}
                                       </li>
                                    </ul>
                                 );
                              }
                           })
                        ) : (
                           <p>Brak ćwiczeń do wyświetlenia.</p>
                        )}

                        {/* Sekcja rozciągania */}
                        <h5 className='mt-4'>Stretching:</h5>
                        {injury.stretching && injury.stretching.length > 0 ? (
                           <ul>
                              {injury.stretching.map((stretch, index) => (
                                 <li key={index} className='stretch-item'>
                                    <strong>{stretch.title}</strong>:{" "}
                                    {stretch.description} <br />
                                    <em>{stretch.duration}</em>
                                 </li>
                              ))}
                           </ul>
                        ) : (
                           <p>Brak rozciągania do wyświetlenia.</p>
                        )}

                        {/* Sekcja wskazówek */}
                        <h5 className='mt-4'>Porady:</h5>
                        {injury.tips && injury.tips.length > 0 ? (
                           <ul>
                              {injury.tips.map((tip, index) => (
                                 <li key={index} className='tip-item'>
                                    {tip}
                                 </li>
                              ))}
                           </ul>
                        ) : (
                           <p>Brak wskazówek do wyświetlenia.</p>
                        )}

                        {/* Sekcja uwag */}
                        {injury.note && <h5 className='mt-4'>Uwagi:</h5>}
                        <p className='injury-note'>{injury.note}</p>
                     </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default Injury;
