
import { loginUser, registerUser } from "../services/auth.service.js";



export const register = async(req, res, next) => {
    try{
        const user = await registerUser(req.body);
        res.status(201).json({success: true, user}) 
    }catch(error){
        console.log(error.message);
        next(error)
    }
}


export const login = async(req, res, next) => {
    try{
        const token = await loginUser(req.body);
        res.status(200).json({success: true, token}) 
    }catch(error){
        console.log(error.message);
        next(error)
    }
}