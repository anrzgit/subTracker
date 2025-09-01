import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authrorize from "../middleware/auth.middleware.js";


const userRouter = Router();


userRouter.get('/', getUsers)

userRouter.get('/:id', authrorize, getUser)

userRouter.post('/',(req, res) => {
    res.json({
        title : 'CREATE new user'
    })
})

userRouter.put('/:id',(req, res) => {
    res.json({
        title : 'UPDATE user Details'
    })
})

userRouter.delete('/:id',(req, res) => {
    res.json({
        title : 'DELETE user Details'
    })
})


export default userRouter