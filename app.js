import express from "express";
import { PORT } from "./config/env.js";

import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.router.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

app.use(express.json()); // allow to handle JSON data in requests
app.use(express.urlencoded({ extended: false })); // helps to process the form data sent via html forms
app.use(cookieParser())
app.use(arcjetMiddleware)

app.use('/api/v1/users' , userRouter)
app.use('/api/v1/subscriptions' , subscriptionRouter)
app.use('/api/v1/auth' , authRouter)
app.use('/api/v1/workflows' , workflowRouter)

app.use(errorMiddleware)

app.get('/',(req,res) => {
    res.send("Welcome to my server!"); 
})

app.listen(PORT,async () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
    
    await connectToDatabase()
})

export default app; 