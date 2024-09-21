// src/pages/ChlebekBananowy.js
import React from "react";
import imageMap from "../components/imageMap"; // lub ścieżka do pliku z mapowaniem obrazków
import "../styles/RecipeCard.css"; // lub stwórz nowy plik CSS, jeśli chcesz

const ChlebekBananowy = () => {
   const przepis = {
      title: "Chlebek bananowy",
      image: imageMap["chlebek_bananowy"], // Upewnij się, że masz taki obrazek w imageMap
      ingredients: [
         "3 dojrzałe banany (jednego przekrój wzdłuż, do ciasta idą dwa)",
         "2 jajka",
         "200 g mąki pszennej pełnoziarnistej",
         "100 g płatków owsianych błyskawicznej",
         "70 g masła orzechowego",
         "1/3 szklanki erytrytolu (opcjonalnie – 1/4 szklanki cukru)",
         "chlust mleka",
         "łyżeczka sody oczyszczonej",
         "łyżeczka cynamonu",
         "dwie łyżeczki kakao naturalnego",
         "1/4 łyżeczki soli",
         "opcjonalnie – suszone owoce według uznania",
         "opcjonalnie – pokruszona czekolada według uznania",
      ],
      description: [
         "Piekarnik rozgrzać do 180°C. Keksówkę wyłożyć papierem do pieczenia.",
         "Banany rozgnieść widelcem. Masło orzechowe podtopić do półpłynnej konsystencji.",
         "Białka jaj ubić, wymieszać z żółtkami. Dodać pozostałe składniki, wymieszać do połączenia.",
         "Ciasto przełożyć do przygotowanej formy, na wierzch położyć połówki banana i piec przez około 50 minut, do suchego patyczka.",
         "Podawaj z dżemem, jogurtem naturalnym, jogurtem proteinowym, twarogiem, ciepłym mlekiem.",
      ],
   };

   return (
      <div className='recipe-card'>
         <img
            src={przepis.image}
            alt={przepis.title}
            className='recipe-image'
         />
         <h2 className='recipe-title'>{przepis.title}</h2>
         <div className='recipe-content'>
            <div className='recipe-ingredients'>
               <h3>Składniki:</h3>
               <ul>
                  {przepis.ingredients.map((ingredient, index) => (
                     <li key={index}>{ingredient}</li>
                  ))}
               </ul>
            </div>
            <div className='recipe-preparation'>
               <h3>Wykonanie:</h3>
               {przepis.description.map((step, index) => (
                  <p key={index}>{step}</p>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ChlebekBananowy;
