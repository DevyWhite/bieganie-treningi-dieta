import React, { useState, useEffect } from "react";
import trailsData from "../data/szlaki.json";
import { Accordion, Button, Container } from "react-bootstrap";
import "../styles/Szlaki.css";

const Szlaki = () => {
   const [trails, setTrails] = useState([]);

   useEffect(() => {
      setTrails(trailsData.trasyBiegowe);
   }, []);

   return (
      <Container>
         <h2 className='my-4'>Trasy Biegowe</h2>
         <Accordion defaultActiveKey='0'>
            {trails.map((trail) => (
               <Accordion.Item eventKey={trail.id.toString()} key={trail.id}>
                  <Accordion.Header>{trail.name}</Accordion.Header>
                  <Accordion.Body>
                     <p>{trail.description}</p>
                     {trail.stages.map((stage) => (
                        <div key={stage.stageId}>
                           <h5>{stage.stageName}</h5>
                           <img
                              src={`/images/running-trails/${stage.image}`}
                              alt={stage.stageName}
                              className='img-fluid'
                           />
                           <p className='stage-info'>{stage.stageInfo}</p>
                           <p className='stage-bonus'>{stage.stageBonus}</p>
                           <p>{stage.stageDescription}</p>
                           {/* Dodanie mapy trasy */}
                           {stage.map && (
                              <div className='map-container'>
                                 <iframe
                                    title={`Mapa trasy: ${trail.name}`}
                                    src={stage.map.iframe}
                                    className='map-iframe'
                                    loading='lazy'
                                 ></iframe>
                              </div>
                           )}
                           <div className='route-buttons'>
                              <Button
                                 variant='outline-primary'
                                 href={stage.gpx}
                                 target='_blank'
                                 style={{ marginRight: "10px" }}
                              >
                                 GPX
                              </Button>
                              <Button
                                 variant='outline-secondary'
                                 href={stage.moreInfo}
                                 target='_blank'
                              >
                                 Więcej informacji
                              </Button>
                           </div>
                        </div>
                     ))}
                  </Accordion.Body>
               </Accordion.Item>
            ))}
         </Accordion>
      </Container>
   );
};

export default Szlaki;
