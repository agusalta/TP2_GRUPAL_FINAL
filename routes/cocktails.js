import express from 'express';
import * as apiService from '../services/api.js';

const router = express.Router();

// GET cocktail by name
router.get('/:name', async (req, res, next) => {
    try {
        const name = req.params.name;

        const cocktail = await apiService.searchCocktailByName(name);
        res.status(200).json(cocktail);

    } catch (err) {
        console.error(err.message);
        throw err;
    }
});

// GET cocktail by first letter
router.get('/letter/:letter', async (req, res, next) => {
    try {
        const letter = req.params.letter;

        const cocktails = await apiService.searchCocktailByFirstLetter(letter);
        res.status(200).json(cocktails);

    } catch (err) {
        res.status(500).send(err);
        console.error(err.message);
        throw err;
    }
});

// Buscar información del ingrediente por el nombre
router.get('/ingredient/:name', async (req, res, next) => {
    try {
        const name = req.params.name;

        const ingredient = await apiService.searchIngredientByName(name);
        res.status(200).json(ingredient);

    } catch (err) {
        console.error(err.message);
        throw err;
    }
});

router.get('/cocktail/random', async (req, res) => {
    try {
        const cocktail = await apiService.searchRandomCocktail();
        res.status(200).json(cocktail);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
})

router.get('/drinks/non-alc', async (req, res) => {
    try {
        const drinks = await apiService.getNonAlcoholicDrinks();
        res.status(200).json(drinks);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
})

router.get('/drinks/alc', async (req, res) => {
    try {
        const drinks = await apiService.getAlcoholicDrinks();
        res.status(200).json(drinks);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
})

// Buscar bebidas POR ingrediente
router.get('/search/:ingredient', async (req, res) => {
    try {
        const ingredient = req.params.ingredient;
        const drinks = await apiService.searchByIngredient(ingredient);
        res.status(200).json(drinks);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
})

router.get('/cocktail/categories', async (req, res) => {
    try {
        const categories = await apiService.getCategories();
        res.status(200).json(categories);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
})

router.get('/cocktail/ingredients', async (req, res) => {
    try {
        const ingredients = await apiService.getIngredients();
        res.status(200).json(ingredients);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
})

router.get('/cocktail/types', async (req, res) => {
    try {
        const types = await apiService.getTypes();
        res.status(200).json(types);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
})

router.get('/cocktail/glasses', async (req, res) => {
    try {
        const glasses = await apiService.getGlasses();
        res.status(200).json(glasses);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
})

// Buscar bebida POR categoria
router.get('/search/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const cocktails = await apiService.searchByCategory(category);
        res.status(200).json(cocktails);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
})

export default router;
