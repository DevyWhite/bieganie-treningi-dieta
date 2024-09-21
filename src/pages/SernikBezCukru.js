import React from "react";
import imageMap from "../components/imageMap";
import "../styles/RecipeCard.css"; // Użyj tego samego pliku CSS

const SernikBezCukru = () => {
   const przepis = {
      title: "Bananowy sernik bez cukru",
      image: imageMap.sernik_bez_cukru,
      ingredients: [
         "250 g twarogu chudego (kostka drobno zmielonego)",
         "1 jajko",
         "1 dojrzały banan",
         "1/2 szklanki płatków owsianych błyskawicznych",
         "łyżka wiórków kokosowych",
         "garść drobno posiekanych orzechów",
         "2 łyżki erytrytolu",
         "5 kropli aromatu waniliowego/kokosowego/biała czekolada/migdał",
         "opcjonalnie – drugi banan przekrojony na pół, do położenia na wierzchu ciasta",
      ],
      description: [
         "Banany rozgnieść widelcem, połączyć z twarogiem.",
         "Jajka ubić z erytrytolem na puszystą masę. Dodać rozgniecione banany, twaróg i aromat waniliowy. Wymieszać.",
         "Do masy wrzucić płatki owsiane, orzechy i wiórki kokosowe. Wymieszać.",
         "Masę przelać do przygotowanej formy (opcjonalnie – połówki banana na wierzch) i piec przez około 40 minut, 180 stopni, do suchego patyczka.",
         "Podawać z czym chcesz – sernik jest zbilansowany, są w nim wszystkie makroskładniki. Jak dla nas, świeżych owoców nigdy dość 😉.",
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

export default SernikBezCukru;
