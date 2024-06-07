import express from 'express';
import { searchCocktailByName, searchCocktailByFirstLetter, searchIngredientByName } from '../services/api.js';

const router = express.Router();

// GET cocktail by name
router.get('/:name', async (req, res, next) => {
    try {
        const name = req.params.name;

        const cocktail = await searchCocktailByName(name);
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

        const cocktails = await searchCocktailByFirstLetter(letter);
        res.status(200).json(cocktails);

    } catch (err) {
        console.error(err.message);
        throw err;
    }
});

// GET ingredient by name

router.get('/ingredient/:name', async (req, res, next) => {
    try {
        const name = req.params.name;

        const ingredient = await searchIngredientByName(name);
        res.status(200).json(ingredient);

    } catch (err) {
        console.error(err.message);
        throw err;
    }
});


export default router;
