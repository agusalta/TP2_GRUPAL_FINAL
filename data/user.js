import getConnection from "./conn.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function addUser(user) {
  const clientMongo = await getConnection();

  //validar si el usuario existe
  user.password = await bcryptjs.hash(user.password, 10);

  const result = clientMongo
    .db("TP2_tpFinal")
    .collection("users")
    .insertOne(user);

  return result;
}

export async function findByCredential(email, password) {
  const clientMongo = await getConnection();

  const user = await clientMongo
    .db("TP2_tpFinal")
    .collection("users")
    .findOne({ email: email });
  if (!user) {
    throw new Error("Credenciales Invalidas.");
  }

  const isMatch = await bcryptjs.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Credenciales Invalidas.");
  }

  return user;
}

export async function generateAuthToken(user) {
  const token = await jwt.sign(
    { _id: user._id, email: user.email },
    process.env.CLAVE_SECRETA,
    { expiresIn: "1h" }
  );
  return token;
}
