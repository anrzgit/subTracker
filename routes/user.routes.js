import { Router } from "express";


const userRouter = Router();


userRouter.get('/',(req, res) => {
    res.json({
        title : 'GET all users'
    })
})

userRouter.get('/:id',(req, res) => {
    res.json({
        title : 'GET user Details'
    })
})

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