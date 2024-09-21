import React from "react";
import imageMap from "../components/imageMap";

const PlackiBananoweCzekoladowe = () => {
   const przepis = {
      title: "Placki bananowe – wersja wysokobiałkowo-kakaowa",
      image: imageMap["placki_bananowe_czekoladowe"],
      ingredients: [
         "1 duży dojrzały banan",
         "30 g odżywki białkowej o smaku czekoladowym",
         "40 g mąki pszennej",
         "1 łyżka naturalnego kakao",
         "chlust mleka na oko",
         "szczypta sody oczyszczonej",
         "szczypta soli",
         "olej do smażenia",
         "opcjonalnie – jajko",
      ],
      description: [
         "Banany rozgnieść widelcem. Wrzucić do miski wszystko, chlusnąć mlekiem. Wymieszać do połączenia składników.",
         "Rozgrzać naolejowaną patelnię, usmażyć placuszki na wolnym ogniu z każdej strony.",
         "Podawać z owocami, frużeliną, masłem orzechowym, gorzką czekoladą, słodkim sosem.",
         "Te placki są świetnym posiłkiem po treningu – białko odżywi mięśnie, bananowa słodycz uruchomi odnowę glikogenu.",
         "Możesz dodać więcej kakao, żeby uzyskać mocno czekoladową barwę. Smakują świetnie z domową bitą śmietaną i malinami.",
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

export default PlackiBananoweCzekoladowe;
