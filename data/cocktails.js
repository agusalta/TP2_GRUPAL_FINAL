//import getConnection from "./conn.js";
//import bcryptjs from "bcryptjs";
//import jwt from "jsonwebtoken";
import axios from "axios";

const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";

//const cocktails = await axios(url);

axios(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log("hubo error");
  });

// export async function getCocktailByName() {
//   const cocktail = await axios(url).find().toArray();

//   return cocktail;
// }

export async function getAllCocktails(){
    const cocktails = await axios(url)

    return cocktails;
}
