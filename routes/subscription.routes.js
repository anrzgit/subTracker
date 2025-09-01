import { Router } from "express";
import authrorize from "../middleware/auth.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();


subscriptionRouter.get('/',(req,res) =>{
    res.send({title : "GET all Subscription"})
})

subscriptionRouter.get('/:id',(req,res) =>{
    res.send({title : "GET Subscription Details"})
})

subscriptionRouter.post('/', authrorize, createSubscription)


export default subscriptionRouter