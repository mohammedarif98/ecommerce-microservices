
import { registerUser } from "../services/auth.service.js";



export const register = async(req, res, next) => {
    try{
        const user = registerUser(req.body);
        res.status(201).json({success: true, user}) 
    }catch(error){
        console.log(error.message);
        next(error)
    }
}