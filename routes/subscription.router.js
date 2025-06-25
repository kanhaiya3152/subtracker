import { Router } from "express";

const subscriptionRouter = Router()

subscriptionRouter.get('/',(req,res) => res.send({title:'Get all subscriptions'}))
subscriptionRouter.get('/:id',(req,res) => res.send({title:'Get subscriptions details'}))
subscriptionRouter.post('/',(req,res) => res.send({title:'Create subscriptions'}))
subscriptionRouter.put('/:id',(req,res) => res.send({title:'Update subscriptions'}))
subscriptionRouter.delete('/:id',(req,res) => res.send({title:'Delete subscriptions'}))
subscriptionRouter.get('/user/:id',(req,res) => res.send({title:'Get all usres subscriptions'}))
subscriptionRouter.put('/:id/cancel',(req,res) => res.send({title:'Cancel subscriptions'}))
subscriptionRouter.get('/upcoming-renewels',(req,res) => res.send({title:'Get upcoming renewels'}))


export default subscriptionRouter