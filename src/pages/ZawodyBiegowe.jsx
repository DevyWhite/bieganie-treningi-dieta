import React, { useState, useEffect } from "react";
import racesData from "../data/zawodyBiegowe.json";
import { Card, Button, Container, Row, Col, Accordion } from "react-bootstrap";
import "../styles/ZawodyBiegowe.css"; // Twoje style

const ZawodyBiegowe = () => {
   const [races, setRaces] = useState([]);

   useEffect(() => {
      setRaces(racesData);
   }, []);

   return (
      <Container>
         <h2 className='my-4 text-center'>Lista zawodów biegowych</h2>
         <Row>
            {races.map((race) => (
               <Col key={race.id} md={4} className='mb-4'>
                  <Card className='custom-card'>
                     <Card.Img variant='top' src={race.image} />
                     <Card.Body>
                        <Card.Title>{race.name}</Card.Title>
                        <Card.Text>{race.description}</Card.Text>

                        {/* Accordion for available races */}
                        <Accordion>
                           <Accordion.Item eventKey='0'>
                              <Accordion.Header>
                                 Dostępne biegi
                              </Accordion.Header>
                              <Accordion.Body>
                                 <ul>
                                    {race.events.map((event, index) => (
                                       <li key={index}>
                                          {event.distance} - {event.description}
                                       </li>
                                    ))}
                                 </ul>
                              </Accordion.Body>
                           </Accordion.Item>
                        </Accordion>

                        <Button
                           variant='secondary'
                           href={race.link}
                           target='_blank'
                           className='w-100 mt-2'
                        >
                           Więcej informacji
                        </Button>
                     </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default ZawodyBiegowe;
