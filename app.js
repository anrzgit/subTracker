import express from 'express';
import {PORT} from './config/env.js' 
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './database/mongodb.js';
 
const app = express();

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/subscription', subscriptionRouter)
app.use('/api/v1/user', userRouter)



app.get('/',(req, res, next) => {   
    res.send("<h1>Hi</h1>")
});


app.listen(PORT, async ()=>{
    console.log(`server running on port ${PORT}`);
    await connectToDatabase()
})

export default app;