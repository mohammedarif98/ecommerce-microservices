
import jwt from "jsonwebtoken";
import config from "../config/index.js";


export const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({ success: false, message: "Authorization token missing" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, config.jwt.token);
        
        req.user = { id: decoded.id, role: decoded.role };              //* attach user info to request
        next();
    }catch(error){
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};


//* Role-Based Middleware
export const authorizeRoles = (...roles) => {
    return(req, res, next) => {
        if(!roles.includes(req.user.role)){
            return res.status(403).json({ success: false, message: "Access denied" });
        }
        next();
    };
};