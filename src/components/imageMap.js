const images = require.context(
   "../images/food-images",
   false,
   /\.(png|jpe?g)$/
);

const imageMap = {};

images.keys().forEach((fileName) => {
   const key = fileName
      .replace("./", "")
      .replace(/\.(png|jpe?g)$/, "")
      .replace(/^img/i, "") // usuwa prefix 'img' jeśli plik zaczyna się od niego
      .replace(/[^a-zA-Z0-9_ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, "_") // zamień znaki specjalne
      .toLowerCase();

   imageMap[key] = images(fileName);
});

export default imageMap;
