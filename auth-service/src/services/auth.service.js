
import bcrypt from "bcryptjs";
import { createUser, findUserByEmail } from "../repositories/auth.repository.js";
import { hashPassword } from "../utils/hashPassword.js";
import { generateToken } from "../utils/token.js";



export const registerUser = async({username, email, password}) => {
    const existingUser = await findUserByEmail(email)
    if(existingUser) throw new Error("User Already Exist")
    
    const hashedPassword = await hashPassword(password)
    return createUser({ username, email, password: hashedPassword })
}


export const loginUser = async({email, password}) => {
    const user  = await findUserByEmail(email)
    if(!user) throw new Error("User Not Found")

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error("Invalid Credentials")

    return generateToken({id: user._id, role: user.role })
}