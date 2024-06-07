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

// Buscar una bebida aleatoria
// URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
export const searchRandomCocktail = async () => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const cocktail = await response.json();
        console.log(cocktail);
        return cocktail;
    } catch (err) {
        console.log(err.message);
    }
}

// Buscar bebidas sin alcohol
// URL = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
export const getNonAlcoholicDrinks = async () => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`);
        const cocktail = await response.json();
        console.log(cocktail);
        return cocktail;
    } catch (err) {
        console.log(err.message);
    }
}

// Buscar bebidas con alcohol
// URL = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
export const getAlcoholicDrinks = async () => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
        const cocktail = await response.json();
        console.log(cocktail);
        return cocktail;
    } catch (err) {
        console.log(err.message);
    }
}

// Buscar bebidas por ingredientes
// URL = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
export const searchByIngredient = async (ingredient) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const cocktail = await response.json();
        console.log(cocktail);
        return cocktail;
    } catch (err) {
        console.log(err.message);
    }
}

// Listar categorias
// URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
export const getCategories = async () => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
        const categories = await response.json();
        console.log(categories);
        return categories;
    } catch (err) {
        console.log(err.message);
    }
}

// Listar ingredientes
// URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
export const getIngredients = async () => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
        const ingredients = await response.json();
        console.log(ingredients);
        return ingredients;
    } catch (err) {
        console.log(err.message);
    }
}

// Listar tipos de bebida
// URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'
export const getTypes = async () => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`);
        const types = await response.json();
        console.log(types);
        return types;
    } catch (err) {
        console.log(err.message);
    }
}


// Listar vasos de bebidas
// URL = 'http://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'
export const getGlasses = async () => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`);
        const glasses = await response.json();
        console.log(glasses);
        return glasses;
    } catch (err) {
        console.log(err.message);
    }
}


// Buscar bebidas por categoria
// URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' // separar por guiones bajos (_)
export const searchByCategory = async (category) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const cocktail = await response.json();
        console.log(cocktail);
        return cocktail;
    } catch (err) {
        console.log(err.message);
    }
}


