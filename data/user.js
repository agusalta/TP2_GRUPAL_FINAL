import getConnection from "./conn.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const DATABASE = "TP2_tpFinal";
const COLLECTION = "users";

export async function addUser(user) {
  const clientMongo = await getConnection();

  try {
    // Validar si el usuario ya existe antes de insertar
    const existingUser = await clientMongo
      .db(DATABASE)
      .collection(COLLECTION)
      .findOne({ email: user.email });

    if (existingUser) {
      throw new Error("User with this email already exists.");
    }

    // Hashear la contraseña antes de insertar el usuario en la base de datos
    user.password = await bcryptjs.hash(user.password, 10);

    const result = await clientMongo
      .db(DATABASE)
      .collection(COLLECTION)
      .insertOne(user);

    return result;
  } catch (error) {
    console.error("Error adding user:", error);
    throw new Error("Error adding user: " + error.message);
  }
}

export async function findByCredential(email, password) {
  const clientMongo = await getConnection();

  const user = await clientMongo
    .db(DATABASE)
    .collection(COLLECTION)
    .findOne({ email: email });

  if (!user) {
    throw new Error("No se ha encontrado ningun usuario con estas credenciales.");
  }

  const isMatch = await bcryptjs.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Credenciales invalidas.");
  }

  return user;
}

export async function getAllUsers() {
  const clientMongo = await getConnection();

  const users = await clientMongo
    .db(DATABASE)
    .collection(COLLECTION)
    .find()
    .toArray();

  return users;
}

export async function addFavoriteCocktail(email, strDrink) {
  const clientMongo = await getConnection();

  try {
    const user = await clientMongo
      .db(DATABASE)
      .collection(COLLECTION)
      .findOne({ email });

    if (!user) {
      throw new Error("No se ha encontrado ningún usuario con estas credenciales.");
    }

    await clientMongo.db(DATABASE).collection(COLLECTION).updateOne(
      { email },
      { $addToSet: { favoriteCocktails: strDrink } }
    );

    return true;
  } catch (error) {
    console.error("Error", error);
    throw new Error("Error", error.message);
  }
}

export async function removeFavoriteCocktail(email, strDrink) {
  const clientMongo = await getConnection();

  try {
    const user = await clientMongo
      .db(DATABASE)
      .collection(COLLECTION)
      .findOne({ email });

    if (!user) {
      throw new Error("No se ha encontrado ningún usuario con estas credenciales.");
    }

    await clientMongo.db(DATABASE).collection(COLLECTION).updateOne(
      { email },
      { $pull: { favoriteCocktails: strDrink } }
    );

    return true;
  } catch (error) {
    console.error("Error", error);
    throw new Error("Error", error.message);
  }
}

export async function getFavoriteCocktails(email) {
  const clientMongo = await getConnection();

  try {
    const user = await clientMongo
      .db(DATABASE)
      .collection(COLLECTION)
      .findOne({ email });

    if (!user) {
      throw new Error("No se ha encontrado ningún usuario con estas credenciales.");
    }

    return user.favoriteCocktails || [];
  } catch (error) {
    console.error("Error", error);
    throw new Error("Error", error.message);
  }
}

export async function generateAuthToken(user) {
  const token = await jwt.sign(
    { _id: user._id, email: user.email },
    process.env.CLAVE_SECRETA,
    { expiresIn: "1h" }
  );
  return token;
}
