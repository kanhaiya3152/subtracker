import express from "express";
import { PORT } from "./config/env.js";

import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.router.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

//Middleware

app.use('/api/v1/users' , userRouter)
app.use('/api/v1/subscriptions' , subscriptionRouter)
app.use('/api/v1/auth' , authRouter)

app.get('/',(req,res) => {
    res.send("Welcome to the new field "); 
})

app.listen(PORT,async () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
    
    await connectToDatabase()
})

export default app; 