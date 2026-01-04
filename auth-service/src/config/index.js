import dotenv from 'dotenv'
dotenv.config();


const config = {
    app: {
        port: process.env.PORT || 4001
    },
    db: {
        uri: process.env.MONGO_URI,
        // uri: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce-microservice/auth-service',
        name: process.env.DB_NAME,
    },
    jwt: {
        token: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRES_IN
    },
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true 
    }, 
    rateLimit: {
        windowMs: 15*60*1000,
        max: 10,
        message: {statusCode: 429, message: "To many requests, Please try later"} 
    },
    email: {                                   
        // service: process.env.EMAIL_SERVICE || 'gmail',
        // user: process.env.EMAIL_USER,
        // password: process.env.EMAIL_PASSWORD,
        // from: process.env.EMAIL_FROM || 'no-reply@myapp.com'
    },
}

export default config;