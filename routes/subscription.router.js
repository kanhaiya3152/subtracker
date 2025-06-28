import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getMySubscriptions, getUserSubcriptions } from "../controllers/subscriptions.controller.js";


const subscriptionRouter = Router()

subscriptionRouter.get('/',(req,res) => res.send({title:'Get all subscriptions'}))
subscriptionRouter.get('/:id',authorize,getMySubscriptions)
subscriptionRouter.post('/',authorize,createSubscription)
subscriptionRouter.put('/:id',(req,res) => res.send({title:'Update subscriptions'}))
subscriptionRouter.delete('/:id',(req,res) => res.send({title:'Delete subscriptions'}))
subscriptionRouter.get('/user/:id',authorize,getUserSubcriptions)
subscriptionRouter.put('/:id/cancel',(req,res) => res.send({title:'Cancel subscriptions'}))
subscriptionRouter.get('/upcoming-renewels',(req,res) => res.send({title:'Get upcoming renewels'}))


export default subscriptionRouter