import React from "react";
import Article from "../components/Article";

const articles = [
   {
      id: 1,
      title: "Jak zacząć naukę programowania",
      author: "Anna Nowak",
      text: "Programowanie to umiejętność, która może otworzyć wiele drzwi w różnych branżach. W tym artykule przedstawimy kroki, które pomogą Ci rozpocząć swoją przygodę z kodowaniem.",
   },
   {
      id: 2,
      title: "Trendy w projektowaniu UX/UI na 2024 rok",
      author: "Marek Kowalski",
      text: "Rok 2024 przynosi wiele innowacji w dziedzinie projektowania UX/UI. W artykule omówimy najnowsze trendy i ich wpływ na tworzenie nowoczesnych aplikacji i stron internetowych.",
   },
   {
      id: 3,
      title: "Korzyści z regularnego czytania książek",
      author: "Katarzyna Wiśniewska",
      text: "Czytanie książek ma wiele korzyści, zarówno dla umysłu, jak i dla duszy. Dowiedz się, jak regularne czytanie może poprawić Twoje życie osobiste i zawodowe.",
   },
   {
      id: 4,
      title: "Jak zarządzać czasem efektywnie",
      author: "Paweł Jankowski",
      text: "Efektywne zarządzanie czasem to klucz do sukcesu zarówno w życiu osobistym, jak i zawodowym. Poznaj sprawdzone techniki i narzędzia, które pomogą Ci lepiej organizować swój dzień.",
   },
   {
      id: 5,
      title: "Wprowadzenie do technologii blockchain",
      author: "Ewa Nowicka",
      text: "Blockchain to jedna z najbardziej rewolucyjnych technologii współczesnego świata. Artykuł wyjaśni, czym jest blockchain, jak działa i jakie ma potencjalne zastosowania.",
   },
   {
      id: 6,
      title: "Podstawy inwestowania na giełdzie",
      author: "Tomasz Nowak",
      text: "Inwestowanie na giełdzie może być intratnym zajęciem, ale wymaga solidnej wiedzy i strategii. Przeczytaj nasz przewodnik, aby dowiedzieć się, jak zacząć inwestować i jakie są najważniejsze zasady.",
   },
   {
      id: 7,
      title: "Sztuka gotowania w 30 minut",
      author: "Agnieszka Kowalczyk",
      text: "Gotowanie w krótkim czasie nie musi oznaczać rezygnacji z jakości posiłków. Poznaj przepisy na smaczne i szybkie dania, które można przygotować w mniej niż 30 minut.",
   },
];

const HomePage = () => {
   const artList = articles.map((item) => <Article key={item.id} {...item} />);

   return <div className='home'>{artList}</div>;
};

export default HomePage;
