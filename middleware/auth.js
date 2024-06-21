import jwt from "jsonwebtoken";

async function auth(req, res, next){
    try {
        const token = req.header("Authentication");
        const payload = jwt.verify(token, process.env.CLAVE_SECRETA);
        console.log(payload);
        next();
     } catch (error) {
        res.status(401).send(error.message);
        
    }
}

export default auth;