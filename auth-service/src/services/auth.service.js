import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../repositories/auth.repository.js";


export const registerUser = async({username, email, password}) => {
    const existingUser = await findUserByEmail(email)
    if(existingUser) throw new Error("User Already Exist")
    
    const hashedPassword = await bcrypt.hash(password, 10)
    return createUser({ email, password: hashedPassword })
}