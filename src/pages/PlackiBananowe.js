import React from "react";
import "../styles/RecipeCard.css"; // Używamy tego samego pliku CSS
import imageMap from "../components/imageMap";

const PlackiBananowe = () => {
   const przepis = {
      title: "Najprostsze bananowe placuszki",
      image: imageMap["placki_bananowe"],
      ingredients: [
         "1 dojrzały banan",
         "30 g płatków owsianych błyskawicznych",
         "20 g mąki pszennej pełnoziarnistej",
         "1 jajko",
         "na oko dowolnego mleka",
         "szczypta soli",
         "szczypta sody oczyszczonej",
         "minimalna ilość oleju rzepakowego",
      ],
      description: [
         "Banany rozgnieć widelcem. Dodaj jajka i wymieszać. Opcjonalnie – jeśli ubijesz białko, placki nabiorą puszystości.",
         "Dodać płatki owsiane, mąkę, sodę, sól. Chlusnąć mlekiem, żeby wyszło gładkie, ale gęste ciasto (jak na racuchy). Wymieszać do połączenia składników.",
         "Rozgrzać patelnię na średnim ogniu i dodać odrobinę oleju. Nakładać porcje ciasta na patelnię i smażyć na wolnym ogniu z każdej strony, aż placki się zarumienią.",
         "Podawać z wysokobiałkowym jogurtem, twarogiem, serkiem wiejskim, batonikiem proteinowym.",
         "Opcjonalnie, przy wykładaniu na patelnię możesz dodać do placków całe kawałki bananów.",
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
               <h3>Przygotowanie:</h3>
               {przepis.description.map((step, index) => (
                  <p key={index}>{step}</p>
               ))}
            </div>
         </div>
      </div>
   );
};

export default PlackiBananowe;
