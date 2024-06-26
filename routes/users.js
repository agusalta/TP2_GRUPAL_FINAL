import express from "express";
import { addFavoriteCocktail, removeFavoriteCocktail, getFavoriteCocktails, addUser, findByCredential, generateAuthToken, getAllUsers, verifyToken, findByEmail } from "../data/user.js";

const usersRouter = express.Router();

usersRouter.post("/register", async (req, res) => {
  try {
    const result = await addUser(req.body);
    res.send(result);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ error: "An error occurred while registering the user." });
  }
});

usersRouter.post("/login", async (req, res) => {
  try {
    const user = await findByCredential(req.body.email, req.body.password);

    const token = await generateAuthToken(user);
    res.send({ token });
  } catch (error) {
    console.error("Error login user:", error);
    res.status(500).send({ error: "An error occurred while login the user." });
  }
});

/* GET users listing. */
usersRouter.get("/list", verifyToken, async (req, res) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    console.error("Error login user:", error);
    res.status(500).send({ error: "An error occurred while listing the users.", error });
  }
});

usersRouter.get("/find/:email", verifyToken, async (req, res) => {
  try {
    const email = req.params.email;
    const user = await findByEmail(email);
    if (!user) {
      res.status(404).send({ error: "User not found" });
      return;
    }
    res.send(user);
  } catch (error) {
    console.error("Error finding user by email:", error);
    res.status(500).send({ error: "An error occurred while finding the user by email, " + error.message });
  }
});

usersRouter.get("/:email/favorites", verifyToken, async (req, res) => {
  try {
    const email = req.params.email;
    const user = await getFavoriteCocktails(email);
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: "An error occurred while listing the users favorite drinks.", error });
  }
});

usersRouter.post("/:email/favorites", verifyToken, async (req, res) => {
  try {
    const email = req.params.email;
    const { strDrink } = req.body;
    const user = await addFavoriteCocktail(email, strDrink);
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: "An error occurred while adding the user favorite drink.", error });
  }
});

usersRouter.delete("/:email/favorites", verifyToken, async (req, res) => {
  try {
    const email = req.params.email;
    const { strDrink } = req.body;
    const user = await removeFavoriteCocktail(email, strDrink);
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: "An error occurred while deleting the user favorite drink.", error });
  }
});


export default usersRouter;