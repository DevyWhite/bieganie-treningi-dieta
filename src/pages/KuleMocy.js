import React from "react";
import imageMap from "../components/imageMap";
import "../styles/RecipeCard.css"; // Użyj tego samego pliku CSS

const KuleMocy = () => {
   const przepis = {
      title: "Kulki Mocy z Daktylami i Orzechami",
      image: imageMap.kule_mocy, // Dodaj obraz w pliku imageMap, np. kule_mocy: "ścieżka do obrazu"
      ingredients: [
         "200 g daktyli (bez pestek)",
         "100 g orzechów (np. migdałów, orzechów włoskich lub nerkowców)",
         "50 g płatków owsianych",
         "2 łyżki kakao (opcjonalnie)",
         "1 łyżka masła orzechowego",
         "Szczypta soli",
         "Woda (w razie potrzeby)",
      ],
      description: [
         "Namocz daktyle w ciepłej wodzie przez 10-15 minut, jeśli są twarde, a następnie odcedź.",
         "Włóż daktyle, orzechy, płatki owsiane, kakao, masło orzechowe i sól do malaksera. Miksuj, aż składniki dobrze się połączą. Dodaj odrobinę wody, jeśli masa jest za sucha.",
         "Wilgotnymi dłońmi formuj z masy małe kulki (około 2-3 cm średnicy).",
         "Umieść kulki na talerzu lub w pojemniku i wstaw do lodówki na co najmniej 30 minut, aby stwardniały.",
         "Kulki mocy można przechowywać w lodówce przez tydzień.",
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

export default KuleMocy;
