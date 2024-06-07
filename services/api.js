// Buscar bebida por nombre
// URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const searchCocktailByName = async (name) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const cocktail = await response.json();
        console.log(cocktail);
        return cocktail;
    } catch (err) {
        console.log(err.message);
    }
}

// Buscar bebida por la primera letra
// URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='
export const searchCocktailByFirstLetter = async (letter) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
        const cocktail = await response.json();
        console.log(cocktail);
        return cocktail;
    } catch (err) {
        console.log(err.message);
    }
}

// Buscar ingrediente por el nombre
// URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
export const searchIngredientByName = async (name) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`);
        const ingredient = await response.json();
        console.log(ingredient);
        return ingredient;
    } catch (err) {
        console.log(err.message);
    }
}
