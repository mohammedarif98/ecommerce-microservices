
import jwt from "jsonwebtoken";
import config from "../config/index.js";



export const generateToken = (payload) => {
    if (!config.jwt.token) throw new Error("JWT secret not configured");
    return jwt.sign(payload, config.jwt.token, {expiresIn: config.jwt.expires} );
};
