import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";

export default function About() {
   usePageTitle("O mnie");

   return (
      <section className='max-w-3xl mx-auto px-6 py-12 text-center transition-colors duration-300'>
         <h1 className='text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200'>
            O mnie
         </h1>

         <p className='text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
            Cześć! Jestem <span className='font-semibold'>Dawid</span>, ale w
            sieci częściej znajdziesz mnie jako{" "}
            <span className='font-semibold text-emerald-700 dark:text-emerald-400'>
               Devy
            </span>
            <span className='font-semibold'>TrailTales</span> - biegającego
            programistę, który tak samo chętnie zagląda w las, jak w kod.
         </p>

         <p className='text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
            Ta strona to trochę{" "}
            <span className='italic'>mój dziennik treningowy</span>, trochę{" "}
            <span className='italic'>książka kucharska dla biegaczy</span>, a
            trochę{" "}
            <span className='italic'>
               zlepek moich pomysłów, projektów i przygód
            </span>
            . Nie udaję eksperta - po prostu lubię się dzielić tym, co działa (i
            tym, co kompletnie nie działa 😅).
         </p>

         <p className='text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
            Po latach siedzenia przy komputerze potrzebowałem resetu. Zamiast
            kolejnego monitora wybrałem ścieżkę w lesie. Najpierw kilka
            kilometrów, potem dziesiątki, a teraz celuję w{" "}
            <span className='font-semibold'>150 km po szlakach</span>.
         </p>

         <p className='text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
            Uwielbiam bieganie terenowe za widoki, ciszę i to uczucie, kiedy
            pokonujesz własne granice. Dla mnie to trochę jak{" "}
            <span className='italic'>debugowanie umysłu</span> - tylko zamiast
            klawiatury mam buty i szlak.
         </p>

         <p className='text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
            Wszystko, co tu widzisz - od treści po kod - robię sam. Biegam po
            lesie, po kodzie i po pomysłach. Czasem coś z tego wychodzi, czasem
            nie, ale zawsze zostaje historia do opowiedzenia.
         </p>

         <p className='text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
            Kontuzje? Jasne, też się zdarzają. Mój plan treningowy uwzględnia
            nie tylko kilometry, ale i odpoczynek - bo życie to nie tylko tempo,
            ale i regeneracja.
         </p>

         <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
            Na stronie znajdziesz więc treningi, przepisy, porady z apteczki,
            opisy tras i moje projekty biegowe. Jeśli lubisz naturę, biegasz z
            głową (albo chcesz zacząć) i nie traktujesz siebie zbyt serio -
            rozgość się.
            <br />
            <span className='text-xl font-semibold mt-4 block text-gray-800 dark:text-gray-200'>
               Witaj w mojej małej strefie lasu i kodu 🌲💻
            </span>
         </p>
      </section>
   );
}
